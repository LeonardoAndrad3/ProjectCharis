import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "video-react/dist/video-react.css"
import {
  BrowserRouter, 
  Route, 
  Routes
} from "react-router-dom"
import * as React from 'react';
import 
  ReactDOM, 
  {createRoot}  
from "react-dom/client"

import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Navbar from '@components/NavBar';
import Blog from '@pages/Blog';
import Footer from '@components/Footer';

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Navbar/>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Blog/>}/>
      </Routes>
    </BrowserRouter>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"></script>
    <Footer/>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
