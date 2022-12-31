import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import firebase from "firebase";
import "./listhotel.css";

import state from "../../../assert/state.json";


function Listhotel() {
    let array: string[] = []
    const citys = Object.values(state)
    citys.forEach(element => {
        element.forEach(element => {
            array.push(element)
        });

    });
    
    // const [serchdata, setserchdata]: any = useState()
    const { city, chackin, chackout, serch } = useParams();
    const [maindatah, setmaindatah]: any = useState([])
    const [filterdata, setfilterdatah]: any[] = useState([])
    const [filterh, setfilterh]: any = useState([])


    useEffect(() => {
        console.log(city, chackin, chackout, serch);
        getdata()
    }, [])

    function filterDatah(e: any) {
        let name: any = e.target.name
        let val: any = e.target.value
        setfilterh({ ...filterh, [name]: val })
        if (name === "From" || name === "To") {
            hendelautosagetion(e)
        }
    }
    function submit() {
        console.log(filterh);

    }
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

                setmaindatah(arr);
                console.log(arr);

                // arr.forEach(element => {
                //     if (element.city == city) {
                //         filter.push(element)
                //     }
                // });
                setfilterdatah(filterh);
                console.log(filterh);

            })
            .catch((err) => {
                console.log(err);
            });

    }
    const [autosagetion, setautosagetion]:any[] = useState([])
    const [showautosagetion, setshowautosagetion]:any = useState(false)

    function hendelautosagetion(e: any) {
        setshowautosagetion(true)

        let ar:any[]=[]
        array.forEach(element => {
            console.log();
            const capitalized = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
            if (element.startsWith(capitalized)) {
                ar.push(element)
            }
            

        });
       
        setautosagetion(ar)
     
        
    }
    window.onclick =()=>{
        setshowautosagetion(false)
    }
    function select(params:any) {
        setfilterh({From:params}) 
        setshowautosagetion(false)
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
                                                        name="From"
                                                        onInput={(e) => filterDatah(e)}
                                                        className="form-control"
                                                        list="origin-options"
                                                        id="origin-input"
                                                        placeholder="Location"
                                                        value={filterh.From}
                                                        aria-describedby="origin-label"
                                                    />
                                                    {showautosagetion? <div className=' autosagetion'>
                                                        {
                                                            autosagetion.map((item:any) =>{
                                                             return   <div onClick={()=>select(item)} className='list-item'>{item}</div>
                                                            })
                                                        }
                                                        
                                                </div>:""}
                                                </div>
                                                
                                            </div>
                                        </div>
                                        {/* <div className="col-sm">
                                            <div className="mb-2">
                                                <label id="destination-label" htmlFor="destination-input" className="form-label">To</label                     >
                                                <div className="input-group">
                                                    <span className="input-group-text"><i className="bi-pin-map-fill"></i> </span>
                                                    <input
                                                        type="text"
                                                        name="To"
                                                        onChange={(e) => filterDatah(e)}
                                                        className="form-control"
                                                        list="destination-options"
                                                        id="destination-input"
                                                        placeholder="Location"
                                                        aria-describedby="destination-label"

                                                    />
                                                    <datalist id="destination-options"></datalist>
                                                </div>
                                            </div>
                                        </div> */}
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
                                                name="date"
                                                onChange={(e) => filterDatah(e)}
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
                                                onChange={(e) => filterDatah(e)}
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
                                <button type="button" className="btn btn-primary" onClick={submit}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className=" mt-5  container-fluid">
                <div className='mt-5 h-100 ml-5'>
                    <div className="">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col"> <small><b>Sorted By:</b></small>  </th>
                                    <th scope="col"><small>Hotel Name</small></th>
                                    <th scope="col"><small> City</small></th>
                                    <th scope="col"><small>Hotel Type</small></th>
                                    <th scope="col"><small>WIFI</small></th>
                                    <th scope="col"><small>A/C</small></th>
                                    <th scope="col"><small>Total Rooms</small></th>
                                    <th scope="col"><small>Booking</small></th>
                                </tr>
                            </thead>
                            <tbody>
                                {maindatah.map((item: any, index: any) => {
                                    return (
                                        <><tr key={index}>
                                            <td><img className='rounded' src={item.img} alt="" width={150} /> &nbsp;&nbsp;&nbsp;&nbsp;     {item.hotel_name}
                                            </td>
                                            <td>{item.hotel_name}</td>
                                            <td>{item.city}</td>
                                            <td>{item.hotel_type}</td>
                                            <td>{item.wifi != "0" ? <i className="fa fa-check" aria-hidden="true"></i> : <i className="fa fa-times" aria-hidden="true"></i>}</td>
                                            <td>{item.ac != "0" ? <i className="fa fa-check" aria-hidden="true"></i> : <i className="fa fa-times" aria-hidden="true"></i>}</td>
                                            <td>{item.avilabe_rooms}<br /> </td>
                                            <td>{item.total_rooms}</td>
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
        </div>

    )
}

export default Listhotel; 
