import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import firebase from "firebase";



function Listhotel() {
    const [serchdata, setserchdata]:any = useState()
    const { city, chackin, chackout, serch } = useParams();
    const [maindata, setmaindata]: any = useState()
    const [filterdata, setfilterdata]: any[] = useState([])
    useEffect(() => {
        console.log(city, chackin, chackout, serch);
        getdata()
    }, [])
    function getdata() {
        let arr: any[] = [];
        let filter: any[] = []
        firebase
            .database()
            .ref("/hotel")
            .get()
            .then((res) => {
                res.forEach((element) => {
                    arr.push({ key: element.key, ...element.val() });
                });

                setmaindata(arr);
                console.log(arr);
                
                arr.forEach(element => {
                    if (element.city == city) {
                        filter.push(element)
                    }
                });
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
                                <h5 className="modal-title" id="exampleModalLabel">Hotel Filter</h5>
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

                                <div className="card-body">
                                    <h5 className="card-title">Dates</h5>
                                    <div id="Check-in" className="mb-2">
                                        <label id="Check-in-label" htmlFor="Check-in-input" className="form-label"
                                        >Check-in</label                   >
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="bi-calendar"></i></span>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="Check-in-input"
                                                aria-describedby="Check-in-label"
                                            />
                                        </div>
                                    </div>
                                    <div id="check-out" className="mb-2">
                                        <label id="check-out-label" htmlFor="check-out-input" className="form-label">check-out</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="bi-calendar-fill"></i> </span>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="check-out-input"
                                                aria-describedby="check-out-label"
                                            />
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Details</h5>
                                        <div className="mb-2">
                                            <label id="travel-class-label" htmlFor="travel-class-select" className="form-label"
                                            >hotel type</label>
                                            <select
                                                className="form-select"
                                                id="travel-class-select"
                                                aria-describedby="travel-class-label"
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
            <div className='mt-5 h-100 mr-5'>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col"> <small><b>Sorted By:</b></small>  </th>
                            <th scope="col"><small>Name</small></th>
                            <th scope="col"><small>Room type</small></th>
                            <th scope="col"><small>check-in date</small></th>
                            <th scope="col"><small>check-in out</small></th>
                            <th scope="col"><small>fx Days</small></th>
                            <th scope="col"><small>no of guests</small></th>
                            <th scope="col"><small>
                                Price</small></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/I5.png?v=14" alt="" width={40} /> AirAsia </td>
                            <td>silverpales <br />
                                New Delhi</td>
                            <td>Fristclass <br />
                            </td>
                            <td> <small>11/5/2021</small> </td>
                            <td>14/5/2021<br />
                            </td>
                            <td>4</td>
                            <td>7</td>
                            <td>₹1022</td>
                        </tr>
                        <tr>
                            <td><img src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/I5.png?v=14" alt="" width={40} /> AirAsia </td>
                            <td>silverpales <br />
                                New Delhi</td>
                            <td>Fristclass <br />
                            </td>
                            <td> <small>11/5/2021</small> </td>
                            <td>14/5/2021<br />
                            </td>
                            <td>4</td>
                            <td>7</td>
                            <td>₹1022</td>
                        </tr>
                        <tr>
                            <td><img src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/I5.png?v=14" alt="" width={40} /> AirAsia </td>
                            <td>silverpales <br />
                                New Delhi</td>
                            <td>Fristclass <br />
                            </td>

                            <td> <small>11/5/2021</small> </td>
                            <td>14/5/2021<br />
                            </td>
                            <td>4</td>
                            <td>7</td>
                            <td>₹1022</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

    export default Listhotel; 
