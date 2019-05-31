import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DashboardTopNav from "../../common/Topnav/dashboard-top-nav.js";
import DashboardSidebar from "../../common/Sidebar/dashboard-sidebar.js";


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { id: 1, first: 'Karl', last: 'Johansson' },
    };
  }
  render() {
    var { user } = this.state;

    return (
      <Container className="overallDashboard no-gutters noGutters" fluid="true">
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
                    <h1>Dashboard</h1>
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
