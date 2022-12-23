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
            </div>
        </div>
    )
}

export default Listhotel;
