import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const initState = {
  books: [
    {
      id: 1,
      title: 'The New Man',
      category: 'History',
    },
    {
      id: 2,
      title: 'Human Error',
      category: 'Action',
    },
    {
      id: 3,
      title: 'Aztec Blood',
      category: 'History',
    },
  ],
};

const rootReducer = () => initState;

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
