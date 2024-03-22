import React from 'react'
import './main-layout.scss'

export default function MainLayOut({ children }: { children: React.ReactNode }) {
  return (
    <div className='layout'>
      <nav className='layout__sidenav'>
        <ul>
          <li>
            <a href='#!'>Home</a>
          </li>
          <li>
            <a href='#!'>Page</a>
          </li>
          <li>
            <a href='#!'>Content</a>
          </li>
        </ul>
      </nav>
      <div className='layout__content'>{children}</div>
    </div>
  )
}
