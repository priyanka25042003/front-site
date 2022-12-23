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
const Home = React.lazy(() => import('./component/home/home'))
const Hotel = React.lazy(() => import('./component/Hotel/hotel'))

const Bus = React.lazy(() => import('./component/Bus/bus'))

const Flight = React.lazy(() => import('./component/Flight/flight'))
// const Listflight = React.lazy(() => import('./component/Flight/ListFlight/listflight'))






function App() {
<<<<<<< HEAD
=======

  // router.Navigate('/home')
>>>>>>> c6656700cd3f20b734ae957e3136a99587a77d91
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route path="home" element={<React.Suspense >
            <Home />
          </React.Suspense>} />
          <Route path="hotal" element={<React.Suspense >
            <Hotel />
          </React.Suspense>} />
          <Route path="bus" element={<React.Suspense >
            <Bus />
          </React.Suspense>} />
          <Route path="flight" element={<React.Suspense >
<<<<<<< HEAD
              <Flight />
            </React.Suspense>} />
            
           



=======
            <Flight />
          </React.Suspense>} />
          <Route path="listflight" element={<React.Suspense >
            <Listflight />
          </React.Suspense>} />
>>>>>>> c6656700cd3f20b734ae957e3136a99587a77d91
        </Route>
        <Route path="singin" element={<Singin />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
