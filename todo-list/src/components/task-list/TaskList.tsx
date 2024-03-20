import React from 'react'
import styles from './task-list.module.scss'
import { Todo } from '../../@types/Todo.type'
import connect, { InjecredType } from '../todo-list/connect'

interface TaskListProps extends InjecredType {
  doneTask?: boolean
  todos: Todo[]
  handleDoneTodo: (id: string, done: boolean) => void
  startEditTodo: (id: string) => void
  deleteTodo: (id: string) => void
}
export function TaskList(props: TaskListProps) {
  const { todos, doneTask, handleDoneTodo, startEditTodo, deleteTodo, user } = props
  return (
    <div>
      <h2 className={styles.heading}>{doneTask ? 'Finished' : 'Unfinished'}</h2>
      <ul className={styles.list}>
        {todos.map((todo) => (
          <li className={styles.item} key={todo.id}>
            <label className={styles.item_label}>
              <input
                type='checkbox'
                checked={todo.done}
                onChange={(event) => handleDoneTodo(todo.id, event.target.checked)}
              />
              <span className={`${todo.done ? styles.done : ''}`}>{todo.name}</span>
            </label>

            <div className={styles.item_btns}>
              <button onClick={() => startEditTodo(todo.id)} className={styles.item_btn}>
                🖊️
              </button>
              <button onClick={() => deleteTodo(todo.id)} className={styles.item_btn}>
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default connect({ user: { name: 'Dung', age: 21 } })(TaskList)
