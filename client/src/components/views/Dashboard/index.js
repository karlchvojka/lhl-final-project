import React, { Component } from 'react';
import DashboardTopNav from "./dashboard-top-nav.js";
import DashboardSidebar from "./dashboard-sidebar.js";
import BudgetInfo from "./budget-info.js";
import BudgetMembersContainer from './Budget_Member_Container/budget-members-container.js';
import LineItemsContainer from './Line_Items_Container/line-items-container.js';

class Dashboard extends Component {
  render() {
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
                  <BudgetInfo />
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
