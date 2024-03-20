import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'

const Input = forwardRef<{handleChange: () => void}>((props, ref) => {
  const [val, setVal] = useState<string>('')
  const inputId = useRef<HTMLInputElement>(null)

  const handleChange = () => {
    let index = 0
    const str = 'Hoang Manh Dung'
    inputId.current?.focus()
    const intervalId: any = setInterval(() => {
      setVal(str.slice(0, index))
      if (index === str.length) {
        clearInterval(intervalId)
      }
      index++
    }, 100)
  }

  useImperativeHandle(ref, () => {
    return {
      handleChange
    }
  })

  const handleChangeInput = () => {
    return { type: 1 }
  }
  return <input ref={inputId} type='text' placeholder='Input here' value={val} onChange={handleChangeInput} />
})

export default function DisplayInput() {
  const displayInputRef = useRef<{handleChange: () => void}>({handleChange: () => {}})
  const handleCLick = () => {
    displayInputRef.current.handleChange()
  }
  return (
    <div>
      <Input ref={displayInputRef} />
      <button onClick={handleCLick}>CLick here</button>
    </div>
  )
}
