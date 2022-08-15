import React from 'react'
import Balance from './components/Balance'
import Header from './components/Header'
import './App.css'
import IncomeExpense from './components/IncomeExpense'
import Transaction from './components/Transaction'
import History from './components/History'



const App = () => {
  return (
    <div className='App'>
      <Header />
      <Balance />
      <IncomeExpense />
      <History/>
      <Transaction />  
    </div>
      
  )
}

export default App