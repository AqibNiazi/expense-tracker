import React from "react";
import ExpenseForm from "./ExpenseForm";
import styles from "./NewExpense.module.css";
const NewExpense = () => {
  return (
    <div className={styles["new-expense"]}>
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
