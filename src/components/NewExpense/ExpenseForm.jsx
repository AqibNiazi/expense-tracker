import React, { useState } from "react";
import styles from "./ExpenseForm.module.css";
const ExpenseForm = ({ onSaveExpenseData }) => {
  // const [userInput, setuserInput] = useState({
  //   enteredTitle: "",                                          //state object
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={styles["new-expense__controls"]}>
        <div className={styles["new-expense__control"]}>
          <label>Title</label>
          <input
            type="text"
            onChange={(e) => setEnteredTitle(e.target.value)}
            value={enteredTitle}
            // onChange={(e) =>
            //   setuserInput((prevState) => {
            //     return { ...prevState, enteredTitle: e.target.value };   //use this approach when your state depends on previous state.
            //   })
            // }
          />
        </div>
        <div className={styles["new-expense__control"]}>
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={(e) => setEnteredAmount(e.target.value)}
            // onChange={(e) =>
            //   setuserInput((prevState) => {
            //     return { ...prevState, enteredAmount: e.target.value };
            //   })
            // }
          />
        </div>
        <div className={styles["new-expense__control"]}>
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={(e) => setEnteredDate(e.target.value)}
            // onChange={(e) =>
            //   setuserInput((prevState) => {
            //     return { ...prevState, enteredDate: e.target.value };
            //   })
            // }
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
