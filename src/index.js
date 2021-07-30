import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

//client side rendered app: react(cra)
  // -> database which is firebase
  // -> react-loading-skeleton
  // tailwind

//architecture
  //src
    // -> components, constants, context, helpers, lib (firebase lives here), services (firebase functions here), styles (tailwind's folder (app/tailwind))