export const ADD_LINEITEM = 'ADD_LINEITEM'
export const DELETE_LINEITEM = 'DELETE_LINEITEM'
export const UPDATE_LINEITEM = 'UPDATE_LINEITEM'

// import 

// const initialState= {

// }


const handleNewLineItemFormSubmit = (line_item, state) => {
  // const { name, amount, paid } = line_item;
  // const budget_id = budget.id;
  // const user_id = user.id;
  // const oldLineitems = [...state.lineitems];
  // console.log("THis is the budget", this.state.budget)
  // axios.post(`/api/v1/budgets/${budget_id}/line_items`, {
  //   budget_id: budget_id,
  //   name: name,
  //   amount: amount,
  //   paid: paid,
  //   user_id: user_id
  // })
  //   .then(resp => {
      
  //     setLineitems([resp  .data, ...oldLineitems])
  //     budget_total = sumObjectValues(lineitems);
  //     budget_members_subtotals = budgetMembersSubtotals(lineitems, budget_members)
  //     clearNewItemForm();
  //   })
  //   .catch(error => {
  //     console.log("Error in posting a new line item", error)
  //   });

  // // this.setState({ name: '', amount: '', paid: false }) // <= here
};

// const handleLineItemDelete = id => {

//   const oldLineitems = [...lineitems];
//   const newLineItems = oldLineitems.filter(item => item.id !== id)
//   axios.delete(`/api/v1/budgets/${budget.id}/line_items/${id}`)
//     .then(() => {
//       setLineitems([...newLineItems])
//     })
//     .then(() => {
//       budget_total = sumObjectValues(lineitems);
//       budget_members_subtotals = budgetMembersSubtotals(lineitems, budget_members);
//     })
//     .catch(error => console.log(error));
// }

// const handleLineItemUpdate = line_item => {
//   fetch(`/api/v1/budgets/${budget.id}/line_items/${line_item.id}`,
//     {
//       method: 'PUT',
//       body: JSON.stringify(line_item),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(() => {
//       console.log("update posted, now updating set state", line_item)
//       this.updateLineItem(line_item)
//       budget_total = sumObjectValues(lineitems);
//       budget_members_subtotals = budgetMembersSubtotals(lineitems, budget_members);
//     })
//     .catch(error => {
//       console.log("Error in updating new line item", error)
//     })
// }

// const updateLineItem = item => {
//   let newLineItems = lineitems.filter((f) => f.id !== item.id)
//   newLineItems.push(item)
//   newLineItems.sort(function (a, b) {
//     return b.id - a.id;
//   });
//   setLineitems([...newLineItems]);
// }




export const lineitemReducer = (state, action) => {
  switch (action.type) {
    case ADD_LINEITEM:
      return handleNewLineItemFormSubmit(action.line_item, state.lineitems);
    case DELETE_LINEITEM:
      return ;
    case UPDATE_LINEITEM:
      return;
    default:
      return state;
  }

};
