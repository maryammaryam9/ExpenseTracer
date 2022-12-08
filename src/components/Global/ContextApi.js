import {  useReducer ,  createContext, useInsertionEffect } from "react";
import {AppReducer} from"./Reducer"
const initalstate = {
transactions:[
  // { id: 1, text: 'Flower', amount: -20 },
  // { id: 2, text: 'Salary', amount: 300 },
  // { id: 3, text: 'Book', amount: -10 },
  // { id: 4, text: 'Camera', amount: 150 }
]
}

export  const GlobalContext =createContext(initalstate);
export const ContextProvider=({children})=>{
 const [state, dispatch] = useReducer(AppReducer,initalstate)
  function DeleteTransactions(id){
    dispatch({
        type:"Delete_transaction",
        payload:id
    });

  }
  function AddTransaction(transaction){
       dispatch({
        type:"Add_Transaction",
        payload:transaction
       })
  }
  function EditTransactions(transaction){
    dispatch({
      type:"Editing_Transaction",
      payload:transaction
     })
  }
return <>
<GlobalContext.Provider value={{
    transactions:state.transactions,
    DeleteTransactions,
    AddTransaction,
    EditTransactions,
}}>
{children}
</GlobalContext.Provider>
</>
}