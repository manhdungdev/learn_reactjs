import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Welcome from './Welcome';

const root = ReactDOM.createRoot(document.getElementById('root'));
const elem = (
  <div>
    <Welcome name='Dung HM' age={26} />;
    <Welcome name='Linh Hoang' age={27} />;
    <Welcome name='Huyen phung' age={28} />;
  </div>
);
root.render(elem);

{
  /* <React.StrictMode>
<App/>
</React.StrictMode> */
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
