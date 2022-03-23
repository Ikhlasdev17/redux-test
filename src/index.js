import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import reducer from './reducer/reducer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './Cart';

const store = createStore(reducer) 

ReactDOM.render(
  <React.StrictMode>
      <Router>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Provider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
