import React from 'react'

function listflight() {
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
              <th scope="col"><small>Departure</small></th>
              <th scope="col"><small>Duration</small></th>
              <th scope="col"><small>Arrival</small></th>
              <th scope="col"><small>
Price</small></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/I5.png?v=14" alt="" width={40} /> AirAsia </td>
              <td>04:55 <br />
                New Delhi</td>
              <td> <small>09h 15m</small> </td>
              <td>14:10<br />
                Bengaluru

              </td>
              <td>₹ 10,367</td>
            </tr>
            <tr>
              <td><img src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/I5.png?v=14" alt="" width={40} /> AirAsia</td>

              <td>04:55 <br />
                New Delhi</td>
              <td><small>09h 15m</small></td>
              <td>14:10<br />
                Bengaluru

              </td>
              <td>₹ 10,367</td>

            </tr>
            <tr>
              <td><img src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/I5.png?v=14" alt="" width={40} /> AirAsia</td>

              <td>04:55 <br />
                New Delhi</td>
              <td><small>09h 15m</small></td>
              <td>14:10<br />
                Bengaluru

              </td>
              <td>₹ 10,367</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}


export default listflight
