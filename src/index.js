import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './views/home/home';
import Recipe from './views/recipe/recipe';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'font-awesome/css/font-awesome.min.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />}></Route>
          <Route path="recipe/:id" element={<Recipe />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
