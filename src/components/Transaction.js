import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text: text,
      amount: +amount,
    };
    addTransaction(newTransaction)
  };

  return (
    <div className="transaction">
      <h3>Add new transaction</h3>
      <form action="" onSubmit={onSubmit}>
        <div className="text">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            name="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="amount">
          <label htmlFor="amount">
            Amount <span>(negative - expense, positive - income)</span>
          </label>
          <input
            type="number"
            name="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit">Add transaction</button>
      </form>
    </div>
  );
};

export default Transaction;
