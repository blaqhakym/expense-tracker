import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

const History = () => {
  const { transactions, deleteTransaction, addTransaction } =
    useContext(GlobalContext);

  return (
    <div className="history">
      <h3>History</h3>
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className={"content"}
          style={
            transaction.amount > 0
              ? { borderRightColor: "lightgreen" }
              : { borderRightColor: "lightcoral" }
          }
        >
          <div className="text">{transaction.text}</div>
          <div className="amount">${transaction.amount}</div>
          <button
            className="cls"
            onClick={() => {
              const result = window.confirm("Are you sure you want to remove?");
              if (result) {
                deleteTransaction(transaction.id);
              }
            }}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default History;
