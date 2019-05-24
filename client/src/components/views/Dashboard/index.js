import React, { Component } from 'react';
import NavbarComp from "../Home/home-nav-bar.js"
import BudgetInfo from "./budget-info"

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
    .then(resp => {
        console.log('Budget members fetched.', resp)
        this.setState({
          budget_members: resp,
          budget_membersLoaded: true
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
      <div>
      <NavbarComp />
      <BudgetInfo budget={budget} line_items={line_items} budget_members={budget_members} sumObjectValues={this.sumObjectValues}/>
        <p>Dashboard Layout Component</p>
      </div>
      )
    }
  }

  export default Dashboard;
