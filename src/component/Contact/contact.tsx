import React from 'react'

function Contact() {
    return (
        <div>
            <div className="hero hero-inner">
                <div className="container ">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mx-auto text-center text-#1A374D ">
                            <div className="intro-wrap ">
                                <h1 className="mb-0 text-white">Contact  Us</h1>
                                <p className="text-white">"Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row mt-5'>
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <form className="contact-form aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="text-black" htmlFor="fname">First name</label>
                                        <input type="text" className="form-control" id="fname" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="text-black" htmlFor="lname">Last name</label>
                                        <input type="text" className="form-control" id="lname"></input>
                                    </div>

                                </div>
                            </div>
                            <div className="form-group">
                                <label className="text-black" htmlFor="email">Email address</label>
                                <input type="email" className="form-control" id="email"></input>
                            </div>
                            <div className="form-group">
                                <label className="text-black" htmlFor="message">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>

                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                    <div className="col-lg-5 ml-auto mt-4  text-center">

                        <ul className="list-unstyled mb-0">
                            <li><i className="fa fa-map-marker fa-2x"></i>
                                <p>San Francisco, CA 94126, USA</p>
                            </li>
                            <br />
                            <li className='mt-2'><i className="fa fa-phone fa-2x" aria-hidden="true"></i>
                                <p>+ 01 234 567 89</p>
                            </li>
                            <li><i className="fa fa-envelope mt-4 fa-2x"></i>
                                <p>contact@mdbootstrap.com</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div id="carouselExampleControls" className="carousel slide carousel-dark text-center " data-mdb-ride="carousel">
                <h1 className='mt-5'>Testimonials</h1>
                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <img className="rounded-circle shadow-1-strong mb-4 mt-5"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar"
                            style={{ width: "150px" }} />
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <h5 className="mb-3">Maria Kate</h5>
                                <p>Photographer</p>
                                <p className="text-muted">
                                    <i className="fa fa-quote-left pe-2"></i>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                    nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                                    fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                                    doloremque.
                                </p>
                            </div>
                        </div>
                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="far fa-star fa-sm"></i></li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <img className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar"
                            style={{ width: "150px" }} />
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <h5 className="mb-3">John Doe</h5>
                                <p>Web Developer</p>
                                <p className="text-muted">
                                    <i className="fa fa-quote-left pe-2"></i>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                    nesciunt sint eligendi reprehenderit reiciendis.
                                </p>
                            </div>
                        </div>
                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="far fa-star fa-sm"></i></li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <img className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar" 
                            style={{ width: "150px" }} />
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <h5 className="mb-3">Anna Deynah</h5>
                                <p>UX Designer</p>
                                <p className="text-muted">
                                    <i className="fas fa-quote-left pe-2"></i>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                    nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                                    fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                                    doloremque.
                                </p>
                            </div>
                        </div>
                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="far fa-star fa-sm"></i></li>
                        </ul>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls"
                    data-mdb-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls"
                    data-mdb-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}

export default Contact;
