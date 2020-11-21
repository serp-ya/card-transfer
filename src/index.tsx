import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CardInfoPage } from './pages/card-info-page'
import { store } from './store';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CardInfoPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);