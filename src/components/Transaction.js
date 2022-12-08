 import React, { useContext } from 'react'
 import { GlobalContext}from"./Global/ContextApi"

 const Transaction = ({transaction}) => {
      const {DeleteTransactions}=useContext(GlobalContext);
      const { EditTransactions}=useContext(GlobalContext);

   return <>
    <li className= {transaction.amount <0? "minus":" plus"}>
            {transaction.text} <span>{ Math.abs(transaction.amount)}</span>
            <button onClick={()=>{
              DeleteTransactions(transaction.id)
            }} className="delete-btn">Delete</button>
                <button onClick={()=>{
              let Editname=prompt("Enter text");
              let Enteramount=Number(prompt("Enter amount"));
              EditTransactions(transaction.amount=Enteramount);
              EditTransactions(transaction.text=Editname);

              }}
            >Edit</button>
          </li>
          
   </>
 }
 export default Transaction;
 