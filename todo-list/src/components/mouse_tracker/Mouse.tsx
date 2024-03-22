import React, { useState } from 'react'
import imgUrl from './nguyenxivaden.png'
import { PositionType } from './Ads'

function Mouse({ render }: { render: (value: PositionType) => JSX.Element }) {
  const [location, setLocation] = useState<PositionType>({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setLocation({
      x: e.clientX,
      y: e.clientY
    })
  }

  return (
    <div onMouseMove={handleMouseMove}>
      <h2 style={{ color: 'red' }}> Mouse Tracker</h2>
      <img
        onMouseMove={handleMouseMove}
        src={imgUrl}
        alt=''
        style={{ width: '600px', height: '300px', objectFit: 'cover' }}
      />
      {render(location)}
    </div>
  )
}

export default React.memo(Mouse)

export function withMouseTracker<T>(Component: React.ComponentType<T>) {
  return (props: Omit<T, keyof PositionType>) => {
    const [location, setLocation] = useState<PositionType>({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
      setLocation({
        x: e.clientX,
        y: e.clientY
      })
    }

    return (
      <div>
        <h2 style={{ color: 'red' }}> Mouse Tracker</h2>
        <img
          onMouseMove={handleMouseMove}
          src={imgUrl}
          alt=''
          style={{ width: '600px', height: '300px', objectFit: 'cover' }}
        />
        <Component {...(props as T)} {...location} />
      </div>
    )
  }
}
