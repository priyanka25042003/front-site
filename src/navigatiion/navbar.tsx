import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Footer from "../component/Footer/footer";

function Navbar() {
  let navigate = useNavigate();
  function navig() {
    if (window.location.pathname == "/") {
      navigate("home");
    }
  }
  useEffect(() => {
    navig();
  }, []);

  return (
    <div className="" onLoad={navig}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light  p-3">
        <h3 className="navbar-brand">Navbar</h3>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to={"home"}>
                HOME <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to={"hotal"}>
                HOTAL <span className="sr-only">(current)</span>
              </NavLink>
            </li>

            <li className="nav-item active">
              <NavLink className="nav-link" to={"flight"}>
                FLIGHT<span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to={"bus"}>
                BUS <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to={"package"}>
                PACKAGE <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            {/* <li className="nav-item active">
              <NavLink className="nav-link" to={"listflight"}>listflight <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to={"listbus"}>listbus<span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to={"listhotel"}>listhotel <span className="sr-only">(current)</span></NavLink>
            </li> */}
            <li className="nav-item active">
              <NavLink className="nav-link" to={"offers"}>
                OFFERS <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to={"about"}>
                ABOUT <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to={"contact"}>
                CONTACT <span className="sr-only">(current)</span>
              </NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Navbar;
