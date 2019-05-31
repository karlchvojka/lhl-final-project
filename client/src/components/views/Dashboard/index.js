import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DashboardTopNav from "../../common/Topnav/dashboard-top-nav.js";
import DashboardSidebar from "../../common/Sidebar/dashboard-sidebar.js";
import WelcomeBanner from "../../common/WelcomeBanner/welcomeBanner.js";
import LoadingSpinner from "../../common/Loading/index.js";
import BudgetCard from './budgetCard/';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { id: 1, first: 'Andrea', last: 'Mastratoni' },
      budget: []
    };
  }
  componentDidMount() {
    const that = this;

    function getBudgets(user_id) {
      return fetch(
        `http://localhost:3000/api/v1/users/${user_id}/budgets`
      ).then(resp => resp.json());
    }
    function delay(t, v) {
      return new Promise(function (resolve) {
        setTimeout(resolve.bind(null, v), t)
      });
    }

    function getAPIdata() {
      return Promise.all([
        getBudgets(that.state.user.id),
        delay(1500)
      ]);
    }

    getAPIdata().then(([budgets]) => {
      let spinnerElement = document.getElementsByClassName("loadingSpinner");
      that.setState({
        budget: budgets
      });
      spinnerElement[0].style.display = "none";
      console.log(
        // `user line items ${JSON.stringify(getUsersLineItems(line_items, 1))}`
      );
    });

  }
  render() {
    var { user } = this.state;
    var { budget } = this.state;
    console.log(this.state.budget);
    return (
      <Container className="overallDashboard no-gutters noGutters" fluid="true">
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
                    <Row className="budgetCardWraps">
                    {this.state.budget.map(item => (
                      <BudgetCard key={item.id} budgetName={item.name} budgetID={item.id} users={item.members} />
                    ))}
                    </Row>
                  </Container>
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
