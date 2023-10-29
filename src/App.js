import React, {useEffect}from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom"
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';

function App() {

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={
          <React.Fragment>
            <Header/>
            <Checkout/>
            </React.Fragment>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={
          <React.Fragment>
            <Header/>
            <Home/>
          </React.Fragment>}/>
        </Routes>
      </div>
    </Router>
    
   
  );
}

export default App;
