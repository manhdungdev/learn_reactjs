import React, { useEffect, useState } from 'react'
import Confirm from './Confirm'
import './manager.scss'
import { createPortal } from 'react-dom'

const initStudents = [
  {
    id: 1,
    name: 'Dung HM'
  },
  {
    id: 2,
    name: 'Linh Hoang'
  },
  {
    id: 3,
    name: 'Ngoc Trang'
  },
  {
    id: 4,
    name: 'Tu Thanh'
  },
  {
    id: 5,
    name: 'Nguyen Phong'
  }
]

export default function Manager() {
  const [students, setStudents] = useState<typeof initStudents>(initStudents)
  const [idDelete, setIdDelete] = useState<number>(-1)

  const visible = idDelete !== -1

  const showConfirm = (idDelete: number) => {
    setIdDelete(idDelete)
  }

  const handleDelete = () => {
    setStudents((prev) => {
      return prev.filter((student) => student.id !== idDelete)
    })
    setIdDelete(-1)
  }

  const handleCancel = () => {
    setIdDelete(-1)
  }

  useEffect(() => {
    function handleScroll(e: Event) {
      console.log(e)
    }
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='manager'>
      <h1 className='manager__heading'>Manager students</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            return (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>
                  <button onClick={() => showConfirm(student.id)} className='manager__btn'>
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Confirm visible={visible} ok={handleDelete} cancel={handleCancel} />
    </div>
  )
}
