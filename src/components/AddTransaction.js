import React, { useContext, useState } from 'react'
import { GlobalContext } from './Global/ContextApi';

export const AddTransaction = () => {
    let [text,setText]=useState(" ");
    let [amount,setamount]=useState(0);

    let { AddTransaction}=useContext(GlobalContext);
    let {   EditTransactions}=useContext(GlobalContext);

    const Submittied= (e)=>{
      e.preventDefault();
      
      const newTransaction={
        id:Math.floor(Math.random()*100000),
        text,
       amount:+amount

      }
      AddTransaction(newTransaction);
      EditTransactions(newTransaction)
      e.target.reset();
    }
  return  <>
  <>
  <h3>Add new transaction</h3>
  <form  onSubmit={Submittied} >
    <div className="form-control">
      <label htmlFor="text">Text</label>
      <input value={text} onChange={(e)=>{
     setText(e.target.value);
      }} 
       type="text" id="text" placeholder="Enter text..." />
    </div>
    <div className="form-control">
      <label htmlFor="amount">
        Amount <br />
        (negative - expense, positive - income)
      </label>
      <input  value={amount}   onChange={(e)=>{
     setamount(e.target.value);
      }}   type="number" id="amount" placeholder="Enter amount..." />
    </div>
    <button className="btn">Add transaction</button>
  </form>
</>

  </>
}
