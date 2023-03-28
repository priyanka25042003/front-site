import firebase from "firebase";
import React, { useEffect, useState } from "react";
import "./userprofile.css";
import Swal from "sweetalert2";

function Showbookings() {
  const [index, setindex]: any = useState(0);
  const [table, settable]: any = useState([]);
  const [user, setuser]: any = useState([]);

  useEffect(() => {
    getbookings();
    debugger;
    let data: any = JSON.parse(localStorage.getItem("user") + "");
    setuser(data.user);
    console.log(user);
  }, []);

  function getbookings() {
    let arr: any[] = [];
    firebase
      .database()
      .ref("/booking")
      .get()
      .then((res) => {
        res.forEach((element) => {
          // console.log( element.forEach(c => ()));
          arr.push({ key: element.key, ...element.val() });
          if (arr.length > 0) {
            settable(arr);
          } else {
            settable("NO DATA FOUND");
          }
          console.log(arr);
        });
      })
      .catch((err) => {
        Swal.fire("Error", err.message, "error");
        console.log(err);
      });
  }
  function refund(params: any) {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you cancel this booking and get refund?s ",
      showCloseButton: true,
      showCancelButton: true,
    }).then((willDelete) => {
      if (willDelete.dismiss) {
      } else {
        params.cancel = true
        firebase
          .database()
          .ref("/booking/" + params.key)
          .update(params)
          .then((res) => {
            getbookings();
            Swal.fire(
              "Refund",
              "your refund is granted you should be able to see this transaction in your account within 3 business days",
              "info"
            );
          })
          .catch((err) => {
            Swal.fire("Error", err.message, "error");
            console.log(err);
          });
      }
    });
  }
  let da = true;
  let da1 = true;
  let da2 = true;
  let da3 = true;

  return (
    <div className="container">
      <div className="row shado m-5">
        <div className="col-4 bg-change">
          <div className="container">
            <div className="mt-3">
              <h2 className="text-muted">{user.displayName}</h2>
              <hr className="hr" />
              <div className="mt-5  alin">
                <div className="d-flex">
                  <p>Email : &nbsp;</p>
                  <p className="text-muted"> {user.email}</p>
                </div>
                <div className="d-flex">
                  <p> Phone : &nbsp;</p>
                  <p className="text-muted">
                    {user.phone ? user.phone : "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-8 rediusss">
          <h3 className="text-muted mt-3">Bookings </h3>
          <div className="container">
            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
              <a
                className="nav-item nav-link active"
                id="nav-home-tab"
                data-toggle="tab"
                href="#nav-home"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Hotel
              </a>
              <a
                className=" nav-item nav-link"
                id="nav-profile-tab"
                data-toggle="tab"
                href="#nav-profile"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Flight
              </a>
              <a
                className=" nav-item nav-link"
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
                className=" nav-item nav-link"
                id="nav-package-tab"
                data-toggle="tab"
                href="#nav-package"
                role="tab"
                aria-controls="nav-package"
                aria-selected="false"
              >
                Package
              </a>
            </div>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                {table.map((item: any) => {
                  if (item.hotel_name) {
                    console.log(item);

                    return (
                      <div className="card m-3">
                        <div className="row no-gutters">
                          <div className="col-sm-3 d-flex justify-content-center align-items-center">
                            <img
                              className="card-img rounded"
                              src={item.img}
                              alt="Suresh Dasari Card"
                              style={{ maxWidth: "100px", maxHeight: "100px" }}
                            />
                          </div>
                          <div className="col-sm-8">
                            <div className="card-body d-flex justify-content-between ">
                              <div>
                                <h5 className="card-title">
                                  {item.hotel_name}
                                </h5>
                                <p className="card-text">{item.hotel_type}</p>
                                <p>
                                  <small>{item.city}</small>
                                </p>
                              </div>
                              <div>
                                <h3>₹ {parseInt(item.pyment)}</h3>
                                {item.cancel ? (
                                  <p className="text-danger"> cancled</p>
                                ) : (
                                  <button
                                    onClick={() => refund(item)}
                                    className="btn btn-link"
                                  >
                                    refund
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    da2 = false;
                  }
                })}
                {!da2 ? (
                  ""
                ) : (
                  <h1 className="text-center text-muted">No Booking Found!</h1>
                )}
              </div>
              <div
                className="tab-pane fade show "
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                {table.map((item: any) => {
                  if (item.flight_name) {
                    console.log(item);

                    return (
                      <div className="card m-3">
                        <div className="row no-gutters">
                          <div className="col-sm-3 d-flex justify-content-center align-items-center">
                            <img
                              className="card-img rounded"
                              src={item.img}
                              alt="Suresh Dasari Card"
                              style={{ maxWidth: "100px", maxHeight: "100px" }}
                            />
                          </div>
                          <div className="col-sm-8">
                            <div className="card-body d-flex justify-content-between">
                              <div>
                                <h5 className="card-title">
                                  {item.flight_name}
                                </h5>
                                <p className="card-text d-flex">
                                  <p className="">{item.from_location}</p>{" "}
                                  &nbsp; &nbsp; To&nbsp; &nbsp;{" "}
                                  <p>{item.to_location}</p>
                                </p>
                                <p className="card-text d-flex">
                                  <p className="">{item.arrival_time}</p> &nbsp;
                                  &nbsp; To&nbsp; &nbsp;{" "}
                                  <p>{item.departure_time}</p>
                                </p>
                              </div>
                              <div>
                                <h2>₹{item.pyment}</h2>
                                {item.cancel ? (
                                  <p className="text-danger"> cancled</p>
                                ) : (
                                  <button
                                    onClick={() => refund(item)}
                                    className="btn btn-link"
                                  >
                                    refund
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    da1 = false;
                  }
                })}
                {!da1 ? (
                  ""
                ) : (
                  <h1 className="text-center text-muted">No Booking Found!</h1>
                )}
              </div>
              <div
                className="tab-pane fade show "
                id="nav-bus"
                role="tabpanel"
                aria-labelledby="nav-bus-tab"
              >
                {table.map((item: any) => {
                  if (item.bus_name) {
                    console.log(item);

                    return (
                      <div className="card m-3">
                        <div className="row no-gutters">
                          <div className="col-sm-3 d-flex justify-content-center align-items-center">
                            <img
                              className="card-img rounded"
                              src={item.img}
                              alt="Suresh Dasari Card"
                              style={{ maxWidth: "100px", maxHeight: "100px" }}
                            />
                          </div>
                          <div className="col-sm-8">
                            <div className="card-body d-flex justify-content-between">
                              <h5 className="card-title">{item.bus_name}</h5>
                              <p className="card-text d-flex">
                                <p className="">{item.from_location}</p> &nbsp;
                                &nbsp; To&nbsp; &nbsp; <p>{item.to_location}</p>
                              </p>
                              <p className="card-text d-flex">
                                <p className="">{item.arrival_time}</p> &nbsp;
                                &nbsp; To&nbsp; &nbsp;{" "}
                                <p>{item.departure_time}</p>
                              </p>
                            </div>
                            {item.cancel ? (
                              <p className="text-danger"> cancled</p>
                            ) : (
                              <button
                                onClick={() => refund(item)}
                                className="btn btn-link"
                              >
                                refund
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    da3 = false;
                  }
                })}
                {!da3 ? (
                  ""
                ) : (
                  <h1 className="text-center text-muted">No Booking Found!</h1>
                )}
              </div>
              <div
                className="tab-pane fade show "
                id="nav-package"
                role="tabpanel"
                aria-labelledby="nav-package-tab"
              >
                {table.map((item: any) => {
                  if (item.package_name) {
                    console.log(item);
                    return (
                      <div className="card m-3">
                        <div className="row no-gutters">
                          <div className="col-sm-3 d-flex justify-content-center align-items-center">
                            <img
                              className="card-img rounded"
                              src={item.img}
                              alt="Suresh Dasari Card"
                              style={{ maxWidth: "100px", maxHeight: "100px" }}
                            />
                          </div>
                          <div className="col-sm-8">
                            <div className="card-body d-flex justify-content-between">
                              <h5 className="card-title">{item.bus_name}</h5>
                              <p className="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                              {item.cancel ? (
                                <p className="text-danger"> cancled</p>
                              ) : (
                                <button
                                  onClick={() => refund(item)}
                                  className="btn btn-link"
                                >
                                  refund
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    da = false;
                  }
                })}
                {!da ? (
                  ""
                ) : (
                  <h1 className="text-center text-muted">No Booking Found!</h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showbookings;
