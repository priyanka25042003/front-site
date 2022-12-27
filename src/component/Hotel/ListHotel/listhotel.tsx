import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import firebase from "firebase";

// function Listhotel() {
//     return (
//         <div className="d-flex mt-5  container">
//             <div className='w-25 h-100 bg-ight mr-5  bg-info'>


//                 <div className="mb-2">
//                     <label id="hotel-type-label" htmlFor="hotel-type-select" className="form-label"
//                     >Hotel</label                  >

//                 </div>
//                 <div id="departure-date" className="mb-2">
//                     <label id="departure-date-label" htmlFor="departure-date-input" className="form-label">CHECK-IN DATE</label                   >
//                     <div className="input-group">
//                         <span className="input-group-text"><i className="bi-calendar"></i></span>
//                         <input
//                             type="date"
//                             className="form-control"
//                             id="departure-date-input"
//                             aria-describedby="departure-date-label"
//                         />
//                     </div>
//                 </div>
//                 <div id="return-date" className="mb-2">
//                     <label id="return-date-label" htmlFor="return-date-input" className="form-label">CHECK-OUT DATE</label>
//                     <div className="input-group">
//                         <span className="input-group-text"><i className="bi-calendar-fill"></i> </span>
//                         <input
//                             type="date"
//                             className="form-control"
//                             id="return-date-input"
//                             aria-describedby="return-date-label"
//                         />
//                     </div>
//                 </div>
//                 <button id="search-button" className="w-100 btn btn-primary" disabled>
//                     Search
//                 </button>


//             </div>
//             <div className='w-75   h-100 '>ghng

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
        <div className="d-flex mt-5 mx-auto container-fluid">
            <div className='w-25 h-100 bg-ight mr-5 mt-5 ml-5 rounded shadow-lg ' >
                <div className="mb-3 ">
                    <div className="">
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="mb-1 col-sm-12">
                            <div className="h-100 "><br />
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
                                                name='date'
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
                                        <button id="search-button" className="w-100 btn btn-primary" disabled>
                                            Apply
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='w-100 h-100 bg-ight mr-5 ' >
                        <div className="mb-3">
                            <label htmlFor="formFileMultiple" className="form-label">PRICE</label> <br />
                            <input className="form-range w-100" type="range" id="formFileMultiple" /><br />
                            <label htmlFor="formFileMultiple" className="form-label">PRICE</label>
                        </div>
                    </div>

                </div >
            </div >

            <div className="mt-5 w-100 mr-5  ">
                <div className="">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col"> <small><b>Sorted By:</b></small>  </th>
                                <th scope="col"><small>Name</small></th>
                                <th scope="col"><small>Room type</small></th>
                                <th scope="col"><small>Total Rooms</small></th>
                                <th scope="col"><small>AC</small></th>
                                <th scope="col"><small>WIFI</small></th>
                                <th scope="col"><small>
                                    Price</small></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterdata.map((item: any, index: any) => {

                                return (
                                    <tr key={index}>
                                        <td><img src={item.img} alt="" width={40} /> AirAsia </td>
                                        <td>{item.hotel_name} <br />
                                            {item.city}</td>
                                        <td>{item.hotel_type} <br />
                                        </td>
                                        <td>{item.total_rooms}</td>
                                        <td>{item.ac ? <i className="fa fa-check" aria-hidden="true"></i> : <i className="fa fa-times" aria-hidden="true"></i>}</td>
                                        <td>{item.wifi ? <i className="fa fa-check" aria-hidden="true"></i> : <i className="fa fa-times" aria-hidden="true"></i>}</td>


                                        <td>₹ {item.total_price}</td>
                                    </tr>)
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

// export default Listhotel;
export default Listhotel; 
