import React, { useRef } from 'react'

interface TitleProps {
  address: {
    street: string
  }
  clickTitle: () => void
}
export function Title(props: TitleProps) {
  const { clickTitle } = props
  const h1Ref = useRef<HTMLDivElement>(null)
  console.log(props)
  const handleClick = () => {
    if(h1Ref.current){
        h1Ref.current.style.color = 'red'
    }
  }
  return (
    <div onClick={handleClick} ref={h1Ref} >
      <h2 >Title todolist</h2>
    </div>
  )
}

export const equal = (prev: any, next: any) => {
  return prev.address.street === next.address.street
}

export default React.memo(Title)
