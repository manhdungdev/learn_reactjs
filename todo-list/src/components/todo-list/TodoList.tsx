import React, { useState } from 'react'
import styles from './todo-list.module.scss'
import TaskList from '../task-list'
import TaskInput from '../task-input'
import { Todo } from '../../@types/Todo.type'
export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])

  const doneTodos = todos.filter((todo) => todo.done)
  const notDoneTodos = todos.filter((todo) => !todo.done)

  const addTodo = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setTodos((prev) => [...prev, todo])
  }

  const handleDoneTodo = (id: string, done: boolean) => {
    console.log(done)
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done }
        }
        return todo
      })
    })
  }

  console.log(todos)
  return (
    <div className={styles.todo_list}>
      <div className={styles.todo_wrap}>
        <TaskInput addTodo={addTodo} />
        <TaskList handleDoneTodo={handleDoneTodo} todos={notDoneTodos} />
        <TaskList handleDoneTodo={handleDoneTodo} doneTask todos={doneTodos} />
      </div>
    </div>
  )
}
