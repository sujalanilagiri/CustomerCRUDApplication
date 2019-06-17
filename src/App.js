import React from 'react';
import CustomerComponent from './components/customer/CustomerComponent';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <CustomerComponent/>
    </Provider>
  );
}

export default App;
