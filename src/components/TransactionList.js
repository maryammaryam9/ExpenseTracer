import React, { useContext } from 'react'
import { GlobalContext } from "./Global/ContextApi"
import Transaction from"./Transaction"
export const TransactionList = () => {
  let { transactions } = useContext(GlobalContext);
  console.log(transactions)
  return <>
    <h3>History</h3>
    <ul className="list">
      {
      transactions.map((transaction)=> <Transaction key={transaction.id} transaction={transaction}></Transaction>)

        }
    </ul>

  </>
}
