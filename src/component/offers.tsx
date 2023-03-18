import firebase from "firebase";
import React, { useEffect, useState } from "react";
import rajasthan from "../assert/RajasthanP.jpg";
import srilanka from "../assert/srilanka.jpg";
import kerala from "../assert/Keralap.jpg";
import uttarakhandp from "../assert/uttarakhandp.jpg";
import kashmir from "../assert/kashmir.jpg";
import himachal from "../assert/Himachal.jpg";
import plan1 from "../assert/plan1.jpg";
import plan2 from "../assert/plan2.jpg";
import plan3 from "../assert/plan3.jpg";


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
                      id="nav-pakage-tab"
                      data-toggle="tab"
                      href="#nav-pakage"
                      role="tab"
                      aria-controls="nav-pakage"
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
                              src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg"
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
                              src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg" style={{ height: "150px", width: "150px" }}

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
                              <h5 className="card-title">Air India</h5>
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

                    </div>
                  </div>
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-pakage-tab">
                    <div className="row row-cols-1 mx-1 row-cols-md-2 g-4" >

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



