import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

function WatchTimer() {
  const [seconds, setSeconds] = useState<number>(0)
  const intervalRef = useRef<any>(null)
  useEffect(() => {
    console.log('chay 1 lan')
    intervalRef.current = setInterval(() => {
      console.log('Watch dang chay')
      setSeconds((prev) => prev + 1)
    }, 1000)

    return () => {
      clearInterval(intervalRef.current)
      console.log('Watch unmount')
    }
  }, [intervalRef])
  return <div>Watch: {seconds}</div>
}

export default function Watch() {
  const [visible, setVisible] = useState<boolean>(true)
  const [val, setVal] = useState<number>(0)
  const contentRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState<number>(0)

  const handleClick = () => {
    setVisible((prev) => !prev)
  }

  const increase = () => {
    setVal((prev) => prev + 1)
  }

  useEffect(() => {
    const measure = () => {
      setWidth(contentRef.current?.offsetWidth || 0)
    }
    window.addEventListener('resize', measure)

    return () => {
      window.removeEventListener('resize', measure)
    }
  }, [])
  // useLayoutEffect(() => {
  //   console.log('use layout effect')
  // }, [])

  return (
    <div>
      {/* {visible && <WatchTimer />} */}
      <button onClick={handleClick}>Set again</button>
      <button onClick={increase}>Val: {val}</button>
      <div style={{ background: 'red' }} ref={contentRef}>
        Content
      </div>
      {width > 300 && <div style={{ background: 'yellow' }}>rezise smaller</div>}
    </div>
  )
}
