import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(readTodo);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleUpdate = (updated) => {
    setTodos(todos.map((a) => (a.id === updated.id ? updated : a)));
  };

  const handleDelete = (deleted) => {
    setTodos(todos.filter((a) => a.id !== deleted.id));
  };

  const filtered = getFilteredItems(todos, filter);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function readTodo() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
