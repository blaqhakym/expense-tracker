import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const {transactions } = useContext(GlobalContext)

  const total = transactions.map(transaction => transaction.amount)
  
  const init = 0
  const income = total.filter(tr => tr > 0).reduce((f,n)=>f+n, init)
  const expense = total.filter(tr => tr < 0).reduce((f,n)=>f+n, init)

  
  

  return (
    <div className="ie">
      <div className="income">
        <div className="text">Income</div>
        <div className="green">${Math.abs(income)}</div>
      </div>
      <div className="expense">
        <div className="text">Expense</div>
        <div className="red">${ Math.abs(expense)}</div>
      </div>
    </div>
  );
};

export default IncomeExpense;
