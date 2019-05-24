import React, { Component } from 'react';
import DashboardTopNav from "./dashboard-top-nav.js";
import DashboardSidebar from "./dashboard-sidebar.js";
import BudgetInfo from "./budget-info.js";
import BudgetMembersContainer from './Budget_Member_Container/budget-members-container.js';
import LineItemsContainer from './Line_Items_Container/line-items-container.js';

class Dashboard extends Component {

  constructor(props){
    super(props)
    this.state = {
        budget: [],
        line_items: [],
        budget_members: [],
        user: [ {id: 1} ],
        budgetLoaded: false,
        line_itemsLoaded: false,
        budget_membersLoaded: false
    }
  }

  componentDidMount() {

    // var Promise = 

    fetch(`http://localhost:3000/api/v1/budgets/1`)
    .then(resp => resp.json())
    .then(resp => {
        console.log('Budgets fetched.')
        this.setState({
          budget: resp,
          budgetLoaded: true
        });
    })

    fetch(`http://localhost:3000/api/v1/budgets/1/line_items`)
    .then(resp => resp.json())
    .then(resp => {
        console.log('Line items fetched.', resp)
        this.setState({
          line_items: resp,
          line_itemsLoaded: true
        });
    })
    fetch(`http://localhost:3000/api/v1/budgets/1/budget_members`)

    .then(resp => resp.json())
        console.log('Budget members fetched.', resp)
    .then(resp => {
        this.setState({
          budget_membersLoaded: true
          budget_members: resp,
        });
    })

  }

  sumObjectValues(obj, values) {
    let sum;
    for (var o in obj) {
      console.log("This is the obj[o][values]", obj[o][values])
      sum += obj[o][values]
    }
    console.log("this is hte sum", sum, values);
    return sum
  } 

  render() {
    var { budget, line_items, budget_members } = this.state;
    return (
      <div className="container-fluid budgetDashboard">
        <DashboardTopNav />
        <div className="row">
          <div className="col-2">
            <DashboardSidebar />
          </div>
          <div className="col-10">
            <div className="container">
              <div className="row">
                <div className="col-10">
      <BudgetInfo budget={budget} line_items={line_items} budget_members={budget_members} sumObjectValues={this.sumObjectValues}/>
                  <LineItemsContainer />
                </div>
                <div className="col-2">
                  <BudgetMembersContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
  }

  export default Dashboard;
