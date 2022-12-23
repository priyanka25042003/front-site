import React from 'react'
import "./bus.css";

function Bus() {
  return (
    <div>
      <div className="bg-imagee containerd">
      </div>
      <div className=" hstack gap-3 bg-light text-dark d-flex justify-content-evenly shadow bg-body rounded rounded-pill alginne">
      <div>From</div>
      <div className="w-25    bg-body rounded">
                        <select
                            className="form-select w-100 rounded"
                            aria-label="Default select example"
                            name="citys"
                            id=""
                        >
                            <option value="" selected>
                                location
                            </option>
                            <option value="">Ahmdabad</option>
                            <option value="">Surat</option>
                            <option value="">Rajkot</option>
                            <option value="">Junagad</option>
                        </select>
                    </div>
                    <div>to</div>
                    <div className="w-25    bg-body rounded" >
                        <div className="  input-group input-daterange">
                        <select
                            className="form-select w-100 rounded"
                            aria-label="Default select example"
                            name="citys"
                            id=""
                        >
                            <option value="" selected>
                                location
                            </option>
                            <option value="">Ahmdabad</option>
                            <option value="">Surat</option>
                            <option value="">Rajkot</option>
                            <option value="">Junagad</option>
                        </select>
                        </div>
                    </div>
                    <div>
                        <form className="form-inline m-2 my-lg-0">
                            <input
                                className="form-control mr-sm-2"
                                type="date"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                className="btn btn-outline-primary rounded-pill b my-2 my-sm-0"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
      </div>
    </div>
  )
}

export default Bus;