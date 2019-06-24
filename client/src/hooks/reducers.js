export const ADD_LINEITEM = 'ADD_LINEITEM'
export const DELETE_LINEITEM = 'DELETE_LINEITEM'
export const UPDATE_LINEITEM = 'UPDATE_LINEITEM'

// import 

// const initialState= {

// }


const handleNewLineItemFormSubmit = (line_item, state) => {
  state.concat(line_item);
};

const handleLineItemDelete = (id, state) => {
  console.log("This is the state", state, id)

  const newLineItems = state.filter(item => item.id !== id)
  state = newLineItems.slice(0);
  // setLineitems([...newLineItems])
}

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
  console.log("This is line item reducer", state, action)
  switch (action.type) {
    case ADD_LINEITEM:
      return handleNewLineItemFormSubmit(action.line_item, state);
    case DELETE_LINEITEM:
      return handleLineItemDelete(action.id, state);
    case UPDATE_LINEITEM:
      return;
    default:
      return action.data;
  }

};
