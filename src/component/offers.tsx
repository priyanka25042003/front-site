import firebase from "firebase";
import React, { useEffect, useState } from "react";
import rajasthan from "../assert/RajasthanP.jpg";
import srilanka from "../assert/srilanka.jpg";
import kerala from "../assert/Keralap.jpg";
import uttarakhandp from "../assert/uttarakhandp.jpg";
import kashmir from "../assert/Kashmir.jpg";
import himachal from "../assert/Himachal.jpg";
import plan1 from "../assert/plan1.jpg";
import plan2 from "../assert/plan2.jpg";
import plan3 from "../assert/plan3.jpg";
import plan4 from "../assert/plan4.jpeg";
import plan5 from "../assert/plan5.jpeg";
import plan6 from "../assert/plan6.jpeg";
import bus1 from "../assert/bus1.png";
import bus2 from "../assert/bus2.png";
import bus3 from "../assert/bus3.png";
import bus4 from "../assert/bus4.png";
import bus5 from "../assert/bus5.png";
import bus6 from "../assert/bus6.png";
import hotel2 from "../assert/hotel2.png";
import hotel1 from "../assert/hotel1.jpg";
import hotel4 from "../assert/hotel4.png";
import package1 from "../assert/package1.png";
import package2 from "../assert/package2.png";
import package3 from "../assert/package3.jpg";
import package4 from "../assert/package4.jpg";
import package5 from "../assert/package5.jpg";
import package6 from "../assert/package6.jpg";






