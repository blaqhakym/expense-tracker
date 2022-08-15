import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const [balState, setBalState] = useState("");
  const [color, setColor] = useState("");

  

  const amount = transactions.map((transaction) => transaction.amount);

  const balance = amount.reduce((first, next) => first + next, 0);

  useEffect(() => {
    if ((balance > 0) & (balance < 150)) {
      setBalState("Weldone, but you can do better");
      setColor("lightgreen");

    } else if (balance >= 150) {
      setBalState("You are on your way to financial freedom");
      setColor("green");

    } else if (balance < 0) {
      setBalState("You are in debt");
      setColor("lightcoral");

    } else {
      setBalState("Have you saved today? Try putting a dollar here");
      setColor("black");

    }
  }, [balance]);

  return (
    <div className="balance">
      <h3>Your balance</h3>
      <div
        style={{color:color}}
      >
        ${balance}
      </div>
      <div
        style={{
          fontSize: "14px",
          marginTop: "5px",
          color: color,
        }}
      >
        {balState}
      </div>
    </div>
  );
};

export default Balance;
