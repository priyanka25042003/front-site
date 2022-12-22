import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Link,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./navigatiion/navbar";
import Singin from './auth/signin/signin';
import Home from './component/home/home';
import Hotel from './component/Hotel/hotel';
import Bus from './component/Bus/bus';
import Flight from './component/Flight/flight';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route path="home" element={< Home/>} />
          <Route path="hotal" element={< Hotel/>} />
          <Route path="bus" element={< Bus/>} />
          <Route path="flight" element={< Flight/>} />



        </Route>
        <Route path="singin" element={<Singin />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
