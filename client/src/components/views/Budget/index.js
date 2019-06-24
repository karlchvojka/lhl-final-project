import React, { useState, useEffect, createContext, useContext, useReducer } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DashboardTopNav from "../../common/Topnav/dashboard-top-nav.js";
import WelcomeBanner from "../../common/WelcomeBanner/welcomeBanner.js";
import DashboardSidebar from "../../common/Sidebar/dashboard-sidebar.js";
import BudgetInfo from "./Budget_Info/budget-info.js";
import BudgetMembersContainer from "./Budget_Member_Container/budget-members-container.js";
import LineItemsContainer from "./Line_Items_Container/line-items-container.js";
import LoadingSpinner from '../../common/Loading/';
import axios from 'axios';

import { lineitemReducer } from "../../../hooks/reducers.js";

export const StateContext = createContext(null);

const Budget = props => {
  let 
        // budget = [], 
        // budget_members = [],
        user = { id: 1, first: 'Andrea', last: 'Mastrantoni' };
        // budget_members_subtotals = [],
        // budget_total = {};
  
  const [lineitems, dispatchLineitems] = useReducer(lineitemReducer, []);
  const [budgetmembers, setBudgetmembers] = useState([]);
  const [budgetmemberssubtotals, setBudgetmemberssubtotals] = useState([])
  const [budgettotal, setBudgettotal] = useState({});
  const [budget, setBudget] = useState({});

  useEffect(() => {
    const { match: { params } } = props;
    console.log("This is the id", params.id)

    function getBudget(budget_id) {
      return fetch(
        `http://localhost:3000/api/v1/budgets/${budget_id}`
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
      return new Promise(function (resolve) {
        setTimeout(resolve.bind(null, v), t)
      });
    }

    function getAPIdata() {
      return Promise.all([
        getBudget(params.id),
        getLineItems(params.id),
        getBudgetMembers(params.id),
        delay(1500)
      ]);
    }

    // function getUsersLineItems(line_items, user_id) {
    //   return line_items.filter(item => item.user_id === user_id);
    // }

    getAPIdata().then(([pullbudget, pullline_items, pullbudget_members]) => {
      let spinnerElement = document.getElementsByClassName("loadingSpinner");
      console.log("this is the budget pulled", pullbudget)
      setBudget(prevBudget => ({...pullbudget}));
      setBudgetmembers(prevMembers => ([...pullbudget_members]));
      dispatchLineitems({ type: "", data: pullline_items});
      spinnerElement[0].style.display = "none";
      // setBudgettotal(sumObjectValues(lineitems));
      // setBudgetmemberssubtotals({...budgetMembersSubtotals(lineitems, budgetmembers)});

      console.log(
        // `user line items ${JSON.stringify(getUsersLineItems(line_items, 1))}`
        "these are the gotten APIs", lineitems, budgetmembers, budget, budgettotal, budgetmemberssubtotals
      );
    });

  }, [] );

  useEffect(() => {
    // budgettotal = sumObjectValues(lineitems);
    // budgetmemberssubtotals = budgetMembersSubtotals(lineitems, budgetmembers);
    setBudgettotal(sumObjectValues(lineitems));
    setBudgetmemberssubtotals({...budgetMembersSubtotals(lineitems, budgetmembers)});
    console.log(
      // `user line items ${JSON.stringify(getUsersLineItems(line_items, 1))}`
      'part 2', lineitems, budgetmembers, budget, budgettotal, budgetmemberssubtotals
    );
  }, [lineitems, budgetmembers])

  const budgetMembersSubtotals = (line_items, budget_members) => {
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

  const sumObjectValues = (line_items) => {
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
    console.log("This isthe sum", sum)
    return sum
  }

  const clearNewItemForm = () => {
    document.getElementById("create-new-item-form").reset()
  }

  const handleNewLineItemFormSubmit = line_item => {
    const { name, amount, paid } = line_item;
    const budget_id = budget.id;
    const user_id = user.id;
    const oldLineitems = [...lineitems];
    axios.post(`/api/v1/budgets/${budget_id}/line_items`, {
      budget_id: budget_id,
      name: name,
      amount: amount,
      paid: paid,
      user_id: user_id
    })
      .then(resp => {
        
        dispatchLineitems({ type: "ADD_LINEITEM", line_item: resp.data} )
        setBudgettotal(sumObjectValues(lineitems));
        setBudgetmemberssubtotals({...budgetMembersSubtotals(lineitems, budgetmembers)});
        clearNewItemForm();
      })
      .catch(error => {
        console.log("Error in posting a new line item", error)
      });

    // this.setState({ name: '', amount: '', paid: false }) // <= here
  };

  const handleLineItemDelete = id => {
    axios.delete(`/api/v1/budgets/${budget.id}/line_items/${id}`)
      .then(() => {
        dispatchLineitems({ type: "DELETE_LINEITEM", id} )
      })
      .then(() => {
        setBudgettotal([...sumObjectValues(lineitems)]);
        setBudgetmemberssubtotals({...budgetMembersSubtotals(lineitems, budgetmembers)});
      })
      .catch(error => console.log(error));
  }

  const handleLineItemUpdate = line_item => {
    fetch(`/api/v1/budgets/${budget.id}/line_items/${line_item.id}`,
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
        setBudgettotal([...sumObjectValues(lineitems)]);
        setBudgetmemberssubtotals({...budgetMembersSubtotals(lineitems, budgetmembers)});
      })
      .catch(error => {
        console.log("Error in updating new line item", error)
      })
  }

  const updateLineItem = item => {
    let newLineItems = lineitems.filter((f) => f.id !== item.id)
    newLineItems.push(item)
    newLineItems.sort(function (a, b) {
      return b.id - a.id;
    });
    // setLineitems([...newLineItems]);
  }

  var currentUserSubtotal = budgetmemberssubtotals[user.id]
  return (

    <StateContext.Provider
      // initialState={lineitems} reducer={lineitemReducer}
      value = {{ lineitems, dispatchLineitems }}
    >
    <Container className="budgetDashboard no-gutters noGutters" fluid="true" >
      <LoadingSpinner className="loadingSpinner" message="Settling Squabbles..." />
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
                  <BudgetInfo budget={budget} line_items={lineitems} budget_members={budgetmembers} budget_total={budgettotal} />
                  <LineItemsContainer
                    // line_items={lineitems}
                    user={user}
                    budget_members={budgetmembers}
                    handleFormSubmit={handleNewLineItemFormSubmit}
                    budget_id={budget.id}
                    handleLineItemDelete={handleLineItemDelete}
                    handleLineItemUpdate={handleLineItemUpdate}
                    currentUserSubtotal={currentUserSubtotal}
                    />
                </Container>
              </Col>
              <Col className="usersAside" xl={4} lg={6} md={12} sm={12} xs={12}>
                <BudgetMembersContainer user={user} budget_members={budgetmembers} subtotals={budgetmemberssubtotals} budgetName={budget.name} />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container >
  </StateContext.Provider>
  );
  
}

export {Budget};
