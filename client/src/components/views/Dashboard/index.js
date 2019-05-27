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
        budget_total: 0
    }
  }

  componentDidMount() {

    const that = this;

    function getBudgets(user_id) {
      return fetch(`http://localhost:3000/api/v1/users/${user_id}/budgets`)
      .then(resp => resp.json())
    }

    function getLineItems(budget_id) {
      return fetch(`http://localhost:3000/api/v1/budgets/${budget_id}/line_items`)
      .then(resp => resp.json())
    }

    function getBudgetMembers(budget_id) {
      return fetch(`http://localhost:3000/api/v1/budgets/${budget_id}/budget_members`)
      .then(resp => resp.json())
    }

    function getAPIdata(){
      return Promise.all([getBudgets(that.state.user.id), getLineItems(1), getBudgetMembers(1)])
    }

    function sumObjectValues(obj, values) {
      let sum = 0;
      for (var o in obj) {
        sum += obj[o][values]
      }
      return sum
    }

    function getUsersLineItems(line_items, user_id) {
      return line_items.filter(item => item.user_id === user_id);
    }

    getAPIdata()
      .then(([budgets, line_items, budget_members]) => {
        that.setState({budget: budgets[0], line_items: line_items, budget_members: budget_members})
        that.setState({ budget_total: sumObjectValues(line_items, 'amount')})
        console.log(`user line items ${JSON.stringify(getUsersLineItems(line_items, 1))}`)
      })

  }

  render() {
    var { budget, line_items, budget_members, budget_total } = this.state;
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
                  <BudgetInfo budget={budget} line_items={line_items} budget_members={budget_members} budget_total={budget_total}/>
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
