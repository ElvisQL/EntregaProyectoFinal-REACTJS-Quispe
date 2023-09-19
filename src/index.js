import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyARGSdbGOrwc6MTRetHx3Q04ErD8ak9J8E",
  authDomain: "proyectofinalreactjs-elvis.firebaseapp.com",
  projectId: "proyectofinalreactjs-elvis",
  storageBucket: "proyectofinalreactjs-elvis.appspot.com",
  messagingSenderId: "413695734484",
  appId: "1:413695734484:web:0b6c404e9308aa1f4a4141"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