function Offers() {
  let location = window.location.pathname;

  const [data, setdata]: any[] = useState([])
  useEffect(() => {
    getdata();
  }, []);
  function getdata() {
    let arr: any[] = [];
    firebase
      .database()
      .ref("/offers")
      .get()
      .then((res) => {
        res.forEach((element) => {
          arr.push({ key: element.key, ...element.val() });
        });
        console.log(arr);

        // setnxtplan(arr.slice(0, 4))
        setdata(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (

    <div className="">
      <div className="mb-1 mt-5 ">
        <h2 className="text-center ">Offers</h2>
      </div>
      <div className="container-f shadow p-3 mb-5 bg-body rounded">
        <section id="tabs" className="project-tab">
          <div>
            <div className="row">
              <div className="col-md-12">
                <nav>
                  <div
                    className="nav nav-tabs nav-fill"
                    id="nav-tab"
                    role="tablist"
                  >
                    <a
                      className={
                        location == "/home"
                          ? "nav-item nav-link active"
                          : " nav-item nav-link"
                      }
                      id="nav-home-tab"
                      data-toggle="tab"
                      href="#nav-home"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Home
                    </a>
                    <a
                      className={
                        location == "/hotal"
                          ? "nav-item nav-link active"
                          : " nav-item nav-link"
                      }
                      id="nav-profile-tab"
                      data-toggle="tab"
                      href="#nav-profile"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Hotel
                    </a>
                    <a
                      className={
                        location == "/flight"
                          ? "nav-item nav-link active"
                          : " nav-item nav-link"
                      }
                      id="nav-flight-tab"
                      data-toggle="tab"
                      href="#nav-flight"
                      role="tab"
                      aria-controls="nav-flight"
                      aria-selected="false"
                    >
                      Flight
                    </a>
                    <a
                      className={
                        location == "/bus"
                          ? "nav-item nav-link active"
                          : " nav-item nav-link"
                      }
                      id="nav-bus-tab"
                      data-toggle="tab"
                      href="#nav-bus"
                      role="tab"
                      aria-controls="nav-bus"
                      aria-selected="false"
                    >
                      Bus
                    </a>
                    <a
                      className={
                        location == "/package"
                          ? "nav-item nav-link active"
                          : " nav-item nav-link"
                      }
                      id="nav-packeg-tab"
                      data-toggle="tab"
                      href="#nav-packeg"
                      role="tab"
                      aria-controls="nav-packeg"
                      aria-selected="false"
                    >
                      PACKAGE
                    </a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div className="row row-cols-1 mx-1 row-cols-md-2 g-4">
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0 ">
                          <div className="col-md-4">
                            <img
                              src={rajasthan}
                              className="img-fluid rounded-start m-3 m-3"
                              alt="..."
                              style={{ height: "150px", width: "150px" }}

                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Rajasthan</h5>
                              <p className="card-text">
                                10% discount up to Rs. 4,000*
                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                  Expires on 31st December 2023
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={srilanka}
                              className="img-fluid rounded-start m-3"
                              alt="..."
                              style={{ height: "150px", width: "150px" }}


                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Sri lanka</h5>
                              <p className="card-text">
                                10% discount up to Rs. 3,500*
                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                  Expires on 31st December 2023
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={kerala}
                              className="img-fluid rounded-start m-3"
                              alt="..."
                              style={{ height: "150px", width: "150px" }}


                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">kerala </h5>
                              <p className="card-text">
                                10% discount up to Rs.3,500*
                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                  Expires on 31st December 2023
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={uttarakhandp}
                              className="img-fluid rounded-start m-3"
                              alt="..."
                              style={{ height: "150px", width: "150px" }}


                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Uttrakhand</h5>
                              <p className="card-text">
                                10% discount up to Rs.4,500*
                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                  Expires on 31st December 2023
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={kashmir}
                              className="img-fluid rounded-start m-3"
                              alt="..."
                              style={{ height: "150px", width: "150px" }}

                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Kshamir </h5>
                              <p className="card-text">
                                10% discount up to Rs.4000*
                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                  Expires on 31st December 2023
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={himachal}
                              className="img-fluid rounded-start m-3"
                              alt="..."
                              style={{ height: "150px", width: "150px" }}

                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Himachal </h5>
                              <p className="card-text">
                                10% discount up to Rs.3,500*
                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                  Expires on 31st December 2023
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <div className="row row-cols-1 mx-1 row-cols-md-2 g-4">
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0 ">
                          <div className="col-md-4">
                            <img
                              src={hotel2} style={{ height: "150px", width: "150px" }}

                              className="img-fluid rounded-start m-3"
                              alt="..."


                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">New User Offer</h5>
                              <p className="card-text">
                              Register & Enjoy Great Discount on First Hotel Booking </p>
                              <p className="card-text">
                                <small className="text-muted">
                                  Last updated 3 mins ago
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={hotel1} style={{ height: "150px", width: "150px" }}

                              className="img-fluid rounded-start m-3"
                              alt="..."


                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">EaseMyTrip</h5>
                              <p className="card-text">
                              Users under this offer will get up to 25% discount up to Rs. 1000 off on hotel bookings

                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                  Last updated 3 mins ago
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={hotel4} style={{ height: "150px", width: "150px" }}

                              className="img-fluid rounded-start m-3"
                              alt="..."


                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                  Last updated 3 mins ago
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg" style={{ height: "150px", width: "150px" }}

                              className="img-fluid rounded-start m-3"
                              alt="..."


                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                  Last updated 3 mins ago
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg" style={{ height: "150px", width: "150px" }}

                              className="img-fluid rounded-start m-3"
                              alt="..."


                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                  Last updated 3 mins ago
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg" style={{ height: "150px", width: "150px" }}

                              className="img-fluid rounded-start m-3"
                              alt="..."
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                  Last updated 3 mins ago
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-flight"
                    role="tabpanel"
                    aria-labelledby="nav-flight-tab"
                  >
                    <div className="row row-cols-1 mx-1 row-cols-md-2 g-4">
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0 ">
                          <div className="col-md-4">
                            <img
                              src={plan1}
                              className="img-fluid rounded-start m-3 m-3"
                              alt="..."
                              style={{ height: "150px", width: "150px" }}

                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Air India</h5>
                              <p className="card-text">
                                FLAT Rs.650 OFF* | India Flights

                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                  Expries on 31st December 2023
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={plan2}
                              className="img-fluid rounded-start m-3"
                              alt="..."
                              style={{ height: "150px", width: "150px" }}

                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Indigo Airlines</h5>
                              <p className="card-text">
                                FLAT Rs.550 OFF* | India Flights
                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                  Expries on 31st December 2023
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={plan3}
                              className="img-fluid rounded-start m-3"
                              alt="..."
                              style={{ height: "150px", width: "150px" }}

                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">SpiceJet</h5>
                              <p className="card-text">
                                FLAT Rs.550 OFF* | India Flights
                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                  Expries on 31st December 2023
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={plan4}
                              style={{ height: "150px", width: "150px" }}
                              className="img-fluid rounded-start m-3"
                              alt="..."

                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">AirAsia India</h5>
                              <p className="card-text">
                                FLAT Rs.550 OFF* | India Flights
                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                  Expries on 31st December 2023
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={plan5}style={{ height: "150px", width: "150px" }}

                              className="img-fluid rounded-start m-3"
                              alt="..."

                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Go First</h5>
                              <p className="card-text">
                                FLAT Rs.550 OFF* | India Flights
                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                  Expries on 31st December 2023
                                </small>
                              </p>
                            </div>
                          </div>nav-bus-tab
                        </div>
                      </div>
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={plan6} style={{ height: "150px", width: "150px" }}

                              className="img-fluid rounded-start m-3"
                              alt="..."
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Air India</h5>
                              <p className="card-text">
                                FLAT Rs.550 OFF* | India Flights
                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                  Expries on 31st December 2023Users under this offer will get up to 25% discount up to Rs. 1000 off on hotel bookings
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-bus"
                    role="tabpanel"
                    aria-labelledby="nav-bus-tab"
                  >
                    <div className="row row-cols-1 mx-1 row-cols-md-2 g-4">
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0 ">
                          <div className="col-md-4">
                            <img
                              src={bus1} style={{ height: "150px", width: "150px" }}

                              className="img-fluid rounded-start m-3"
                              alt="..."


                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title"> Easy Bus</h5>
                              <p className="card-text">
                              Users under this offer will 10% discount up to Rs.250 on their first Bus booking with Easybus.com
                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                This offer is valid for first user
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={bus2} style={{ height: "150px", width: "150px" }}

                              className="img-fluid rounded-start m-3"
                              alt="..."


                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Big Bus</h5>
                              <p className="card-text">
                              Users will get 5% instant discount (up to Rs.500) on bus tickets
                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                This offer is valid for first user
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={bus3} style={{ height: "150px", width: "150px" }}

                              className="img-fluid rounded-start m-3"
                              alt="..."


                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Express Line 	</h5>
                              <p className="card-text">
                              Users will get up to Rs. 150 instant discount on bus tickets for all major bus routes
                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                This offer is valid for first user
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={bus4} style={{ height: "150px", width: "150px" }}

                              className="img-fluid rounded-start m-3"
                              alt="..."


                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Zoom Star</h5>
                              <p className="card-text">
                              Users will get 10% instant discount (upto Rs.75) on Bus Tickets
                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                This offer is valid for first user
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={bus5} style={{ height: "150px", width: "150px" }}

                              className="img-fluid rounded-start m-3"
                              alt="..."


                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Real Bus</h5>
                              <p className="card-text">
                              Users will get 12% (up to Rs. 100) instant discount on bus tickets for selected bus routes of VRL Travel
                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                This offer is valid for first user
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={bus6} style={{ height: "150px", width: "150px" }}

                              className="img-fluid rounded-start m-3"
                              alt="..."
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Minibus</h5>
                              <p className="card-text">
                              Users will get flat 100 off on booking Intercity Smart Bus tickets above 500 Rs. and flat 200 off on booking above 1000 Rs.
                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                This offer is valid for first user
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-packeg"
                    role="tabpanel"
                    aria-labelledby="nav-packeg-tab"
                  >
                    <div className="row row-cols-1 mx-1 row-cols-md-2 g-4">
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0 ">
                          <div className="col-md-4">
                            <img
                              src={package1} style={{ height: "150px", width: "150px" }}

                              className="img-fluid rounded-start m-3"
                              alt="..."


                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Leh</h5>
                              <p className="card-text">
                               EaseMyTrip.com brings this exclusive 6 nights and 7 days holiday package of Ladakh through which you will get to explore the exotic beauty of Ladakh.
                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                Starting From<br></br>
                               <b>₹ 52999*</b> Per Person 
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={package2} style={{ height: "150px", width: "150px" }}

                              className="img-fluid rounded-start m-3"
                              alt="..."


                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title"> Kerala  </h5>
                              <p className="card-text">
                              Holidays in Kerala offers sightseeing, travelling and relaxing experiences. Make your trip a rejuvenating experience with Kerala vacation.
                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                Starting From<br></br>
                               <b>₹ 10499*</b> Per Person 
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={package3} style={{ height: "150px", width: "150px" }}

                              className="img-fluid rounded-start m-3"
                              alt="..."


                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Char Dham Yatra </h5>
                              <p className="card-text">
                              The best time to undertake the Char Dham trip is between the months of April and June
                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                Starting From<br></br>
                               <b>₹ 82,699*</b> Per Person
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={package4} style={{ height: "150px", width: "150px" }}

                              className="img-fluid rounded-start m-3"
                              alt="..."


                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Rishikesh </h5>
                              <p className="card-text">
                              Rishikesh is a city in Uttarakhand state of India, located on the foothills of the Himalayan beside the Ganges River. 
                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                Starting From<br></br>
                               <b>₹7,999*</b> Per Person

                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={package5} style={{ height: "150px", width: "150px" }}

                              className="img-fluid rounded-start m-3"
                              alt="..."


                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title"> Jaipur</h5>
                              <p className="card-text">
                              Jaipur tour packages are highly sold due to the rich heritage and legacy that it offers. 
                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                Starting From<br></br>
                               <b>₹14,299*</b> Per Person
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card mb-3 mt-3 ml-4 "
                        style={{ maxWidth: "33rem" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={package6} style={{ height: "150px", width: "150px" }}

                              className="img-fluid rounded-start m-3"
                              alt="..."
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title"> Shimla</h5>
                              <p className="card-text">
                              Shimla tour packages are sold in great range and one comes to explore here natural beauty and rich greenery around.
                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                Starting From<br></br>
                               <b>₹12,099*</b> Per Person
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Offers;



