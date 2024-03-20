import React, { useReducer, useState } from 'react'

const initialState = { age: 26 }

type ActionType = IncreaseAgeAction | DecreaseAgeAction | IncreaseXAgeAction

type IncreaseAgeAction = { type: 'increase_age' }
type DecreaseAgeAction = { type: 'decrease_age' }
type IncreaseXAgeAction = { type: 'increase_Xage'; payload: number }

const init = (initVal: typeof initialState) => {
  console.log('hello wolrd')
  return { ...initVal, age: initVal.age + 4 }
}

const log = () => {
  return (state: typeof initialState, action: ActionType) => {
    console.log('prev', state)
    const nextState = reducer(state, action)
    console.log(nextState)
    return nextState
  }
}

const reducer = (state: typeof initialState, action: ActionType) => {
  // if (action.type === 'increase_age') {
  //   return { ...state, age: state.age + 1 }
  // }
  // if (action.type === 'decrease_age') {
  //   return { ...state, age: state.age - 1 }
  // }

  // if (action.type === 'increase_Xage') {
  //   return { ...state, age: state.age + action.payload }
  // }
  // throw Error('invalid action: ', action)
  switch (action.type) {
    case 'increase_age':
      return { ...state, age: state.age + 1 }
    case 'decrease_age':
      return { ...state, age: state.age - 1 }
    case 'increase_Xage':
      return { ...state, age: state.age + action.payload }
    default:
      throw Error('invalid action: ', action)
  }
}

const increaseAgeAction = () => {
  return { type: 'increase_age' } as { type: 'increase_age' }
}

const decreaseAgeAction = () => {
  return { type: 'decrease_age' } as { type: 'decrease_age' }
}

const increaseXAgeAction = (value: number) => {
  return { type: 'increase_Xage', payload: value } as { type: 'increase_Xage'; payload: number }
}

export default function Count() {
  //   const [state, setAge] = useState<{ age: number }>({ age: 26 })
  const [state, dispatch] = useReducer(log(), initialState, init)

  const increaseAge = () => {
    dispatch(increaseAgeAction())
  }

  const decreaseAge = () => {
    dispatch(decreaseAgeAction())
  }

  const increaseXAge = (value: number) => {
    dispatch(increaseXAgeAction(value))
  }

  return (
    <div>
      <h1>Count: {state.age}</h1>
      <button onClick={increaseAge}>Increase age</button>
      <button onClick={decreaseAge}>Decrease age</button>
      <button onClick={() => increaseXAge(3)}>Add age</button>
    </div>
  )
}
