import React from 'react';
import styles from "../todo-page.module.css";

const ViewTodo = ({ title }) => (
  <h2 className={styles.todoTitle}>{title}</h2>
);

export default ViewTodo;