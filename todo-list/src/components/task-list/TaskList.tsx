import React from 'react'
import styles from './task-list.module.scss'

interface TaskListProps {
  doneTask?: boolean
}
export default function TaskList(props: TaskListProps) {
  const { doneTask } = props
  return (
    <div>
      <h2 className={styles.heading}>{doneTask ? 'Finished' : 'Unfinished'}</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <label className={styles.item_label}>
            <input type='checkbox' />
            <span >Learn Reactjs</span>
          </label>

          <div className={styles.item_btns}>
            <button className={styles.item_btn}>🖊️</button>
            <button className={styles.item_btn}>🗑️</button>
          </div>
        </li>
        <li className={styles.item}>
          <label className={styles.item_label}>
            <input type='checkbox' />
            <span>Interview</span>
          </label>

          <div className={styles.item_btns}>
            <button className={styles.item_btn}>🖊️</button>
            <button className={styles.item_btn}>🗑️</button>
          </div>
        </li>
        <li className={styles.item}>
          <label className={styles.item_label}>
            <input type='checkbox' />
            <span>Code Js</span>
          </label>

          <div className={styles.item_btns}>
            <button className={styles.item_btn}>🖊️</button>
            <button className={styles.item_btn}>🗑️</button>
          </div>
        </li>
      </ul>
    </div>
  )
}
