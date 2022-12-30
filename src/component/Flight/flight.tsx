import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Offers from "../offers";
import "./flight.css"


function Flight() {
    const [search , setsearch]:any = useState()
    function setserch(e:any) {
      let name = e.target.name
      let value = e.target.value
      setsearch({...search,[name]:value})
    }
    const navigate = useNavigate();
    function navigat() {
      navigate("/listflight/"+search.from+"/"+search.to+"/"+search.day);
    }
    return (
        <div>
            <div className="bg-image containerd">
            </div>
            <div className="m-1">
                <div className=" hstack gap-3 bg-light text-dark d-flex justify-content-evenly shadow bg-body rounded rounded-pill algine">
                    <div className="w-25    bg-body rounded">
                        <select
                            className="form-select w-100 rounded"
                            aria-label="Default select example"
                            name="from"
                            onChange={(e)=>setserch(e)}
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
                            onChange={(e)=>setserch(e)}

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
                            onChange={(e)=>setserch(e)}

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
                <br />
                <div className="mb-3 mt-5 ">
                    <h2 className="text-center " >Destination</h2>
                </div>
                <div className="row row-cols-1 mx-1 row-cols-md-2 g-4">
                    <div className="card mb-3 mt-3 ml-4 " style={{ maxWidth: "580px" }}>
                        <div className="row g-0 ">
                            <div className="col-md-4">
                                <img src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 mt-3 ml-4 " style={{ maxWidth: "580px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 mt-3 ml-4 " style={{ maxWidth: "580px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 mt-3 ml-4 " style={{ maxWidth: "580px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 mt-3 ml-4 " style={{ maxWidth: "580px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 mt-3 ml-4 " style={{ maxWidth: "580px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
             <div className="" >
        <Offers></Offers>
      </div>

        </div>




    )
}

export default Flight;

