import React, { useState } from "react";
import "./userprofile.css";
function Showbookings() {
  const [index, setindex]: any = useState(0);
  return (
    <div className="container">
      <div className="row shado m-5" >
        <div className="col-4 bg-change" >
          <div className="container">
            <div className="mt-3">
              <h2 className="text-muted">Sumit Patel</h2>
              <hr className="hr" />
              <div className="mt-5  alin">
                <div className="d-flex">
                  <p>Email : &nbsp;</p>
                  <p className="text-muted"> patelsumit75757@gmail.com</p>
                </div>
                <div className="d-flex">
                  <p> Phone : &nbsp;</p>
                  <p className="text-muted">+91 97249 46850</p>
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
                Home
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
                Hotel
              </a>
              <a
                className=" nav-item nav-link"
                id="nav-qwerty-tab"
                data-toggle="tab"
                href="#nav-qwerty"
                role="tab"
                aria-controls="nav-qwerty"
                aria-selected="false"
              >
                Hotel
              </a>
            </div>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div className="card m-3">
                  <div className="row no-gutters">
                    <div className="col-sm-3 d-flex justify-content-center align-items-center">
                      <img
                        className="card-img rounded"
                        src="https://www.tutlane.com/images/defaultimg.png"
                        alt="Suresh Dasari Card"
                        style={{maxWidth:"100px", maxHeight:"100px"}}
                      />
                    </div>
                    <div className="col-sm-8">
                      <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade show "
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                 <div className="card m-3">
                  <div className="row no-gutters">
                    <div className="col-sm-3 d-flex justify-content-center align-items-center">
                      <img
                        className="card-img rounded"
                        src="https://www.tutlane.com/images/defaultimg.png"
                        alt="Suresh Dasari Card"
                        style={{maxWidth:"100px", maxHeight:"100px"}}
                      />
                    </div>
                    <div className="col-sm-8">
                      <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card m-3">
                  <div className="row no-gutters">
                    <div className="col-sm-3 d-flex justify-content-center align-items-center">
                      <img
                        className="card-img rounded"
                        src="https://www.tutlane.com/images/defaultimg.png"
                        alt="Suresh Dasari Card"
                        style={{maxWidth:"100px", maxHeight:"100px"}}
                      />
                    </div>
                    <div className="col-sm-8">
                      <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade show "
                id="nav-qwerty"
                role="tabpanel"
                aria-labelledby="nav-qwerty-tab"
              >
                <div className="card m-3">
                  <div className="row no-gutters">
                    <div className="col-sm-3 d-flex justify-content-center align-items-center">
                      <img
                        className="card-img rounded"
                        src="https://www.tutlane.com/images/defaultimg.png"
                        alt="Suresh Dasari Card"
                        style={{maxWidth:"100px", maxHeight:"100px"}}
                      />
                    </div>
                    <div className="col-sm-8">
                      <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>
                </div> <div className="card m-3">
                  <div className="row no-gutters">
                    <div className="col-sm-3 d-flex justify-content-center align-items-center">
                      <img
                        className="card-img rounded"
                        src="https://www.tutlane.com/images/defaultimg.png"
                        alt="Suresh Dasari Card"
                        style={{maxWidth:"100px", maxHeight:"100px"}}
                      />
                    </div>
                    <div className="col-sm-8">
                      <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>
                </div> <div className="card m-3">
                  <div className="row no-gutters">
                    <div className="col-sm-3 d-flex justify-content-center align-items-center">
                      <img
                        className="card-img rounded"
                        src="https://www.tutlane.com/images/defaultimg.png"
                        alt="Suresh Dasari Card"
                        style={{maxWidth:"100px", maxHeight:"100px"}}
                      />
                    </div>
                    <div className="col-sm-8">
                      <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
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
  );
}

export default Showbookings;
