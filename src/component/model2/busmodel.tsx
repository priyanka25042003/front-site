import React, { useState, useEffect } from "react";
import "./model2.css";
import ac from "../../assert/air-conditioner-icon.png";
export default function Busmodel(props: any) {
  const [data, setdata]: any = useState(props);
  console.log(data);

  function close() {
    props.close();
  }
  return (
    <>
      <div className="">
        <div
          id="myModal"
          className="modal d-block "
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content .modal-kui">
              <div className="modal-header">
                <h3 className=" ml-5 text-muted">
                  {data.datasoure.bus_name}
                </h3>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  onClick={close}
                  aria-hidden="true"
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-8">
                    <div className="d-flex justify-content-center">
                      <img
                        className="w-75 h-25"
                        width={500}
                        src={data.datasoure.img}
                        alt=""
                      />
                    </div>
                    <div className="container ml-5">
                      <p className="mt-3 text-muted">
                        {data.datasoure.bus_seat_type}{" "}
                      </p>
                      <div className=" mt-4  d-flex">
                        <p className="font-weight-bold"> city : </p>{" "}
                        {data.datasoure.city}
                        <div className="ml-5">
                          { data.datasoure.city ? <img width={40} src={ac} alt="" /> :""}
                        </div>
                        <div className="ml-5">
                        <i className="fa fa-wifi fa-2x" aria-hidden="true"></i>
                        </div>
                        
                      </div>
                      <div className="border rounded shadow p-3">
                        <h5 className="text-muted mb-4">Description:-</h5>
                        {data.datasoure.description}
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="d-flex justify-content-center mt-5">
                      <div className="mt-0 shadow w-75 ">
                        {/* <div className="text-center mt-3">
                          <h3>₹ {data.datasoure.doubledelux_room} </h3>{" "}
                          <p>Per person</p>
                        </div> */}
                        <div className="d-flex justify-content-center mt-5 mb-4">
                          <div className=" w-75">
                            <button className="btn btn-lg w-100 btn-success p-2">
                              Book Bus
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                      <div className="holli_right_other w-75">
                        <h3 className="nh_color fs_18">Feel free to call us</h3>
                        <p className="mb-3 mt-3 pb-2 border-bottom"></p>
                        <span className="d-block fs-12">
                          {" "}
                          <b style={{ marginBottom: " 10px" }}>
                            Toll Free No. :<br />{" "}
                          </b>{" "}
                          <span>1800-532-3636 </span>,{" "}
                          <span>1800-212-0136</span> <br />
                          <br />
                          <b style={{ marginBottom: " 5px" }}>
                            24/7 Service . : <br />{" "}
                          </b>
                          <span style={{ marginBottom: " 5px" }}>
                            +91 98163-48636
                          </span>
                          ,
                          <span style={{ marginBottom: " 5px" }}>
                            {" "}
                            +91 88263-03636
                          </span>
                        </span>
                        <span className="d-block fs-12">
                          {" "}
                          <br />
                          <b>Mail Us : </b> help@bharatbooking.com
                        </span>
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn" data-dismiss="modal" aria-hidden="true">
                  Close
                </button>
                <button className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
