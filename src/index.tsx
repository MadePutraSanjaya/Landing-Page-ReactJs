import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.css"
import "@splidejs/react-splide/css";
import { food } from './data/food';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App
      description=""
      imgUrl=""
      title=""
      price={123} // Replace with the actual price
      food={food}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
