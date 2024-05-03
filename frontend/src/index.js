import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApolloProviderWrapper from './ApolloProvider'; // Changed import

ReactDOM.render(
  <React.StrictMode>
    <ApolloProviderWrapper /> {/* Render ApolloProviderWrapper instead of App directly */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
