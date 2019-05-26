import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DashboardTopNav from "./dashboard-top-nav.js";
import WelcomeBanner from "./welcomeBanner.js";
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
      <Container className="budgetDashboard no-gutters" fluid="true">
        <DashboardTopNav />
        <Row className="budgetDashboardInner" noGutters='true'>
          <Col xl={1} lg={1} md={1} sm={1} xs={1}>
            <DashboardSidebar />
          </Col>
          <Col className="mainSectionWrap" xl={11} lg={11} md={11} sm={11} xs={11}>
            <Container fluid='true'>
              <Row>
                <Col className="innerMainSection" xl={7} lg={7} md={7} sm={7} xs={7}>
                  <WelcomeBanner />
                  <BudgetInfo budget={budget} line_items={line_items} budget_members={budget_members} sumObjectValues={this.sumObjectValues}/>
                  <LineItemsContainer />
                </Col>
                <Col className="usersAside" xl={4} lg={4} md={4} sm={4} xs={4}>
                  <BudgetMembersContainer />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      )
    }
  }

  export default Dashboard;
