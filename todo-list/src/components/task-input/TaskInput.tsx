import React, { useState } from 'react'
import styles from './task-input.module.scss'
import { Todo } from '../../@types/Todo.type'
import { debug, log } from '../todo-list/constant'
import connect from '../todo-list/connect'

interface TaskInputProps  {
  addTodo: (name: string) => void
  currentTodo: Todo | null
  editTodo: (name: string) => void
  finishedEdit: () => void
}
export function TaskInput(props: TaskInputProps & typeof injectedProps) {
  const { addTodo, editTodo, finishedEdit, currentTodo,log, debug } = props
  log(debug)
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
const injectedProps = { debug: debug, log: log }
export default connect(injectedProps)(TaskInput)
