import React from "react";
import ExpenseForm from "./ExpenseForm";
import styles from "./NewExpense.module.css";
const NewExpense = ({ onAddExpenseHandler }) => {
  const saveExpenseDataHandler = (enteredExpensedData) => {
    const expenseData = {
      ...enteredExpensedData,
      id: Math.random().toString(),
    };
    onAddExpenseHandler(expenseData);
  };
  return (
    <div className={styles["new-expense"]}>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
