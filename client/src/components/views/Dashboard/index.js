import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DashboardTopNav from "./dashboard-top-nav.js";
import WelcomeBanner from "./welcomeBanner.js";
import DashboardSidebar from "./dashboard-sidebar.js";
import BudgetInfo from "./budget-info.js";
import BudgetMembersContainer from "./Budget_Member_Container/budget-members-container.js";
import LineItemsContainer from "./Line_Items_Container/line-items-container.js";
import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: [],
      line_items: [],
      budget_members: [],
      user: { id: 1, first: 'Karl', last: 'Johansson' },
      budget_members_subtotals: [],
      budget_total: 0,
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

    function getAPIdata() {
      return Promise.all([
        getBudgets(that.state.user.id),
        getLineItems(1),
        getBudgetMembers(1)
      ]);
    }

    // function getUsersLineItems(line_items, user_id) {
    //   return line_items.filter(item => item.user_id === user_id);
    // }


    getAPIdata().then(([budgets, line_items, budget_members]) => {
      that.setState({
        budget: budgets[0],
        line_items: line_items,
        budget_members: budget_members
      });
      that.setState({ budget_total: this.sumObjectValues(line_items, "amount") });
      that.setState({ budget_members_subtotals: this.budgetMembersSubtotals(line_items, budget_members) });
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
      results[budget_member] = results[budget_member].reduce((accumulator, currentValue) => accumulator + currentValue).toFixed(2)
    }
    return results
  }

  sumObjectValues = (obj, values) => {
    let sum = 0;
    for (var o in obj) {
      sum += obj[o][values];
    }
    return sum;
  }

  clearNewItemForm = () => {
    document.getElementById("create-new-item-form").reset();
  }

  handleNewLineItemFormSubmit = evt => {
    evt.preventDefault();
    const budget_id = evt.target.budget_id.value;
    const user_id = "1";
    const name = evt.target.name.value;
    const amount = evt.target.amount.value;
    const paid = evt.target.paid.checked;
    const oldLineitems = this.state.line_items

    axios.post(`api/v1/budgets/${budget_id}/line_items`, {
      budget_id: budget_id,
      name: name,
      amount: amount,
      paid: paid,
      user_id: user_id
    })
      .then(resp => {
        this.setState({ line_items: [...oldLineitems, resp.data] })
        this.setState({ budget_total: this.sumObjectValues(this.state.line_items, "amount") });
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
        console.log("This is the delete", newLineItems)
        this.setState({ line_items: [...newLineItems] })
      })
      .then(() => {
        this.setState({ budget_total: this.sumObjectValues(this.state.line_items, "amount") });
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
        this.setState({ budget_total: this.sumObjectValues(this.state.line_items, "amount") });
        this.setState({ budget_members_subtotals: this.budgetMembersSubtotals(this.state.line_items, this.state.budget_members) });
      })
      .catch(error => {
        console.log("Error in updating new line item", error)
      })
  }

  updateLineItem = item => {
    let newLineItems = this.state.line_items.filter((f) => f.id !== item.id)
    console.log("this is items", this.state.line_items, "this is new fruits", newLineItems)
    newLineItems.push(item)
    newLineItems.sort(function (a, b) {
      return a.id - b.id;
    });
    this.setState({
      line_items: newLineItems
    })

  }

  render() {
    var { budget, line_items, budget_members, budget_total, user, budget_members_subtotals } = this.state;
    var currentUserSubtotal = budget_members_subtotals[user.id]
    return (

      < Container className="budgetDashboard no-gutters" fluid="true" >
        <DashboardTopNav userName={user} />
        <Row className="budgetDashboardInner" noGutters="true">
          <Col xl={1} lg={1} md={1} sm={1} xs={1}>
            <DashboardSidebar />
          </Col>
          <Col
            className="mainSectionWrap"
            xl={11}
            lg={11}
            md={11}
            sm={11}
            xs={11}
          >
            <Container fluid="true">
              <Row>
                <Col className="innerMainSection" xl={7} lg={7} md={7} sm={7} xs={7}>
                  <Container fluid="true">
                    <WelcomeBanner userName={user} />
                    <BudgetInfo budget={budget} line_items={line_items} budget_members={budget_members} budget_total={budget_total} currentUserSubtotal={currentUserSubtotal} />
                    <LineItemsContainer
                      line_items={line_items}
                      user={user}
                      budget_members={budget_members}
                      handleFormSubmit={this.handleNewLineItemFormSubmit}
                      budget_id={this.state.budget.id}
                      handleLineItemDelete={this.handleLineItemDelete}
                      handleLineItemUpdate={this.handleLineItemUpdate}
                    />
                  </Container>
                </Col>
                <Col className="usersAside" xl={4} lg={4} md={4} sm={4} xs={4}>
                  <BudgetMembersContainer budget_members={budget_members} subtotals={budget_members_subtotals} />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container >
    );
  }
}

export default Dashboard;
