import './App.css';
import   Header from"./components/Header"
import {Balance } from"./components/Balance"
import {Incomeexpense}from"./components/Incomeexpense"
import {TransactionList}  from"./components/TransactionList"
import {AddTransaction} from"./components/AddTransaction"
import {ContextProvider} from "./components/Global/ContextApi"
function App() {
  return<>
  <ContextProvider>

   <Header></Header>
   <div className="container">
   <Balance></Balance>
   <Incomeexpense></Incomeexpense>
   <TransactionList></TransactionList>
   <AddTransaction></AddTransaction>
   </div>
  </ContextProvider>
 
  </>
}

export default App;
