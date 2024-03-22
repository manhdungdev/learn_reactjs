import React from 'react'
import withMouseTracker from './Mouse'

export type PositionType = {
  x: number
  y: number
}

export type ExtraType = {
  visible: boolean
}

export default function Ads(props: PositionType & ExtraType) {
  const { x, y } = props
  console.log('rerender')

  return (
    <div>
      <ul>
        <li>x: {x}</li>
        <li>y: {y}</li>
      </ul>
    </div>
  )
}


// export default withMouseTracker(Ads)
