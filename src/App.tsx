import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import SingleProduct from './components/SingleProduct'




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<HomePage />}/>
        <Route path="/product/:id" element={<SingleProduct/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
