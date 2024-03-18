import React, { useState } from 'react'
import styles from './task-input.module.scss'

interface TaskInputProps {
  addTodo: (name: string) => void
  
}
export default function TaskInput(props: TaskInputProps) {
  const { addTodo } = props
  const [name, setName] = useState<string>('')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addTodo(name)
    setName('')
  }
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  return (
    <div>
      <h2 className={styles.heading}>To do task list</h2>
      <form action='' onSubmit={handleSubmit}>
        <div className={styles.input_wrap}>
          <input
            value={name}
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
