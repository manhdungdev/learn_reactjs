import React, { useState } from 'react'
import styles from './task-input.module.scss'
import { Todo } from '../../@types/Todo.type'

interface TaskInputProps {
  addTodo: (name: string) => void
  currentTodo: Todo | null
  editTodo: (name: string) => void
  finishedEdit: () => void
}
export default function TaskInput(props: TaskInputProps) {
  const { addTodo, editTodo, finishedEdit, currentTodo } = props
  const [name, setName] = useState<string>('')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (currentTodo) {
      finishedEdit()
    } else {
      addTodo(name)
    }
    setName('')
  }
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (currentTodo) {
      editTodo(value)
    } else {
      setName(value)
    }
  }
  return (
    <div>
      <h2 className={styles.heading}>To do task list</h2>
      <form action='' onSubmit={handleSubmit}>
        <div className={styles.input_wrap}>
          <input
            value={currentTodo ? currentTodo.name : name}
            type='text'
            className={styles.input}
            placeholder='Input your task'
            onChange={onChangeInput}
          />
          <button className={styles.input_btn}>➕</button>
        </div>
      </form>
    </div>
  )
}
