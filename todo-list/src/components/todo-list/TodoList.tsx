import React from 'react'
import styles from './todo-list.module.scss'
import TaskList from '../task-list'
import TaskInput from '../task-input'
export default function TodoList() {
  return (
    <div className={styles.todo_list}>
      <div className={styles.todo_wrap}>
          <TaskInput />
          <TaskList doneTask={false} />
          <TaskList doneTask />
      </div>
    </div>
  )
}
