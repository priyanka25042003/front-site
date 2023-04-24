import React, { useState, useEffect } from "react";
import "./model.css";
import ac from "../../assert/air-conditioner-icon.png";
import { useNavigate } from "react-router";
import firebase from "firebase";
import Seate from '../busseate/seat';
import Swal from "sweetalert2";

declare var Razorpay: any;

export default function Busmodel(props: any) {
  const [dataaa, setdata]: any = useState(props);
  const [localinfo, setlocalinfo]: any = useState([]);

  const [book, setbook]: any = useState(false);
  const [tabIndex, settabIndex]: any = useState(0);
  const [seate, setseate]: any[] = useState([]);
  let data: any = {};

  const [userInfo, setUserInfo]: any[] = useState({
    name: " ",
    age: " ",
    idproof: " ",
    idproofNumber: " ",
  });
  const [info, setinfos]: any = useState({
    adults: 1,
    child: 0,
    infants: 0,
  });
  useEffect(() => {
    setlocalinfo(JSON.parse(localStorage.getItem("user") + ""));
    console.log(localinfo);
    

  }, [])
  let navigate = useNavigate();
  let razorPayOptions: any = {
    key: "rzp_test_LwoStFwFdLyg9e",
    amount: "",
    name: "Tour&Travels Agency",
    order_id: "",
    description: "Load Wallet",
    image:
      "https://livestatic.novopay.in/resources/img/nodeapp/img/Logo_NP.jpg",
    prefill: {
      name: "Tour&Travels Agency",

      contact: "",
      method: "",
    },
    handler: (response: any) => {
      console.log(response);
      responhendel(response);
    },
    modal: {
      ondismiss: function () {
        if (window.confirm("Are you sure, you want to close the form?")) {
          let txt = "You pressed OK!";
          console.log("Checkout form closed by the user");
        } else {
          let txt = "You pressed Cancel!";
          console.log("Complete the Payment");
        }
      },
    },
    theme: {
      color: "#0096C5",
    },
  };
  function responhendel(res?: any): any {
    let paymentID = res
    if (paymentID) {
      data.paymentid =paymentID?.razorpay_payment_id
      booking(data)
    }
  }
  function setinfo(data: any) {
    let name: any = Object.keys(data);
    // {adults:1}
    // name = [adults] name[0] = adults
    // let qwee = daa
    // info[name] = data[name]
    // setinfos(info)
    setinfos({ ...info, [name[0]]: data[name[0]] });
    console.log(info);
  }
  function booking(item: any) {
    // data.item = item;

    firebase
      .database()
      .ref("/booking")
      .push(item)
      .then((res) => {
        console.log(res);
      })
     .catch((err) => {
        
        if (err.message != "Error: Client is offline.") { 
          Swal.fire("Error",err.message,"error")
          console.log(err);
        }
      });
  }
  function next() {
    if (tabIndex == 0) {
      if (
        userInfo.name &&
        userInfo.age &&
        userInfo.idproof &&
        userInfo.idproofNumber
      ) {
        settabIndex(1);
      }
    } else if (tabIndex == 1 && seate.length > 0) {
      settabIndex(2);
    } else if (tabIndex == 2) {
      Object.assign(data,userInfo,seate,info,book)

      console.log(data);
      let total_set: any;
      let prise: any;
      total_set =
            data.adults + data.child + data.infants;
          prise = data.bus_seat_price;
          proceed(total_set * prise);
    }
  }
  function sendData(sate: any) {
    console.log(sate);
    setseate(sate);
  }
  function setuserinfo(event: any) {
    let name: any = event.target.name;
    let value: any = event.target.value;
    setUserInfo({ ...userInfo, [name]: value });
    console.log(userInfo);
  }
  function proceed(amount: any) {
    razorPayOptions.amount = amount* 100
    data.pyment = amount
   

    data.id = data.key;
    delete data.key ;var rzp1 = new Razorpay(razorPayOptions);
    rzp1.open();
    responhendel(razorPayOptions.handler)
  }
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
            <div className="modal-content modal-ku">
              <div className="modal-header">
                <h3 className=" ml-5 text-muted">
                  {dataaa.datasoure.bus_name}
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
                        src={dataaa.datasoure.img}
                        alt=""
                      />
                    </div>
                    <div className="container ml-5">
                      <p className="mt-3 text-muted">
                        {dataaa.datasoure.bus_seat_type}{" "}
                      </p>
                      <div className=" mt-4  d-flex">
                        <p className="font-weight-bold"> city : </p>{" "}
                        {dataaa.datasoure.city}
                        <div className="ml-5">
                          { dataaa.datasoure.city ? <img width={40} src={ac} alt="" /> :""}
                        </div>
                        <div className="ml-5">
                        <i className="fa fa-wifi fa-2x" aria-hidden="true"></i>
                        </div>
                        
                      </div>
                      <div className="border rounded shadow p-3">
                        <h5 className="text-muted mb-4">Description:-</h5>
                        {dataaa.datasoure.description}
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="d-flex justify-content-center mt-5">
                      <div className="mt-0 shadow w-75 ">
                        <div className="text-center mt-3">
                          <h3>₹ {dataaa.datasoure.bus_seat_price} </h3>{" "}
                          <p>Per seate</p>
                        </div>
                        <div className="d-flex justify-content-center mt-5 mb-4">
                          <div className=" w-75">
                            <button className="btn btn-lg w-100 btn-success p-2" onClick={() =>
                              localinfo ? setbook(dataaa.datasoure) : navigate("/singin")
                            }>
                              Book Bus
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                      <div className="holi_right_other w-75">
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

      <div className="card mb-3 mt-3 ml-4 "></div>

      {book ? (
        <div
          id="myModal"
          className="modal d-block"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3 id="myModalLabel">{book.flight_name}</h3>

                <div>
                  <button
                    className="btn"
                    data-dismiss="modal"
                    aria-hidden="true"
                    onClick={() => setbook(false)}
                  >
                    Close
                  </button>
                  <button
                    className="btn btn-success"
                    data-dismiss="modal"
                    aria-hidden="true"
                    onClick={() => next()}
                  >
                    Next
                  </button>
                </div>
              </div>

              <div className="modal-body">
                <ul
                  className="nav justify-content-around nav-tabs"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item m-1" role="presentation">
                    <p
                      className={tabIndex == 0 ? "nav-link active" : "nav-item"}
                      id="home-tab"
                    >
                      Information
                    </p>
                  </li>
                  <li className="nav-item m-1" role="presentation">
                    <p
                      className={tabIndex == 1 ? "nav-link active" : "nav-item"}
                      id="profile-tab"
                    >
                      Payment
                    </p>
                  </li>
                  <li className="nav-item m-1" role="presentation">
                    <p
                      className={tabIndex == 2 ? "nav-link active" : "nav-item"}
                      id="messages-tab"
                    >
                      Messages
                    </p>
                  </li>
                </ul>

                <div className="tab-content">
                  <div
                    className={tabIndex == 0 ? "tab-pane active" : "tab-pane"}
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div>
                      <div className="form-group">
                        <div>
                          <p className="h6">ADULTS (12y +)</p>
                          <p className=" text-muted">on the day of travel</p>
                        </div>
                        <nav aria-label="...">
                          <ul className="pagination d-flex justify-content-center ">
                            <li
                              className={
                                info.adults == 1
                                  ? "page-item active"
                                  : "page-item"
                              }
                            >
                              <a
                                className="page-link"
                                onClick={() => setinfo({ adults: 1 })}
                              >
                                1
                              </a>
                            </li>
                            <li
                              className={
                                info.adults == 2
                                  ? "page-item active"
                                  : "page-item"
                              }
                            >
                              <a
                                className="page-link"
                                onClick={() => setinfo({ adults: 2 })}
                              >
                                2
                              </a>
                            </li>
                            <li
                              className={
                                info.adults == 3
                                  ? "page-item active"
                                  : "page-item"
                              }
                            >
                              <a
                                className="page-link"
                                onClick={() => setinfo({ adults: 3 })}
                              >
                                3
                              </a>
                            </li>
                            <li
                              className={
                                info.adults == 4
                                  ? "page-item active"
                                  : "page-item"
                              }
                            >
                              <a
                                className="page-link"
                                onClick={() => setinfo({ adults: 4 })}
                              >
                                4
                              </a>
                            </li>
                            <li
                              className={
                                info.adults == 5
                                  ? "page-item active"
                                  : "page-item"
                              }
                            >
                              <a
                                className="page-link"
                                onClick={() => setinfo({ adults: 5 })}
                              >
                                5
                              </a>
                            </li>
                            <li
                              className={
                                info.adults == 6
                                  ? "page-item active"
                                  : "page-item"
                              }
                            >
                              <a
                                className="page-link"
                                onClick={() => setinfo({ adults: 6 })}
                              >
                                6
                              </a>
                            </li>
                            <li
                              className={
                                info.adults == 7
                                  ? "page-item active"
                                  : "page-item"
                              }
                            >
                              <a
                                className="page-link"
                                onClick={() => setinfo({ adults: 7 })}
                              >
                                7
                              </a>
                            </li>
                            <li
                              className={
                                info.adults == 8
                                  ? "page-item active"
                                  : "page-item"
                              }
                            >
                              <a
                                className="page-link"
                                onClick={() => setinfo({ adults: 8 })}
                              >
                                8
                              </a>
                            </li>
                            <li
                              className={
                                info.adults == 9
                                  ? "page-item active"
                                  : "page-item"
                              }
                            >
                              <a
                                className="page-link"
                                onClick={() => setinfo({ adults: 9 })}
                              >
                                9
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <div>
                      <div className="form-group">
                        <div>
                          <p className="h6">CHILDREN (2y - 12y )</p>
                          <p className=" text-muted">on the day of travel</p>
                        </div>

                        <nav aria-label="...">
                          <ul className="pagination d-flex justify-content-center ">
                            <li
                              className={
                                info.child == 1
                                  ? "page-item active"
                                  : "page-item"
                              }
                            >
                              <a
                                className="page-link"
                                onClick={() => setinfo({ child: 1 })}
                              >
                                1
                              </a>
                            </li>
                            <li
                              className={
                                info.child == 2
                                  ? "page-item active"
                                  : "page-item"
                              }
                            >
                              <a
                                className="page-link"
                                onClick={() => setinfo({ child: 2 })}
                              >
                                2
                              </a>
                            </li>
                            <li
                              className={
                                info.child == 3
                                  ? "page-item active"
                                  : "page-item"
                              }
                            >
                              <a
                                className="page-link"
                                onClick={() => setinfo({ child: 3 })}
                              >
                                3
                              </a>
                            </li>
                            <li
                              className={
                                info.child == 4
                                  ? "page-item active"
                                  : "page-item"
                              }
                            >
                              <a
                                className="page-link"
                                onClick={() => setinfo({ child: 4 })}
                              >
                                4
                              </a>
                            </li>
                            <li
                              className={
                                info.child == 5
                                  ? "page-item active"
                                  : "page-item"
                              }
                            >
                              <a
                                className="page-link"
                                onClick={() => setinfo({ child: 5 })}
                              >
                                5
                              </a>
                            </li>
                            <li
                              className={
                                info.child == 6
                                  ? "page-item active"
                                  : "page-item"
                              }
                            >
                              <a
                                className="page-link"
                                onClick={() => setinfo({ child: 6 })}
                              >
                                6
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <div>
                      <div className="form-group">
                        <div>
                          <p className="h6">INFANTS (below 2y)</p>
                          <p className=" text-muted">on the day of travel</p>
                        </div>
                        <nav aria-label="...">
                          <ul className="pagination d-flex justify-content-center ">
                            <li
                              className={
                                info.infants == 1
                                  ? "page-item active"
                                  : "page-item"
                              }
                            >
                              <a
                                className="page-link"
                                onClick={() => setinfo({ infants: 1 })}
                              >
                                1
                              </a>
                            </li>
                            <li
                              className={
                                info.infants == 2
                                  ? "page-item active"
                                  : "page-item"
                              }
                            >
                              <a
                                className="page-link"
                                onClick={() => setinfo({ infants: 2 })}
                              >
                                2
                              </a>
                            </li>
                            <li
                              className={
                                info.infants == 3
                                  ? "page-item active"
                                  : "page-item"
                              }
                            >
                              <a
                                className="page-link"
                                onClick={() => setinfo({ infants: 3 })}
                              >
                                3
                              </a>
                            </li>
                            <li
                              className={
                                info.infants == 4
                                  ? "page-item active"
                                  : "page-item"
                              }
                            >
                              <a
                                className="page-link"
                                onClick={() => setinfo({ infants: 4 })}
                              >
                                4
                              </a>
                            </li>
                            <li
                              className={
                                info.infants == 5
                                  ? "page-item active"
                                  : "page-item"
                              }
                            >
                              <a
                                className="page-link"
                                onClick={() => setinfo({ infants: 5 })}
                              >
                                5
                              </a>
                            </li>
                            <li
                              className={
                                info.infants == 6
                                  ? "page-item active"
                                  : "page-item"
                              }
                            >
                              <a
                                className="page-link"
                                onClick={() => setinfo({ infants: 6 })}
                              >
                                6
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <div>
                      <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Name</label>
                        <input
                          type="text"
                          onChange={(e) => setuserinfo(e)}
                          className={
                            userInfo.name == null || userInfo.name === ""
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          name="name"
                          id="formGroupExampleInput"
                          required
                          placeholder="Name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Age</label>
                        <input
                          type="text"
                          onChange={(e) => setuserinfo(e)}
                          className={
                            userInfo.age == null || userInfo.age == ""
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          name="age"
                          id="formGroupExampleInput2"
                          required
                          placeholder="Age"
                        />
                      </div>
                    </div>
                    
                  </div>

                  <div
                    className={tabIndex == 1 ? "tab-pane active" : "tab-pane"}
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="">
                      <Seate
                        sendData={(seates: any) => sendData(seates)}
                      ></Seate>
                    </div>
                  </div>
                  <div
                    className={tabIndex == 2 ? "tab-pane active" : "tab-pane"}
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div>
                      <div className="row">
                        <div className="col-12 text-center h3 mt-4 text-muted">
                          {book.flight_name}
                        </div>
                        <div className="col-12 text-center h6 mt-4 text-muted userinfo">
                          <div>
                            <p>Name:{userInfo.name}</p>
                            <p>Age: {userInfo.age}</p>
                          </div>
                          <div>
                            <p> Document: {userInfo.idproof} </p>
                            <p>Document NO.: {userInfo.idproofNumber}</p>
                          </div>
                        </div>
                        <br />
                        <div className="col-5 text-center h6 mt-4 text-muted">
                          {book.arrival_time} <br />
                          {book.from_location}
                        </div>

                        <div className="col-2 text-center  mt-4 text-dark">
                          TO
                        </div>
                        <div className="col-5 text-center h6  mt-4 text-muted">
                          {book.departure_time}
                          <br />
                          {book.to_location}
                        </div>
                        <div className="col-4 text-center h6  mt-4 text-muted">
                          ADULTS <br />
                          {info.adults}
                        </div>
                        <div className="col-4 text-center h6  mt-4 text-muted">
                          CHILDREN <br />
                          {info.child}
                        </div>
                        <div className="col-4 text-center h6  mt-4 text-muted">
                          INFANTS <br />
                          {info.infants}
                        </div>
                        <div className="col-12 text-center h6  mt-4 text-muted">
                          SEATE <br />
                          <ul className="list-inline">
                            {seate.map((i: any, index: any) => {
                              let lIndex = seate.length;
                              console.log(index == lIndex);
                              return (
                                <li className="list-inline-item">
                                  {i}
                                  {index == lIndex - 1 ? "" : ","}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

    </>
  );
}
