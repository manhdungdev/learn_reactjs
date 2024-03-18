import React, { useState } from 'react'
import styles from './todo-list.module.scss'
import TaskList from '../task-list'
import TaskInput from '../task-input'
import { Todo } from '../../@types/Todo.type'
export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)

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

  const startEdit = (id: string) => {
    const editTodo = todos.find((todo) => todo.id === id)
    if (editTodo) {
      setCurrentTodo(editTodo)
    }
  }

  const editTodo = (name: string) => {
    setCurrentTodo((prev) => {
      if (prev) {
        return { ...prev, name }
      }
      return null
    })
  }

  const finishedEdit = () => {
    setTodos((prev) => {
      return todos.map((todo) => {
        if (todo.id === (currentTodo as Todo).id) {
          return currentTodo as Todo
        }
        return todo
      })
    })
    setCurrentTodo(null)
  }

  console.log(todos)
  return (
    <div className={styles.todo_list}>
      <div className={styles.todo_wrap}>
        <TaskInput addTodo={addTodo} currentTodo={currentTodo} editTodo={editTodo} finishedEdit={finishedEdit} />
        <TaskList startEditTodo={startEdit} handleDoneTodo={handleDoneTodo} todos={notDoneTodos} />
        <TaskList startEditTodo={startEdit} handleDoneTodo={handleDoneTodo} doneTask todos={doneTodos} />
      </div>
    </div>
  )
}
