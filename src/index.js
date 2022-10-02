import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter} from "react-router-dom"
// import theme from './Theme/themeConfig.js';
// import textstyle from './Theme/textstyle';
// import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
// const theme = extendTheme({
//   colors: {
//     brand: {
//      color:"blue",
//      background:"black"
//     },
//   },
// })


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>

 
  <ChakraProvider>
  <App />
  </ChakraProvider>
  </BrowserRouter>
   
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
