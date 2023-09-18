import React from "react";
import ExpenseItem from "./ExpenseItem";
import styles from "./ExpensesList.module.css";
const ExpensesList = ({ expensesList }) => {
  if (expensesList.length === 0) {
    return (
      <h2 className={styles["expenses-list__fallback"]}>No expenses found</h2>
    );
  }
  return (
    <ul className={styles["expenses-list"]}>
      {expensesList.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
