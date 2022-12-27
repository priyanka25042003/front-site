import React, { useEffect, useState } from 'react'
import firebase from 'firebase';
import { useParams } from 'react-router-dom';

function Listflight() {
  const [maindata, setmaindata]: any[] = useState([])
  const [filterdata, setfilterdata]: any[] = useState([])
  const { from, to, day } = useParams();

  useEffect(() => {
    console.log(from, to, day);
    getdata()
  }, [])
  function getdata() {
    let arr: any[] = [];
    let filter: any[] = []
    firebase
      .database()
      .ref("/flight")
      .get()
      .then((res) => {
        res.forEach((element) => {
          arr.push({ key: element.key, ...element.val() });
        });
        debugger
        setmaindata(arr);
        console.log(arr);

        // arr.forEach(element => {
        //   if (element.city == city) {
        //     filter.push(element)
        //   }
        // });
        setfilterdata(filter);
        console.log(filter);

      })
      .catch((err) => {
        console.log(err);
      });
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
                <h5 className="modal-title" id="exampleModalLabel">Flight Filter</h5>
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
                        <div className="mb-2">
                          <label id="flight-type-label" htmlFor="flight-type-select" className="form-label"
                          >Flight</label                  >
                          <select
                            id="flight-type-select"
                            className="form-select"
                            aria-describedby="flight-type-label"
                          >
                            <option value="one-way">One-way</option>
                            <option value="round-trip">Round-trip</option>
                            <option value="round-trip">Multi City</option>
                          </select>
                        </div>
                        <div id="departure-date" className="mb-2">
                          <label id="departure-date-label" htmlFor="departure-date-input" className="form-label"
                          >Departure date</label                   >
                          <div className="input-group">
                            <span className="input-group-text"><i className="bi-calendar"></i></span>
                            <input
                              type="date"
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
                              className="form-control"
                              id="return-date-input"
                              aria-describedby="return-date-label"
                            />
                          </div>
                        </div>
                        {/* <div className="card-body">
                          <h5 className="card-title">Details</h5>
                          <div className="mb-2">
                            <label id="travel-class-label" htmlFor="travel-class-select" className="form-label"
                            >Travel class</label
                            >
                            <select
                              className="form-select"
                              id="travel-class-select"
                              aria-describedby="travel-class-label"
                            >
                              <option value="ECONOMY">Economy</option>
                              <option value="PREMIUM_ECONOMY">Premium Economy</option>
                              <option value="BUSINESS">Business</option>
                              <option value="FIRST">First</option>
                            </select>
                          </div>
                          <label className="form-label">Passengers</label>
                          <div className="mb-2">
                            <div className="input-group">
                              <label htmlFor="adults-input" className="input-group-text">Adults</label>
                              <input
                                type="number"
                                min="0"
                                className="form-control"
                                id="adults-input"
                                aria-describedby="adults-label"
                              />
                            </div>
                            <span id="adults-label" className="form-text">12 years old and older</span>
                          </div>
                          <div className="mb-2">
                            <div className="input-group">
                              <label htmlFor="children-input" className="input-group-text">Children</label>
                              <input
                                type="number"
                                min="0"
                                className="form-control"
                                id="children-input"
                                aria-describedby="children-label"
                              />
                            </div>
                            <span id="children-label" className="form-text">2 to 12 years old</span>
                          </div>
                          <div className="mb-2">
                            <div className="input-group">
                              <label htmlFor="infants-input" className="input-group-text">Infants</label>
                              <input
                                type="number"
                                min="0"
                                className="form-control"
                                id="infants-input"
                                aria-describedby="infants-label"
                              />
                            </div>
                            <span id="infants-label" className="form-text">Up to 2 years old</span>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="d-flex mt-5  container">
        {/* <div className='w-25 h-100 bg-ight mr-5 rounded shadow-lg ' > */}
        {/* <div className="mb-3"> */}
        {/* <div className="container-sm">
            <div className="my-2 ">
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
            </div>
          </div> */}

        {/* <div className="row">
            <div className="mb-2 col-sm-12">
              <div className="h-100 "><br />
                <div className="card-body">
                  <h5 className="card-title">Dates</h5>
                  <div className="mb-2">
                    <label id="flight-type-label" htmlFor="flight-type-select" className="form-label"
                    >Flight</label                  >
                    <select
                      id="flight-type-select"
                      className="form-select"
                      aria-describedby="flight-type-label"
                    >
                      <option value="one-way">One-way</option>
                      <option value="round-trip">Round-trip</option>
                      <option value="round-trip">Multi City</option>
                    </select>
                  </div>
                  <div id="departure-date" className="mb-2">
                    <label id="departure-date-label" htmlFor="departure-date-input" className="form-label"
                    >Departure date</label                   >
                    <div className="input-group">
                      <span className="input-group-text"><i className="bi-calendar"></i></span>
                      <input
                        type="date"
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
                        className="form-control"
                        id="return-date-input"
                        aria-describedby="return-date-label"
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Details</h5>
                    <div className="mb-2">
                      <label id="travel-class-label" htmlFor="travel-class-select" className="form-label"
                      >Travel class</label
                      >
                      <select
                        className="form-select"
                        id="travel-class-select"
                        aria-describedby="travel-class-label"
                      >
                        <option value="ECONOMY">Economy</option>
                        <option value="PREMIUM_ECONOMY">Premium Economy</option>
                        <option value="BUSINESS">Business</option>
                        <option value="FIRST">First</option>
                      </select>
                    </div> */}
        {/* <label className="form-label">Passengers</label>
                    <div className="mb-2">
                    <div className="input-group">
                    <label htmlFor="adults-input" className="input-group-text">Adults</label>
                    <input
                    type="number"
                    min="0"
                    className="form-control"
                    id="adults-input"
                    aria-describedby="adults-label"
                    />
                    </div>
                    <span id="adults-label" className="form-text">12 years old and older</span>
                    </div>
                    <div className="mb-2">
                    <div className="input-group">
                    <label htmlFor="children-input" className="input-group-text">Children</label>
                    <input
                    type="number"
                    min="0"
                    className="form-control"
                    id="children-input"
                          aria-describedby="children-label"
                        />
                        </div>
                        <span id="children-label" className="form-text">2 to 12 years old</span>
                        </div>
                        <div className="mb-2">
                        <div className="input-group">
                        <label htmlFor="infants-input" className="input-group-text">Infants</label>
                        <input
                        type="number"
                        min="0"
                        className="form-control"
                        id="infants-input"
                        aria-describedby="infants-label"
                        />
                        </div>
                        <span id="infants-label" className="form-text">Up to 2 years old</span>
                      </div> */}
        {/* <button id="search-button" className="w-100 btn btn-primary" disabled>
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-2 col">
              <div className="h-100 "></div>
            </div>
          </div> */}

        {/* </div> */}
        {/* </div> */}
        <div className="mt-5 w-100 mr-5  ">
          <div className="">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col"> <small><b>Sorted By:</b></small>  </th>
                  <th scope="col"><small>Departure</small></th>
                  <th scope="col"><small>Duration</small></th>
                  <th scope="col"><small>Arrival</small></th>
                  <th scope="col"><small>
                    Price</small></th>
                </tr>
              </thead>
              <tbody>
                {maindata.map((item: any, index: any) => {

                  return (
                    <tr key={index}>
                      <td><img src={item.img} alt="" width={40} />AirIndia
                      </td>
                      <td>{item.flight_name}</td>
                      <td>{item.arrival_time} <br />
                        {item.from_location}</td>
                      <td> <small>09h 15m</small> </td>
                      <td>{item.departure_time}<br />
                        {item.to_location}
                      </td>
                      <td>₹ 10,367</td>
                    </tr>
                  )
                })
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>


  )
}



export default Listflight




