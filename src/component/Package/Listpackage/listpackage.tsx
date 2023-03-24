import React, { useEffect, useState } from 'react'
import firebase from 'firebase';
import { useParams } from 'react-router-dom';
declare var Razorpay: any;

function Listpackage() {
  const [maindata, setmaindata]: any[] = useState([])
  const { from, to, day } = useParams();
  const [filter ,setfilter]:any = useState([])
  const [book, setbook]: any = useState(false);
  const [tabIndex, settabIndex]: any = useState(0);
  let data: any = {};

  const [info, setinfos]: any = useState({
    adults: 1,
    child: 0,
    infants: 0,
  });

useEffect(() => {
  getdata()
}, [])

const [userInfo, setUserInfo]: any[] = useState({
  name: " ",
  age: " ",
  idproof: " ",
  idproofNumber: " ",
});

let razorPayOptions: any = {
  key: "rzp_test_aEuup9ULohHsIp",
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
function filterD(e:any){
  let name:any = e.target.name
  let val:any = e.target.value
  setfilter({...filter ,[name]:val})
  console.log(filter);

}
function submit(){
  console.log(filter);
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
    let filter: any[] = []
    firebase
      .database()
      .ref("/package")
      .get()
      .then((res) => {
        res.forEach((element) => {
          arr.push({ key: element.key, ...element.val() });
        });
        setmaindata(arr);
        console.log(arr);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function proceed(amount: any) {
    razorPayOptions.amount = amount * 100;
    data.pyment = amount
    var rzp1 = new Razorpay(razorPayOptions);
    rzp1.open();
    responhendel(razorPayOptions.handler);
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
  function setuserinfo(event: any) {
    let name: any = event.target.name;
    let value: any = event.target.value;
    setUserInfo({ ...userInfo, [name]: value });
    console.log(userInfo);
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
                <h5 className="modal-title" id="exampleModalLabel">package Filter</h5>
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
                        <label id="origin-label" htmlFor="origin-input" className="form-label">From</label                    >
                        <div className="input-group">
                          <span className="input-group-text"><i className="bi-pin-map"></i> </span>
                          <input
                            type="text"
                            name="From"
                            onChange={(e)=>filterD(e)}
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
                        <label id="destination-label" htmlFor="destination-input" className="form-label">To</label                     >
                        <div className="input-group">
                          <span className="input-group-text"><i className="bi-pin-map-fill"></i> </span>
                          <input
                            type="text"
                            name="To"
                            onChange={(e)=>filterD(e)}
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
                        <h5 className="card-title">Dates</h5>
                        <div id="departure-date" className="mb-2">
                          <label id="departure-date-label" htmlFor="departure-date-input" className="form-label"
                          >strating date</label                   >
                          <div className="input-group">
                            <span className="input-group-text"><i className="bi-calendar"></i></span>
                            <input
                              type="date"
                              name="Departure Data"
                            onChange={(e)=>filterD(e)}
                              className="form-control"
                              id="departure-date-input"
                              aria-describedby="departure-date-label"
                            />
                          </div>
                        </div>
                        <div id="return-date" className="mb-2">
                          <label id="return-date-label" htmlFor="return-date-input" className="form-label">Ending date</label>
                          <div className="input-group">
                            <span className="input-group-text"><i className="bi-calendar-fill"></i> </span>
                            <input
                              type="date"
                              name="Return Data"
                              onChange={(e)=>filterD(e)}
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

    <div className='mt-5  h-100  rounded shadow-lg'>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col"> <small><b>Sorted By:</b></small>  </th>
            <th scope="col"><small>packagename</small></th>
            <th scope="col"><small>From</small></th>
            <th scope="col"><small>to</small></th>
            <th scope="col"><small>Strating date</small></th>
            <th scope="col"><small>Ending date</small></th>
            <th scope="col"><small> totalprice</small></th>
          </tr>
        </thead>
        <tbody>
          {maindata.map((item: any, index: any) => {

            return (
              <tr key={index}>
                <td><img src={item!.img} alt="" width={40} />AirIndia
                </td>
                <td>{item.package_name}</td>
                <td>{item.from_location}</td>
                <td>{item.to_location}</td>
                <td>{item.strating_date}</td>
                  <td>{item.endind_date}</td>
                <td>{item.total_price}</td>
              </tr>
            )
          })
          }

        </tbody>
      </table>
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






  )
}

export default Listpackage