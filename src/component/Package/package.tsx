import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./package.css";
import Offers from "../offers";


function Package() {
  const [search, setsearch]: any = useState()
  function setserch(e: any) {
    let name = e.target.name
    let value = e.target.value
    setsearch({ ...search, [name]: value })
  }
  const navigate = useNavigate();
  function navigat() {
    navigate("/listflight/"+search.from+"/"+search.to+"/"+search.day);
  }


  return (
   <div>
      <div className="cg-image " style={{ width: "100rem" }} >
      </div>
      <div className="m-1">
        <div className=" hstack gap-3 bg-light text-dark d-flex justify-content-evenly shadow bg-body rounded rounded-pill algine">
          <div className="w-25  bg-body rounded">
            <select
              className="form-select w-100 rounded"
              aria-label="Default select example"
              name="from"
              onChange={(e) => setserch(e)}
              id=""
            >
              <option value="" selected>
                location
              </option>
              <option value="Ahmdabad">Ahmdabad</option>
              <option value="Surat">Surat</option>
              <option value="Rajkot">Rajkot</option>
              <option value="Junagad">Junagad</option>
            </select>
          </div>
          <div>to</div>
          <div className="w-25    bg-body rounded" >
            <div className="  input-group input-daterange">
              <select
                className="form-select w-100 rounded"
                aria-label="Default select example"
                name="to"
                onChange={(e) => setserch(e)}

                id=""
              >
                <option value="" selected>
                  location
                </option>
                <option value="Ahmdabad">Ahmdabad</option>
                <option value="Surat">Surat</option>
                <option value="Rajkot">Rajkot</option>
                <option value="Junagad">Junagad</option>
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
                name="day"
                onChange={(e) => setserch(e)}
              />
              <button
                className="btn btn-outline-primary rounded-pill b my-2 my-sm-0"
                type="submit"
                onClick={navigat}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bggcolor">
        <div className="ml-5" style={{ marginTop: "6rem" }}>
          <h2 className=""> Plan your next staycation</h2>
        </div>
        <div className="card  rounded hocard" style={{ width: "18rem" }} >

          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="mult-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </p>
            <p className="card-text">

            </p>
          </div>
        </div>
        <div className="" >
        <Offers></Offers>
      </div>
      </div>
    </div>

  )
}


export default Package;

