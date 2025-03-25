import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeTemplate from './Template/HomeTemplate';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Serve from './Pages/Serve';
import Memory from './Pages/Memory';
import Blog from './Pages/Blog';

export const history = createBrowserHistory({window});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

      <HistoryRouter history={history}>
        <Routes>
          <Route path='' element={<HomeTemplate></HomeTemplate>}>
            <Route index element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/about' element={<AboutUs></AboutUs>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/serve' element={<Serve></Serve>}></Route>
            <Route path='/memory' element={<Memory></Memory>}></Route>
            <Route path='/blog' element={<Blog></Blog>}></Route>
          </Route>
        </Routes>
      </HistoryRouter>

 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

