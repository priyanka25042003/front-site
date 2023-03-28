import React, { useState, useEffect } from "react";
import "./model.css";
import ac from "../../assert/air-conditioner-icon.png";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import firebase from "firebase";
declare var Razorpay: any;

export default function Hotelmodel(props: any) {
  const [dataaaaa, setdata]: any = useState(props);
  const [localinfo, setlocalinfo]: any = useState([]);
  let navigate = useNavigate();

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
  function setuserinfo(event: any) {
    let name: any = event.target.name;
    let value: any = event.target.value;
    setUserInfo({ ...userInfo, [name]: value });
    console.log(userInfo);
  }
  console.log(data);
  const [book, setbook]: any = useState(false);
  const [tabIndex, settabIndex]: any = useState(0);
  function close() {
    props.close();
  }
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
  function next() {
    if (tabIndex == 0) {
      if (
        userInfo.name &&
        userInfo.age &&
        userInfo.idproof &&
        userInfo.idproofNumber&&
        userInfo.rooms

      ) {
        settabIndex(1);
      }
    } else if (tabIndex == 1) {
      
      Object.assign(data, userInfo, info, book);
      console.log(data);

      let total_set: any;
      let price: any;
      total_set = userInfo.rooms;
      price = data.Singledelux_room;
      let p = total_set * price
      proceed(p);

    }
  }
  function booking(item: any) {
    firebase
      .database()
      .ref("/booking")
      .push(item)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function responhendel(res?: any): any {
    let paymentID = res;
    
    if (paymentID) {
      data.paymentid = paymentID?.razorpay_payment_id;
      data.bookingOf = "hotel"
      booking(data);
    }
  }
  function proceed(amount: any) {
    razorPayOptions.amount = amount * 100;
    data.pyment = amount
    var rzp1 = new Razorpay(razorPayOptions);
    rzp1.open();
    responhendel(razorPayOptions.handler);
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
            <div className="modal-content  modal-ku">
              <div className="modal-header">
                <h3 className=" ml-5 text-muted">
                  {dataaaaa.datasoure.hotel_name}
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
                        src={dataaaaa.datasoure.img}
                        alt=""
                      />
                    </div>
                    <div className="container ml-5">
                      <p className="mt-3 text-muted">
                        {dataaaaa.datasoure.hotel_type}{" "}
                      </p>
                      <div className=" mt-4  d-flex">
                        <p className="font-weight-bold"> City : </p>{" "}
                        {dataaaaa.datasoure.city}
                        <div className="ml-5">
                          { dataaaaa.datasoure.city ? <img width={40} src={ac} alt="" /> :""}
                        </div>
                        <div className="ml-5">
                        <i className="fa fa-wifi fa-2x" aria-hidden="true"></i>
                        </div>
                        
                      </div>
                      <div className="border rounded shadow p-3">
                        <h5 className="text-muted mb-4">Description:-</h5>
                        {dataaaaa.datasoure.description}
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="d-flex justify-content-center mt-5">
                      <div className="mt-0 shadow w-75 ">
                        <div className="text-center mt-3">
                          <h3>₹ {dataaaaa.datasoure.doubledelux_room} </h3>{" "}
                          <p>Per person</p>
                        </div>
                        <div className="d-flex justify-content-center mt-5 mb-4">
                          <div className=" w-75">
                            <button className="btn btn-lg w-100 btn-success p-2" onClick={() =>
                              localinfo ? setbook(dataaaaa.datasoure) : navigate("/singin")
                            }>
                              Book Hotel
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
                  {/* <li className="nav-item m-1" role="presentation">
                    <p
                      className={tabIndex == 1 ? "nav-link active" : "nav-item"}
                      id="profile-tab"
                    >
                      Payment
                    </p>
                  </li> */}
                  <li className="nav-item m-1" role="presentation">
                    <p
                      className={tabIndex == 1 ? "nav-link active" : "nav-item"}
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
                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelect1">
                        Document
                      </label>
                      <select
                        className={
                          userInfo.idproof == null || userInfo.idproof == ""
                            ? "form-control is-invalid"
                            : "form-control "
                        }
                        onChange={(e) => setuserinfo(e)}
                        name="idproof"
                        id="exampleFormControlSelect1"
                        required
                      >
                        <option value="adharcard">Adharcard</option>
                        <option value="pancard">PAN</option>
                        <option value="pasport">Pasport</option>
                        <option value="voterid">VoterId</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="formGroupExampleInput2">
                        Document Number
                      </label>
                      <input
                        type="tel"
                        onChange={(e) => setuserinfo(e)}
                        className={
                          userInfo.idproofNumber == null ||
                            userInfo.idproofNumber == ""
                            ? "form-control is-invalid  "
                            : "form-control "
                        }
                        name="idproofNumber"
                        id="formGroupExampleInput2"
                        required
                        placeholder="Document Number"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="formGroupExampleInput2">Rooms</label>
                      <input
                        type="number"
                        min={1}
                        max={6}
                        onChange={(e) => setuserinfo(e)}
                        className={
                          userInfo.rooms == null ||
                            userInfo.rooms == ""
                            ? "form-control is-invalid  "
                            : "form-control "
                        }
                        value={info.adults >= 4 && info.adults <= 5 ? 2 : '' || info.adults >= 6 && info.adults <= 7 ? 4 : '' || info.adults >= 8 ? 6 : ''}
                        name="rooms"
                        id="formGroupExampleInput2"
                        required
                        placeholder="Rooms"
                      />
                    </div>
                  </div>

                  {/* <div
                    className={tabIndex == 1 ? "tab-pane active" : "tab-pane"}
                    id="home"
                    role="tabpanel"feedback
                    aria-labelledby="home-tab"
                  ></div> */}
                  <div
                    className={tabIndex == 1 ? "tab-pane active" : "tab-pane"}
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
                          Rooms <br />
                          {userInfo.rooms}
                        </div>
                        <div className="col-12 text-center h6  mt-4 text-muted">

                          <img src={book.img} width={200} height={200} alt="" />
                        </div>
                        <div className="col-4 text-center h6  mt-4 text-muted">
                          Hotel Name <br />
                          {book.hotel_name}
                        </div>
                        <div className="col-4 text-center h6  mt-4 text-muted">
                          Hotel Type <br />
                          {book.hotel_type}
                        </div>
                        <div className="col-4 text-center h6  mt-4 text-muted">
                          Location <br />
                          {book.city}
                        </div>

                        <div className="col-6 text-center h6  mt-4 text-muted">
                          Address <br />
                          {book.street_address}
                        </div>
                        <div className="col-6 text-center h6  mt-4 text-muted">
                          Price/Rooms <br />
                          ₹ {book.Singledelux_room}
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
