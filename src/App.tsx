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
import useRoutes from "react-router-dom";
import Listflight from './component/Flight/ListFlight/listflight'
import Listhotel from './component/Hotel/ListHotel/listhotel';
const Home = React.lazy(() => import('./component/Home/home'))
const Hotel = React.lazy(() => import('./component/Hotel/hotel'))

const Bus = React.lazy(() => import('./component/Bus/bus'))

const Flight = React.lazy(() => import('./component/Flight/flight'))
// const Listflight = React.lazy(() => import('./component/Flight/ListFlight/listflight'))






function App() {
  // router.Navigate('/home')
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route path="home" element={<React.Suspense >
            <Home />
          </React.Suspense>} />
          <Route path="hotal" element={<Hotel /> } />
          <Route path="hotallist/:city/:chackin/:chackout/:serch" element={<Listhotel />} />
          <Route path="bus" element={<React.Suspense >
            <Bus />
          </React.Suspense>} />
          <Route path="flight" element={<React.Suspense >
            <Flight />
          </React.Suspense>} />
          <Route path="listflight" element={<React.Suspense >
            <Listflight />
          </React.Suspense>} />


        </Route>
        <Route path="singin" element={<Singin />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
