import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import ApolloProviderWrapper from './ApolloProvider'; // Changed import
import { store } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <ApolloProviderWrapper /> {/* Render ApolloProviderWrapper instead of App directly */}
    </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
