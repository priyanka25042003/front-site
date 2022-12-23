import React from 'react'

function Listhotel() {
    return (
        <div className="d-flex mt-5  container">
            <div className='w-25 h-100 bg-ight mr-5  bg-info'>


                <div className="mb-2">
                    <label id="hotel-type-label" htmlFor="hotel-type-select" className="form-label"
                    >Hotel</label                  >

                </div>
                <div id="departure-date" className="mb-2">
                    <label id="departure-date-label" htmlFor="departure-date-input" className="form-label">CHECK-IN DATE</label                   >
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
                    <label id="return-date-label" htmlFor="return-date-input" className="form-label">CHECK-OUT DATE</label>
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
                <button id="search-button" className="w-100 btn btn-primary" disabled>
                    Search
                </button>


            </div>
            <div className='w-75   h-100 '>ghng
{/* function listhotel() {
    return (
        <div className="d-flex mt-5  container">
            <div className='w-25 h-100 bg-ight mr-5  bg-info' >
                <div className="mb-3">
                    <label htmlFor="formFileMultiple" className="form-label">PRICE</label> <br />
                    <input className="form-range w-100" type="range" id="formFileMultiple" /><br />
                    <label htmlFor="formFileMultiple" className="form-label">PRICE</label>
                </div>
            </div>
            <div className='w-75   h-100 '>
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
                </table> */}
            </div>
        </div>
    )
}

export default Listhotel;
{/* export default listhotel */}
