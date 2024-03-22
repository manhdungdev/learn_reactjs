import React from 'react'
import './confirm.scss'
import { createPortal } from 'react-dom'

type ConfirmType = {
  visible: boolean
  ok: () => void
  cancel: () => void
}

const root = document.getElementById('root') as HTMLElement

export default function Confirm(props: ConfirmType) {
  const { visible, ok, cancel } = props
  return createPortal(
    <div className='modal' style={{ visibility: visible ? 'visible' : 'hidden' }}>
      <div className='modal__overlay'></div>
      <div className='modal__content'>
        <p className='modal__title'>Are you sure?</p>
        <div className='modal__btns'>
          <button onClick={ok} className='modal__btn'>Yes</button>
          <button onClick={cancel} className='modal__btn'>Cancel</button>
        </div>
      </div>
    </div>,
    root
  )
}
