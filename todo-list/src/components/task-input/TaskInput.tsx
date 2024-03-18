import React from 'react'
import styles from './task-input.module.scss'
export default function TaskInput() {
  return (
    <div>
      <h2 className={styles.heading}>To do task list</h2>
      <form action=''>
        <div className={styles.input_wrap}>
          <input type='text' className={styles.input} placeholder='Input your task' />
          <button className={styles.input_btn}>➕</button>
        </div>
      </form>
    </div>
  )
}
