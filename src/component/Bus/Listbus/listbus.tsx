import React, { useEffect, useState } from 'react'
import firebase from 'firebase';
import { useNavigate, useParams } from 'react-router-dom';
import "./listbus.css"
import Seate from '../../busseate/seat';
declare var Razorpay: any;

function Listbus() {
  const [maindata, setmaindata]: any[] = useState([])
  const [filterdata, setfilterdata]: any[] = useState([])
  const { from, to, day } = useParams();
  const [filter, setfilter]: any = useState([])

  const [localinfo, setlocalinfo]: any = useState([]);
  

  useEffect(() => {
    console.log(from, to, day);
    getdata()
    setlocalinfo(JSON.parse(localStorage.getItem("user") + ""));

  }, [])

  function filterD(e: any) {
    let name: any = e.target.name
    let val: any = e.target.value
    setfilter({ ...filter, [name]: val })
    console.log(filter);


  }
  function submit() {
    console.log(filter);


  }
  function getdata() {

    let arr: any[] = [];
    let filter: any[] = []
    firebase
      .database()
      .ref("/bus")
      .get()
      .then((res) => {
        res.forEach((element) => {
          arr.push({ key: element.key, ...element.val() });
        });
        setmaindata(arr);
        console.log(arr);
        // console.log(maindata);
        
        // arr.forEach(element => {
        //   if (element.city == city) {s
        //     filter.push(element)
        //   }
        // });
        // setfilterdata(filter);
        console.log(filter);

      })
      .catch((err) => {
        console.log(err);
      });
  }
  
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
  function proceed(amount: any) {
    razorPayOptions.amount = amount* 100
    data.pyment = amount

    var rzp1 = new Razorpay(razorPayOptions);
    rzp1.open();
    responhendel(razorPayOptions.handler)
  }
  let navigate = useNavigate();
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
  function responhendel(res?: any): any {
    let paymentID = res
    if (paymentID) {
      data.paymentid =paymentID?.razorpay_payment_id
      booking(data)
    }
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
        console.log(err);
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

  return (
    <div>
      <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Filter
        </button>

        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Bus Filter</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">

                <div className="">
                  <h5 className="">Locations</h5>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="mb-2">
                        <label id="origin-label" htmlFor="origin-input" className="form-label">Leaving From</label                    >
                        <div className="input-group">
                          <span className="input-group-text"><i className="bi-pin-map"></i> </span>
                          <input
                            type="text"
                            name="From"
                            onChange={(e) => filterD(e)}
                            className="form-control"
                            list="origin-options"
                            id="origin-input"
                            placeholder="Location"
                            aria-describedby="origin-label"
                          />
                          <datalist id="origin-options"></datalist>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm">
                      <div className="mb-2">
                        <label id="destination-label" htmlFor="destination-input" className="form-label"> Going To</label                     >
                        <div className="input-group">
                          <span className="input-group-text"><i className="bi-pin-map-fill"></i> </span>
                          <input
                            type="text"
                            name="To"
                            onChange={(e) => filterD(e)}
                            className="form-control"
                            list="destination-options"
                            id="destination-input"
                            placeholder="Location"
                            aria-describedby="destination-label"

                          />
                          <datalist id="destination-options"></datalist>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="mb-2 col-sm-12">
                    <div className="h-100 "><br />
                      <div className="card-body">
                        <h5 className="card-title">Choose the Bus type...</h5>
                        <div className="mb-2">
                          <label id="flight-type-label" htmlFor="flight-type-select" className="form-label"
                          >BUS TYPE</label                  >
                          <select
                            id="flight-type-select"
                            className="form-select"
                            aria-describedby="flight-type-label"
                          >
                            <option value="one-way">Sleeper Coach/AC</option>
                            <option value="round-trip">Seat/AC</option>
                            <option value="round-trip">Sleeper CoachOnly</option>
                            <option value="round-trip">Seat Only</option>
                          </select>
                        </div>
                        <div id="departure-date" className="mb-2">
                          <label id="departure-date-label" htmlFor="departure-date-input" className="form-label"
                          >Departure date</label                   >
                          <div className="input-group">
                            <span className="input-group-text"><i className="bi-calendar"></i></span>
                            <input
                              type="date"
                              name="Departure Data"
                              onChange={(e) => filterD(e)}
                              className="form-control"
                              id="departure-date-input"
                              aria-describedby="departure-date-label"
                            />
                          </div>
                        </div>
                        <div id="return-date" className="mb-2">
                          <label id="return-date-label" htmlFor="return-date-input" className="form-label">Return date</label>
                          <div className="input-group">
                            <span className="input-group-text"><i className="bi-calendar-fill"></i> </span>
                            <input
                              type="date"
                              name="Return Data"
                              onChange={(e) => filterD(e)}
                              className="form-control"
                              id="return-date-input"
                              aria-describedby="return-date-label"
                            />
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={submit}>Save changes</button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className=" mt-5   container-fluid">
        <div className=" ">
          <div className="">
            <table className="table table-hover w-100" style={{width:"100%"}} border={0}>
              <thead>
                <tr>
                  <th scope="col"> <small><b>Sorted By:</b></small>  </th>
                  <th scope="col"> <small>Bus Name</small>  </th>

                  <th scope="col"><small>Departure</small></th>
                  <th scope="col"><small>Duration</small></th>
                  <th scope="col"><small>Arrival</small></th>
                  <th scope="col"><small>total Price</small></th>
                  <th scope="col"><small>booking</small></th>

                </tr>
              </thead>
              <tbody>
                {maindata.map((item: any, index: any) => {
                  return (
                    <><tr key={index}>
                      <td><img src={item.img} alt="" width={150} /> &nbsp;&nbsp;&nbsp;&nbsp;      Mahasagar Travel
                      </td>
                      <td>{item.flight_name}</td>
                      <td>{item.arrival_time} <br />
                        {item.from_location}</td>
                      <td> <small>09h 15m</small> </td>
                      <td>{item.departure_time}<br />
                        {item.to_location}
                      </td>
                      <td>₹ {item.bus_seat_price}</td>
                      <td>
                        <button className='btn btn-primary btn-lg rounded-pill' onClick={() =>
                              localinfo ? setbook(item) : navigate("/singin")
                            }> BOOK</button>

                        <button className="btn btn-info rounded-circle m-3" type="button" data-toggle="collapse" data-target={"#" + item.key} aria-expanded="false" aria-controls="collapseExample"> <i className="fa fa-info-circle " aria-hidden="true"></i>
                        </button>

                      </td>
                    </tr>
                    <tr>
                      <td colSpan={7}>
                      <div className="collapse w-100" id={item.key}>
                        <div className="card  " >{item.description}
                        </div>
                      </div>
                      </td>
                    </tr>
                    </>

                  )
                })
                }
              </tbody>
            </table>
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

      </div>




  )
}



export default Listbus