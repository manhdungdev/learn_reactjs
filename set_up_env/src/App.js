import { useState } from 'react';
import './App.css';
import Clock from './Clock';
import BareInput from './BareInput';
import Layout from './Layout';
import BareButton from './BareButton';
import LoginController from './LoginController';
import CorrectlyState from './CorrectlyState';
import ProductList from './product_list/ProductList';

function App() {
  const [visible, setVisible] = useState(true);
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
      {/* <CorrectlyState /> */}

      <ProductList />
    </div>
  );
}

export default App;
