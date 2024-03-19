import React, { useEffect, useState } from 'react'
import styles from './todo-list.module.scss'
import TaskList from '../task-list'
import TaskInput from '../task-input'
import { Todo } from '../../@types/Todo.type'

// interface HandleTodos {
//   (todosObj: Todo[]): Todo[]
// }

type HandleTodos = (todos: Todo[]) => Todo[]

const handleLocalStorate = (handleTodos: HandleTodos) => {
  const todosJson = localStorage.getItem('todos')
  const todosObj: Todo[] = JSON.parse(todosJson || '[]')
  const newTodosObj = handleTodos(todosObj)
  localStorage.setItem('todos', JSON.stringify(newTodosObj))
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)

  const doneTodos = todos.filter((todo) => todo.done)
  const notDoneTodos = todos.filter((todo) => !todo.done)

  useEffect(() => {
    const todosString = localStorage.getItem('todos')
    const todosObj: Todo[] = JSON.parse(todosString || '[]')
    setTodos(todosObj)
  }, [])

  const addTodo = (name: string) => {
    const handler = (todosObj: Todo[]) => {
      return [...todosObj, todo]
    }
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setTodos((prev) => [...prev, todo])
    handleLocalStorate(handler)
  }

  const handleDoneTodo = (id: string, done: boolean) => {
    const handler = (prev: Todo[]) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done }
        }
        return todo
      })
    }
    setTodos(handler)
    handleLocalStorate(handler)
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
    const handler = (prev: Todo[]) => {
      return prev.map((todo) => {
        if (todo.id === (currentTodo as Todo).id) {
          return currentTodo as Todo
        }
        return todo
      })
    }
    setTodos(handler)
    setCurrentTodo(null)
    handleLocalStorate(handler)
  }

  const deleteTodo = (id: string) => {
    if (currentTodo) {
      setCurrentTodo(null)
    }
    const handler = (prev: Todo[]) => {
      // const index = prev.findIndex((todo) => todo.id === id)
      // if (index != -1) {
      //   const newState = [...prev]
      //   newState.splice(index, 1)
      //   return newState
      // }
      // return prev
      return prev.filter((todo) => todo.id !== id)
    }
    setTodos(handler)
    handleLocalStorate(handler)
  }

  console.log(todos)
  return (
    <div className={styles.todo_list}>
      <div className={styles.todo_wrap}>
        <TaskInput addTodo={addTodo} currentTodo={currentTodo} editTodo={editTodo} finishedEdit={finishedEdit} />
        <TaskList
          deleteTodo={deleteTodo}
          startEditTodo={startEdit}
          handleDoneTodo={handleDoneTodo}
          todos={notDoneTodos}
        />
        <TaskList
          deleteTodo={deleteTodo}
          startEditTodo={startEdit}
          handleDoneTodo={handleDoneTodo}
          doneTask
          todos={doneTodos}
        />
      </div>
    </div>
  )
}
