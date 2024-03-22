import React, { useCallback, useEffect, useRef, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import styles from './app.module.scss'
import TodoList from './components/todo-list'
import Watch from './components/watch'
import Count from './components/count'
import Welcome from './components/welcome'
import DisplayInput from './components/display_input'
import DeferValue from './components/defervalue'
import ProductList from './components/product_list'
import MainLayOut, { Manager } from './components/manage'
import Mouse from './components/mouse_tracker'
import Ads, { PositionType } from './components/mouse_tracker/Ads'

// const renderAds = (value: PositionType) => <Ads visible {...value} />

function App() {
  const [, forceRender] = useState({})
  const renderAds = useCallback((value: PositionType) => <Ads visible {...value} />, [])

  // const useRenderAdsRef = useRef<{ (value: PositionType): JSX.Element }>((value: PositionType) => (
  //   <Ads visible {...value} />
  // ))

  // useEffect(() => {
  //   useRenderAdsRef.current = (value: PositionType) => <Ads visible {...value} />
  // }, [])

  const handleRerender = () => {
    forceRender({})
  }
  return (
    <div>
      <TodoList />
      {/* <Watch /> */}
      {/* <Count /> */}
      {/* <Welcome /> */}
      {/* <DisplayInput /> */}
      {/* <DeferValue /> */}
      {/* <ProductList /> */}
      {/* <MainLayOut>
        <Manager />
      </MainLayOut> */}

      {/* <Mouse render={useRenderAdsRef.current} /> */}
      {/* <Mouse render={renderAds} />*/}
      <button onClick={handleRerender}>Rerender</button>

      {/* <Ads visible={true}  /> */}
    </div>
  )
}

export default App
