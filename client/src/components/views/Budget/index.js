import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DashboardTopNav from "../../common/Topnav/dashboard-top-nav.js";
import WelcomeBanner from "../../common/WelcomeBanner/welcomeBanner.js";
import DashboardSidebar from "../../common/Sidebar/dashboard-sidebar.js";
import BudgetInfo from "./Budget_Info/budget-info.js";
import BudgetMembersContainer from "./Budget_Member_Container/budget-members-container.js";
import LineItemsContainer from "./Line_Items_Container/line-items-container.js";
import LoadingSpinner from '../../common/Loading/';
import axios from 'axios';


class Budget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: [],
      line_items: [],
      budget_members: [],
      user: { id: 1, first: 'Karl', last: 'Johansson' },
      budget_members_subtotals: [],
      budget_total: {},
    };
  }

  componentDidMount() {
    const that = this;

    function getBudgets(user_id) {
      return fetch(
        `http://localhost:3000/api/v1/users/${user_id}/budgets`
      ).then(resp => resp.json());
    }

    function getLineItems(budget_id) {
      return fetch(
        `http://localhost:3000/api/v1/budgets/${budget_id}/line_items`
      ).then(resp => resp.json());
    }

    function getBudgetMembers(budget_id) {
      return fetch(
        `http://localhost:3000/api/v1/budgets/${budget_id}/budget_members`
      ).then(resp => resp.json());
    }

    function delay(t, v) {
      return new Promise(function(resolve) {
          setTimeout(resolve.bind(null, v), t)
      });
   }

    function getAPIdata() {
      return Promise.all([
        getBudgets(that.state.user.id),
        getLineItems(1),
        getBudgetMembers(1),
        delay(1500)
      ]);
    }

    // function getUsersLineItems(line_items, user_id) {
    //   return line_items.filter(item => item.user_id === user_id);
    // }

    getAPIdata().then(([budgets, line_items, budget_members]) => {
      let spinnerElement = document.getElementsByClassName("loadingSpinner");
      that.setState({
        budget: budgets[0],
        line_items: line_items,
        budget_members: budget_members
      });
      that.setState({ budget_total: this.sumObjectValues(line_items) });
      that.setState({ budget_members_subtotals: this.budgetMembersSubtotals(line_items, budget_members) });
      spinnerElement[0].style.display = "none";
      console.log(
        // `user line items ${JSON.stringify(getUsersLineItems(line_items, 1))}`
      );
    });
  }

  budgetMembersSubtotals(line_items, budget_members) {
    const results = {};
    budget_members.forEach(budget_member => {
      results[budget_member.id] = []
      line_items.forEach(line_item => {
        const amountOwed = (line_item.amount) / budget_members.length
        if (line_item.paid) {
          if (line_item.user_id === budget_member.id) {
            results[budget_member.id].push(amountOwed * (budget_members.length - 1) * -1)
          } else {
            results[budget_member.id].push(amountOwed)
          }
        } else {
          results[budget_member.id].push(amountOwed)
        }
      })
    });
    for (let budget_member in results) {
      if (results[budget_member].length !== 0) {
        results[budget_member] = results[budget_member].reduce((accumulator, currentValue) => accumulator + currentValue).toFixed(2)
      } else {
        results[budget_member] = 0
      }
    }
    return results
  }

  sumObjectValues = (line_items) => {
    let sum = {
      overall_total: 0,
      shared_total: 0,
      other_total: 0,
    };
    line_items.forEach(line_item => {
      sum.overall_total += line_item.amount
      if (line_item.paid) {
        sum.other_total += line_item.amount
      } else {
        sum.shared_total += line_item.amount
      }
    });
    return sum
  }

  clearNewItemForm = () => {
    document.getElementById("create-new-item-form").reset()
  }

  handleNewLineItemFormSubmit = line_item => {
    const { name, amount, paid } = line_item;
    const budget_id = this.state.budget.id;
    const user_id = this.state.user.id;
    const oldLineitems = this.state.line_items

    axios.post(`api/v1/budgets/${budget_id}/line_items`, {
      budget_id: budget_id,
      name: name,
      amount: amount,
      paid: paid,
      user_id: user_id
    })
      .then(resp => {
        this.setState({ line_items: [resp.data, ...oldLineitems] })
        this.setState({ budget_total: this.sumObjectValues(this.state.line_items) });
        this.setState({ budget_members_subtotals: this.budgetMembersSubtotals(this.state.line_items, this.state.budget_members) })
        this.clearNewItemForm();
      })
      .catch(error => {
        console.log("Error in posting a new line item", error)
      });

    this.setState({ name: '', amount: '', paid: false }) // <= here
  };

  handleLineItemDelete = id => {

    const oldLineitems = this.state.line_items
    const newLineItems = oldLineitems.filter(item => item.id !== id)
    axios.delete(`api/v1/budgets/${this.state.budget.id}/line_items/${id}`)
      .then(() => {
        this.setState({ line_items: [...newLineItems] })
      })
      .then(() => {
        this.setState({ budget_total: this.sumObjectValues(this.state.line_items) });
        this.setState({ budget_members_subtotals: this.budgetMembersSubtotals(this.state.line_items, this.state.budget_members) });
      })
      .catch(error => console.log(error));
  }

  handleLineItemUpdate = line_item => {
    fetch(`api/v1/budgets/${this.state.budget.id}/line_items/${line_item.id}`,
      {
        method: 'PUT',
        body: JSON.stringify(line_item),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(() => {
        console.log("update posted, now updating set state", line_item)
        this.updateLineItem(line_item)
        this.setState({ budget_total: this.sumObjectValues(this.state.line_items) });
        this.setState({ budget_members_subtotals: this.budgetMembersSubtotals(this.state.line_items, this.state.budget_members) });
      })
      .catch(error => {
        console.log("Error in updating new line item", error)
      })
  }

  updateLineItem = item => {
    let newLineItems = this.state.line_items.filter((f) => f.id !== item.id)
    newLineItems.push(item)
    newLineItems.sort(function (a, b) {
      return b.id - a.id;
    });
    this.setState({
      line_items: newLineItems
    })

  }

  render() {
    var { budget, line_items, budget_members, budget_total, user, budget_members_subtotals } = this.state;
    var currentUserSubtotal = budget_members_subtotals[user.id]
    return (

      <Container className="budgetDashboard no-gutters noGutters" fluid="true" >
        <LoadingSpinner className="loadingSpinner" />
        <DashboardTopNav userName={user} />
        <Row className="budgetDashboardInner" noGutters="true">
          <Col xl={1} lg={12} md={12} sm={12} xs={12}>
            <DashboardSidebar />
          </Col>
          <Col className="mainSectionWrap" xl={11} lg={12} md={12} sm={12} xs={12}>
            <Container fluid="true">
              <Row>
                <Col className="innerMainSection" xl={7} lg={6} md={12} sm={12} xs={12}>
                  <Container fluid="true">
                    <WelcomeBanner userName={user} />
                    <BudgetInfo budget={budget} line_items={line_items} budget_members={budget_members} budget_total={budget_total} />
                    <LineItemsContainer
                      line_items={line_items}
                      user={user}
                      budget_members={budget_members}
                      handleFormSubmit={this.handleNewLineItemFormSubmit}
                      budget_id={this.state.budget.id}
                      handleLineItemDelete={this.handleLineItemDelete}
                      handleLineItemUpdate={this.handleLineItemUpdate}
                      currentUserSubtotal={currentUserSubtotal}
                    />
                  </Container>
                </Col>
                <Col className="usersAside" xl={4} lg={6} md={12} sm={12} xs={12}>
                  <BudgetMembersContainer budget_members={budget_members} subtotals={budget_members_subtotals} budgetName={budget.name} />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container >
    );
  }
}

export default Budget;
