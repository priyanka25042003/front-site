import "./flight.css"


function Flight() {
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
            {/* <div>
            <section id="tabs" className="project-tab">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav>
                            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Project Tab 1</a>
                                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Project Tab 2</a>
                                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Project Tab 3</a>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <table className="table" cellSpacing={0}>
                                    <thead>
                                        <tr>
                                            <th>Project Name</th>
                                            <th>Employer</th>
                                            <th>Awards</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><a href="#">Work sumit 1</a></td>
                                            <td>Doe</td>
                                            <td>john@example.com</td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">Work 2</a></td>
                                            <td>Moe</td>
                                            <td>mary@example.com</td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">Work 3</a></td>
                                            <td>Dooley</td>
                                            <td>july@example.com</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <table className="table" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th>Project Name</th>
                                            <th>Employer</th>
                                            <th>Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><a href="#">Workpriya 1</a></td>
                                            <td>Doe</td>
                                            <td>john@example.com</td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">Work 2</a></td>
                                            <td>Moe</td>
                                            <td>mary@example.com</td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">Work 3</a></td>
                                            <td>Dooley</td>
                                            <td>july@example.com</td>
                                        </tr>
                            
                                    </tbody>
                                </table>
                            </div>
                            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <table className="table" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th>Contest Name</th>
                                            <th>Date</th>
                                            <th>Award Position</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><a href="#">Work 1</a></td>
                                            <td>Doe</td>
                                            <td>john@example.com</td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">Work 2</a></td>
                                            <td>Moe</td>
                                            <td>mary@example.com</td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">Work 3</a></td>
                                            <td>Dooley</td>
                                            <td>july@example.com</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </div> */}

        </div>




    )
}

export default Flight;

