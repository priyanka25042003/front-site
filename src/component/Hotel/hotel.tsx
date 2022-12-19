import React from 'react'
import "./hotel.css";
function Hotel() {
    return (
        <div>
            <div className="bg-image containerd">
                <div className='centered' >
                    <h1 className='text-left text-light display-3'>Find your next stay</h1>
                    <h5 className='text-left text-light display-6'>Get the best prices properties, INDIA</h5>
                </div>
            </div>

            <div>
                <div className=' hstack gap-3 bg-light text-dark d-flex justify-content-evenly shadow bg-body rounded rounded-pill algin'  >
                    <div className='w-25    bg-body rounded' >
                        <select className='form-select w-100 rounded-circle' aria-label="Default select example" name="citys" id="">
                            <option value="" selected>location</option>
                            <option value="">Ahmdabad</option>
                            <option value="">Surat</option>
                            <option value="">Rajkot</option>
                            <option value="">Junagad</option>

                        </select>
                    </div>
                    <div>
                        <div className="input-group input-daterange">
                            <input type="date" className="form-control" />
                            <div className="input-group-addon m-1">to</div>
                            <input type="date" className="form-control" />
                        </div>
                    </div>
                    <div>
                        <form className="form-inline m-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success btn-round my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Hotel;