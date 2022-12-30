import React, { useEffect, useState } from 'react'
import firebase from 'firebase';
import { useParams } from 'react-router-dom';
import "./listflight.css"
function Listflight() {
  const [maindata, setmaindata]: any[] = useState([])
  const [filterdata, setfilterdata]: any[] = useState([])
  const { from, to, day } = useParams();
  const [filter, setfilter]: any = useState([])

  useEffect(() => {
    console.log(from, to, day);
    getdata()
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
      .ref("/flight")
      .get()
      .then((res) => {
        res.forEach((element) => {
          arr.push({ key: element.key, ...element.val() });
        });
        setmaindata(arr);
        console.log(arr);

        // arr.forEach(element => {
        //   if (element.city == city) {s
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
                        <label id="destination-label" htmlFor="destination-input" className="form-label">To</label                     >
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

      <div className="d-flex mt-5  container-fluid">
        <div className="mt-5 w-100 mr-5  ">
          <div className="">
            <table className="table table-hover" border={0}>
              <thead>
                <tr>
                  <th scope="col"> <small><b>Sorted By:</b></small>  </th>
                  <th scope="col"> <small>Flight Name</small>  </th>

                  <th scope="col"><small>Departure</small></th>
                  <th scope="col"><small>Duration</small></th>
                  <th scope="col"><small>Arrival</small></th>
                  <th scope="col"><small>
                    Price</small></th>
                  <th scope="col"><small>booking</small></th>

                </tr>
              </thead>
              <tbody>
                {maindata.map((item: any, index: any) => {
                  return (
                    <><tr key={index}>
                      <td><img src="https://previews.123rf.com/images/farang/farang1112/farang111200023/11537629-jet-airplane-in-a-sky-at-sunset-time-square-composition-.jpg" alt="" width={150} /> &nbsp;&nbsp;&nbsp;&nbsp;      &AirIndia
                      </td>
                      <td>{item.flight_name}</td>
                      <td>{item.arrival_time} <br />
                        {item.from_location}</td>
                      <td> <small>09h 15m</small> </td>
                      <td>{item.departure_time}<br />
                        {item.to_location}
                      </td>
                      <td>₹ 10,367</td>
                      <td>
                        <button className='btn btn-primary btn-lg rounded-pill'> BOOK</button>

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

      <div className="card mb-3 mt-3 ml-4 " >
      </div>


    </div>


  )
}



export default Listflight




