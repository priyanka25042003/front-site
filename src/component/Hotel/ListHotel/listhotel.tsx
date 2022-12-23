import React from 'react'

function listhotel() {
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
                </table>
            </div>
        </div>
    )
}

export default listhotel