import React from "react";
import styles from "./ExpensesFilter.module.css";
const ExpensesFilter = ({ selected, onChangeFilter }) => {
  return (
    <div className={styles["expenses-filter"]}>
      <div className={styles["expenses-filter__control"]}>
        <label>Filter by year</label>
        <select
          value={selected}
          onChange={(e) => onChangeFilter(e.target.value)}
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
