import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Link,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Navbar from "./navigatiion/navbar";
import Singin from './auth/signin/signin';
import useRoutes from "react-router-dom";
import Listflight from './component/Flight/ListFlight/listflight'
import Listhotel from './component/Hotel/ListHotel/listhotel';
import Package from './component/Package/package';
import Offers from './component/offers';
import About from './component/About/about';
import Contact from './component/Contact/contact';
import Listpackage from './component/Package/Listpackage/listpackage';
import Seate from './component/busseate/seat';
const Home = React.lazy(() => import('./component/home/home'))
const Hotel = React.lazy(() => import('./component/Hotel/hotel'))

const Bus = React.lazy(() => import('./component/Bus/bus'))

const Flight = React.lazy(() => import('./component/Flight/flight'))
// const Listflight = React.lazy(() => import('./component/Flight/ListFlight/listflight'))
const Listbus=React.lazy(() => import('./component/Bus/Listbus/listbus'))
const Feedback=React.lazy(() => import('./component/Feedback/feedback'))
const Refund=React.lazy(() => import('./component/Refund/refund'))
// const Listflight = React.lazy(() => import('./component/Flight/ListFlight/listflight'))
// const Listhotel = React.lazy(() => import('./component/Hotel/ListHotel/listhotel'))







function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}  >
          <Route path="home" element={<React.Suspense >
            <Home />
          </React.Suspense>} />

          <Route path="hotal" element={<React.Suspense >
            <Hotel />
          </React.Suspense>} />
          <Route path="hotallist/:city/:chackin/:chackout/:serch" element={<React.Suspense ><Listhotel /></React.Suspense>} />
          <Route path="bus" element={<React.Suspense >
            <Bus />
          </React.Suspense>} />
          <Route path="flight" element={<React.Suspense >
            <Flight />
          </React.Suspense>} />
          <Route path="package" element={<React.Suspense >
            <Package />
          </React.Suspense>} />
          <Route path="listpackage/:from/:to/:day" element={<React.Suspense >
            <Listpackage />
          </React.Suspense>} />
          <Route path="listflight/:from/:to/:day" element={<React.Suspense ><Listflight /></React.Suspense>} />
          <Route path="listbus/:from/:to/:day" element={<React.Suspense ><Listflight /></React.Suspense>} />
          <Route path="offers" element={<React.Suspense >
            <Offers />
          </React.Suspense>} />
          <Route path="about" element={<React.Suspense >
            <About />
          </React.Suspense>} />
          <Route path="contact" element={<React.Suspense >
            <Contact />
          </React.Suspense>} />
          <Route path="feedback" element={<React.Suspense >
            <Feedback />
          </React.Suspense>} /> 
          <Route path="refund" element={<React.Suspense >
            <Refund />
          </React.Suspense>} />
          <Route path="seate" element={<React.Suspense >
            <Seate />
          </React.Suspense>} />


        </Route>
        <Route path="singin" element={<Singin />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
