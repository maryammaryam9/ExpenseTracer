import { GlobalContext } from "./Global/ContextApi"
import { useContext} from "react"
export const Balance = () => {
  
  
  const { transactions } = useContext(GlobalContext); 

  const amount=transactions.map( transaction =>transaction.amount);
  const totle=amount.reduce((pre,next)=>(pre+=next),0).toFixed(2);
  
 
  return <>
    <h4>Your Balance</h4>
      <h1>${ totle}</h1>
  </>
}
