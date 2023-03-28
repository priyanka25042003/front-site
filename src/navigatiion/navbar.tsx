import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Footer from "../component/Footer/footer";
import logo from "../assert/logo1.png"; 

function Navbar() {
  let navigate = useNavigate();
  function navig() {
    if (window.location.pathname == "/") {
      navigate("home");
    }
  }
  let userInfo = JSON.parse(localStorage.getItem("user") + "");
  useEffect(() => {
    console.log(userInfo);

    navig();
  }, []);
  function logout() {
    localStorage.removeItem("user");
    navigate("/singin");
  }
  return (
    <div className="" onLoad={navig}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <h3 className="navbar-brand">  <img
                              src={logo} style={{ height: "55px", width: "100px" }}

                              className="img-fluid rounded-start"
                              alt="..."
                            /></h3>
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
            <li className="nav-item active">
              <NavLink className="nav-link" to={"profile"}>
                PROFILE <span className="sr-only">(current)</span>
              </NavLink>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0">
            {userInfo ? (
              <button className="btn btn-outline-info" onClick={logout}>
                {" "}
                Sing out <i className="fa fa-sign-out"></i>{" "}
              </button>
            ) : (
              <NavLink className="nav-link btn btn-outline-info" to={"singin"}>
                Singin <span className="sr-only">(current)</span>
              </NavLink>
            )}
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Navbar;
