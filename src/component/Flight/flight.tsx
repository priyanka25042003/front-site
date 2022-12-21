import "./flight.css"


function Flight() {
    return (
        <div>
            <div className="bg-image containerd">
            </div>
            <div className='m-1'>
                <div className=' hstack gap-3 bg-light text-dark d-flex justify-content-evenly shadow bg-body rounded rounded-pill algin'  >

                    <div className="container rounded shadow-sm">
                        <form action=""> <div className="row">
                            <div className="col-md-2 pe-0 col-sm-12"> <div className="btn radio-btn mb-3">
                                <label className="radio">
                                    <input type="radio" value="a" name="book" checked /> Roundtrip <span></span> </label> </div> </div>
                            <div className="col-md-2 pe-0 col-sm-12"> <div className="btn radio-btn mb-3">
                                <label className="radio"> <input type="radio" value="a" name="book" /> One way <span></span> </label>
                            </div> </div>
                            <div className="col-md-2 pe-0 col-sm-12">
                                <div className="btn radio-btn mb-3">
                                    <label className="radio">
                                        <input type="radio" value="a" name="book" /> Multi-City <span></span> </label>
                                </div>
                            </div>
                        </div>
                            <div className="row">
                                <div className="col-md-6 col-12 mb-4">
                                    <div className="form-control d-flex flex-column">
                                        <p className="h-blue">FLYING FROM</p>
                                        <input className="inputbox" placeholder="City or Airport" type="text" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 mb-4">
                                    <div className="form-control d-flex flex-column">
                                        <p className="h-blue">FLYING TO</p>
                                        <input className="inputbox" placeholder="City or Airport" type="text" /> </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-12 mb-4">
                                    <div className="form-control d-flex flex-column"> <p className="h-blue">DEPARTING</p>
                                        <input className="inputbox textmuted" type="date" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 mb-4">
                                    <div className="form-control d-flex flex-column"> <p className="h-blue">RETURNING</p>
                                        <input className="inputbox textmuted " type="date" /> </div> </div> </div>
                            <div className="row">
                                <div className="col-md-4 mb-4">
                                    <div className="form-control d-flex flex-column">
                                        <p className="h-blue">ADULTS(18+)</p>
                                        <select className="border-0 outline-none">
                                            <option value="" hidden selected>0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="form-control d-flex flex-column">
                                        <p className="h-blue">CHILDREN(0-17)</p>
                                        <select className="border-0 outline-none">
                                            <option value="" hidden selected>0</option>
                                            <option value="1">1</option> <option value="2">2</option>
                                            <option value="3">3</option> </select>
                                    </div> </div>
                                <div className="col-md-4 mb-4">
                                    <div className="form-control d-flex flex-column">
                                        <p className="h-blue">TRAVEL CLASS</p>
                                        <select className="border-0 outline-none">
                                            <option value="" hidden selected>Class</option>
                                            <option value="1">Economy</option>
                                            <option value="2">Premium</option>
                                            <option value="3">Business</option>
                                        </select>
                                    </div> </div> </div>
                            <div className="btn btn-primary form-control text-center">SHOWN FLIGHTS</div>
                        </form>
                    </div>



                </div>
            </div>
        </div>




    )
}

export default Flight;

