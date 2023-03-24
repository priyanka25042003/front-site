import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import firebase from "firebase";
import "./listhotel.css";

import state from "../../../assert/state.json";
declare var Razorpay: any;
function Listhotel() {
  let array: string[] = [];
  const citys = Object.values(state);

  citys.forEach((element) => {
    element.forEach((element) => {
      array.push(element);
    });
  });

  // const [serchdata, setserchdata]: any = useState()
  //     const [filter, setfilter]: any = useState([]);
  //   const [localinfo, setlocalinfo]: any = useState([]);

  const [book, setbook]: any = useState(false);
  const [tabIndex, settabIndex]: any = useState(0);
  const { city, chackin, chackout, serch } = useParams();
  const [maindatah, setmaindatah]: any[] = useState([]);
  const [filterdata, setfilterdatah]: any[] = useState([]);
  const [filterh, setfilterh]: any = useState([]);

  const [filter, setfilter]: any = useState([]);
  const [localinfo, setlocalinfo]: any = useState([]);
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
  let navigate = useNavigate();
  useEffect(() => {
    console.log(city, chackin, chackout, serch);
    getdata();
  }, []);
  function proceed(amount: any) {
    razorPayOptions.amount = amount * 100;
    data.pyment = amount
    var rzp1 = new Razorpay(razorPayOptions);
    rzp1.open();
    responhendel(razorPayOptions.handler);
  }

  function filterDatah(e: any) {
    let name: any = e.target.name;
    let val: any = e.target.value;
    console.log({ ...filterh, [name]: val });
    setfilterh({ ...filterh, [name]: val });
    if (name === "From" || name === "To") {
      hendelautosagetion(e);
    }
  }
  function responhendel(res?: any): any {
    let paymentID = res;
    
    if (paymentID) {
      data.paymentid = paymentID?.razorpay_payment_id;
      data.bookingOf = "hotel"
      booking(data);
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
  function setuserinfo(event: any) {
    let name: any = event.target.name;
    let value: any = event.target.value;
    setUserInfo({ ...userInfo, [name]: value });
    console.log(userInfo);
  }
  function submit() {
    let arr: any[] = [];
    let data;
    let unique2;
    maindatah.forEach((element: any) => {
      if (element.city == filterh.From) {
        // console.log(!arr.find((e:any) => e.keybooking == element.key) ,arr);
        // if (!arr.find((e:any) => e.key == element.key)) {
        arr.push(element);

        // }
      }
      if (element.city == filterh.From) {
        // console.log(!arr.find((e:any) => e.key == element.key) ,arr);
        // if (!arr.find((e:any) => e.key == element.key)) {
        arr.push(element);

        // }
      }
      if (element.total_price <= filterh.pricerange) {
        // console.log(!arr.find((e:any) => e.key == element.key) ,arr);
        // if (!arr.find((e:any) => e.key == element.key)) {
        arr.push(element);

        // }
      }

      // let main = arr.filter((d: any) => d.key != element.key);
      unique2 = arr.filter((obj, index) => {
        return index === arr.findIndex((o) => obj.key === o.key);
      });
    });

    setfilterdatah(unique2);
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
  function getdata() {
    let arr: any[] = [];
    let filter: any[] = [];
    firebase
      .database()
      .ref("/hotel")
      .get()
      .then((res) => {
        res.forEach((element) => {
          arr.push({ key: element.key, ...element.val() });
        });

        setmaindatah(arr);
        // setfilterdatah(arr);
        console.log(arr);

        arr.forEach((element) => {
          if (element.city == city) {
            filter.push(element);
          }
        });
        setfilterdatah(filter);
        console.log(filterh);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const [autosagetion, setautosagetion]: any[] = useState([]);
  const [showautosagetion, setshowautosagetion]: any = useState(false);

  function hendelautosagetion(e: any) {
    setshowautosagetion(true);
    let ar: any[] = [];
    array.forEach((element) => {
      console.log();
      const capitalized =
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
      if (element.startsWith(capitalized)) {
        ar.push(element);
      }
    });
    setautosagetion(ar);
  }

  window.onclick = () => {
    setshowautosagetion(false);
  };

  function select(params: any) {
    setfilterh({ From: params });
    setshowautosagetion(false);
  }

  return (
    <div>
      <div>
        <div className="container">
          <button
            type="button"
            className="btn btn-primary btn-lg float-right  mb-5"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Filter
          </button>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Hotel Filter
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="">
                  <h5 className="">Locations</h5>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="mb-2">
                        <label
                          id="origin-label"
                          htmlFor="origin-input"
                          className="form-label"
                        >
                          From
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="bi-pin-map"></i>
                          </span>
                          <input
                            type="text"
                            name="From"
                            onInput={(e) => filterDatah(e)}
                            className="form-control"
                            list="origin-options"
                            id="origin-input"
                            placeholder="Location"
                            value={filterh.From}
                            aria-describedby="origin-label"
                          />
                          {showautosagetion ? (
                            <div className="autosagetion">
                              {autosagetion.map((item: any) => {
                                return (
                                  <div
                                    onClick={() => select(item)}
                                    className="list-item"
                                  >
                                    {item}
                                  </div>
                                );
                              })}
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <h5 className="card-title">Dates</h5>
                  <div id="Check-in" className="mb-2">
                    <label
                      id="Check-in-label"
                      htmlFor="Check-in-input"
                      className="form-label"
                    >
                      Check-in
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi-calendar"></i>
                      </span>
                      <input
                        type="date"
                        name="chackin"
                        onChange={(e) => filterDatah(e)}
                        className="form-control"
                        id="Check-in-input"
                        aria-describedby="Check-in-label"
                      />
                    </div>
                  </div>
                  <div id="check-out" className="mb-2">
                    <label
                      id="check-out-label"
                      htmlFor="check-out-input"
                      className="form-label"
                    >
                      check-out
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi-calendar-fill"></i>
                      </span>
                      <input
                        type="date"
                        onChange={(e) => filterDatah(e)}
                        className="form-control"
                        id="check-out-input"
                        aria-describedby="check-out-label"
                        name="chackout"
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Details</h5>
                    <div className="mb-2 input-group w-100">
                      <label
                        id="travel-class-label"
                        htmlFor="travel-class-select"
                        className="form-label"
                      >
                        hotel type
                      </label>
                      <select
                        className="form-select w-100"
                        id="travel-class-select"
                        aria-describedby="travel-class-label"
                        name="hoteltype"
                        onChange={(e) => filterDatah(e)}
                      >
                        <option selected>Choose...</option>
                        <option value={"⭐⭐⭐⭐⭐"}>⭐⭐⭐⭐⭐</option>
                        <option value={"⭐⭐⭐⭐"}>⭐⭐⭐⭐</option>
                        <option value={"⭐⭐⭐"}>⭐⭐⭐</option>
                        <option value={"⭐⭐"}>⭐⭐</option>
                        <option value={"⭐"}>⭐</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="customRange3" className="form-label">
                    Price Range
                  </label>
                  <br />

                  <input
                    type="range"
                    className="form-range w-100"
                    min="500"
                    max="10000"
                    step="500"
                    id="customRange3"
                    onChange={(e) => filterDatah(e)}
                    name="pricerange"
                  />
                  <div>₹ {filterh.pricerange}</div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={submit}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-5  container-fluid">
        <div className="mt-5 h-100 ml-5 w-100">
          <div className="">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">
                    {" "}
                    <small>
                      <b>Sorted By:</b>
                    </small>{" "}
                  </th>
                  <th scope="col">
                    <small>Hotel Name</small>
                  </th>
                  <th scope="col">
                    <small> City</small>
                  </th>
                  <th scope="col">
                    <small>Hotel Type</small>
                  </th>
                  <th scope="col">
                    <small>WIFI</small>
                  </th>
                  <th scope="col">
                    <small>A/C</small>
                  </th>
                  <th scope="col">
                    <small>Total Rooms</small>
                  </th>
                  <th scope="col">
                    <small>Available</small>
                  </th>
                  <th scope="col">
                    <small>Info</small>
                  </th>
                  <th scope="col">
                    <small>Booking</small>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filterdata.map((item: any, index: any) => {
                  return (
                    <>
                      <tr key={index}>
                        <td>
                          <img
                            className="rounded"
                            src={item.img}
                            alt=""
                            width={200}
                            height={150}
                          />
                          &nbsp;&nbsp;&nbsp;&nbsp; {item.hotel_name}
                        </td>
                        <td>{item.hotel_name}</td>
                        <td>{item.city}</td>
                        <td>{item.hotel_type}</td>
                        <td>
                          {item.wifi != "0" ? (
                            <i className="fa fa-check" aria-hidden="true"></i>
                          ) : (
                            <i className="fa fa-times" aria-hidden="true"></i>
                          )}
                        </td>
                        <td>
                          {item.ac != "0" ? (
                            <i className="fa fa-check" aria-hidden="true"></i>
                          ) : (
                            <i className="fa fa-times" aria-hidden="true"></i>
                          )}
                        </td>
                        <td>
                          {item.avilabe_rooms}
                          <br />
                        </td>
                        <td>{item.total_rooms}</td>
                        <td>
                          <button
                            className="btn btn-info rounded-circle m-3"
                            type="button"
                            data-toggle="collapse"
                            data-target={"#" + item.key}
                            aria-expanded="false"
                            aria-controls="collapseExample"
                          >
                            <i
                              className="fa fa-info-circle "
                              aria-hidden="true"
                            ></i>
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-primary btn-lg rounded-pill"
                            onClick={() =>
                              localinfo ? setbook(item) : navigate("/singin")
                            }
                          >
                            BOOK
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={9}>
                          <div className="collapse w-100" id={item.key}>
                            {item.description}
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
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
                    role="tabpanel"
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
    </div>
  );
}

export default Listhotel;
