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
      user: { id: 1 },
      budget_total: 0,
      budget_members_subtotals: []
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

    function sumObjectValues(obj, values) {
      let sum = 0;
      for (var o in obj) {
        sum += obj[o][values];
      }
      return sum;
    }

    function getUsersLineItems(line_items, user_id) {
      return line_items.filter(item => item.user_id === user_id);
    }

    getAPIdata().then(([budgets, line_items, budget_members]) => {
      that.setState({
        budget: budgets[0],
        line_items: line_items,
        budget_members: budget_members
      });
      that.setState({ budget_total: sumObjectValues(line_items, "amount") });
      console.log(
        `user line items ${JSON.stringify(getUsersLineItems(line_items, 1))}`
      );
    });
  }

  handleNewLineItemFormSubmit = evt => {
    evt.preventDefault();
    const budget_id = evt.target.budget_id.value;
    const user_id = "1";
    const name = evt.target.name.value;
    const amount = evt.target.amount.value;
    const paid = evt.target.paid.checked;

    axios.post(`api/v1/budgets/${budget_id}/line_items`, {
      budget_id: budget_id,
      name: name,
      amount: amount,
      paid: paid,
      user_id: user_id
    })
      .then(resp => console.log(resp)).catch(error => console.log(error));
  };


  render() {
    var { budget, line_items, budget_members, budget_total, user } = this.state;
    return (
      <Container className="budgetDashboard no-gutters" fluid="true">
        <DashboardTopNav />
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
                  <Container>
                    <WelcomeBanner />
                    <BudgetInfo budget={budget} line_items={line_items} budget_members={budget_members} budget_total={budget_total} />
                    <LineItemsContainer
                      line_items={line_items}
                      user={user}
                      budget_members={budget_members}
                      handleFormSubmit={this.handleNewLineItemFormSubmit}
                      budget_id={this.state.budget.id}
                    />
                  </Container>
                </Col>
                <Col className="usersAside" xl={4} lg={4} md={4} sm={4} xs={4}>
                  <BudgetMembersContainer budget_members={budget_members} />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
