import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import CurdPage from './pages/CurdPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        {/* <Route path='/register' element={<Register/>}/> */}
        <Route path='/products' element={<ProductList />} />
        <Route path='/curd' element={<CurdPage />} />
      </Routes>
    </Router>
  );
}

export default App;
