import { useState } from 'react';
import './App.css';
import Clock from './Clock';
import BareInput from './BareInput';
import Layout from './Layout';
import BareButton from './BareButton';

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div className='App'>
      {/* <button onClick={() => setVisible(false)}>Hide Clock component</button>
      {visible && <Clock />} */}
      <Layout>
        <h1>Hello world</h1>
        <BareInput type='password' value={120} autoFocus className='input-control' onChange={() => {}} />
      </Layout>
      <BareButton />
    </div>
  );
}

export default App;
