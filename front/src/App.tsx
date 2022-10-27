import React from 'react';
import {Route, Routes} from "react-router-dom";
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import  LandingPage  from './Components/LandingPage/LandingPage';
import  Client  from './Components/Client/Client';
import  Product  from './Components/Product/Product';
import  Invoice  from './Components/Invoice/Invoice';
import  Contact  from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route  path="/" element={<LandingPage/>} />
      <Route  path="/client" element={<Client/>} />
      <Route path="/Product" element={<Product/>} />
      <Route path="/invoice" element={<Invoice/>} />
      <Route path="/contact" element={<Contact/>} />


      </Routes>     

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
       
      </header>
    </div>
  );
}

export default App;
