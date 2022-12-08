export const AppReducer = (state,action) => {
  switch (action.type) {
   case "Delete_transaction":
    return {
      ...state,
      transactions:state.transactions.filter( transaction=> transaction.id!== action.payload)
    }
    
    case "Add_Transaction":
      return {
        ...state,
        transactions:[action.payload,...state.transactions]
      } 
     
     
      case "Editing_Transaction":
        return {
          ...state,
        transactions:state.transactions.filter( transaction=> transaction.id!== action.payload)
 } 
    default:
      return state;
  }
}
