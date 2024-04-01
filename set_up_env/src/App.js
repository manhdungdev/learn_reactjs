import { useState } from 'react';
import './App.css';
import Clock from './Clock';
import BareInput from './BareInput';
import Layout from './Layout';
import BareButton from './BareButton';
import LoginController from './LoginController';
import CorrectlyState from './CorrectlyState';
import ProductList from './product_list/ProductList';
import Form from './form/Form';
import Uncontrol from './form/Uncontrol';
import Calculator from './calculation/Calculator';
import Inheritance from './inheritance_composition/Inheritance';
import Composition from './inheritance_composition/Composition';
import FilterableProductTable from './thinking_react/FilterableProductTable';
import Cart from './learn_scss/Cart';
import User from './user/User';
import AutoBatching from './AutoBatching';
import Navigation from './custom_hook/Navigation';
import Header from './custom_hook/Header';

function App() {
  const [isShow, setIsShow] = useState(true);

  const changeState = () => {
    setIsShow((prev) => !prev);
  };
  return (
    <div className='App'>
      {/* <button onClick={() => setVisible(false)}>Hide Clock component</button>
      {visible && <Clock />} */}
      {/* <Layout>
        <h1>Hello world</h1>
        <BareInput type='password' value={120} autoFocus className='input-control' onChange={() => {}} />
      </Layout>
      <BareButton /> */}

      {/* <LoginController isLogined={false} isHidden={true} /> */}
      <CorrectlyState />

      {/* <ProductList /> */}
      {/* <Form /> */}
      {/* <Uncontrol /> */}

      {/* <Calculator /> */}
      {/* <Inheritance /> */}
      {/* <Composition /> */}
      {/* <FilterableProductTable /> */}
      {/* <Cart isShow={'a'} /> */}
      {/* {isShow && <User />}
      <button onClick={changeState}>Change state</button> */}
      {/* <AutoBatching /> */}

      {/* <Navigation />
      <Header /> */}
    </div>
  );
}

export default App;
