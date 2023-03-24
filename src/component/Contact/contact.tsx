import firebase from 'firebase';
import React, { useState } from 'react'

function Contact() {
    const [userfeed, setuserfeed] :any= useState()
    function feed(params:any) {
        let name = params.terget.name;
        let value = params.terget.value;
        setuserfeed({ ...userfeed, [name]: value });
    }
    function submit() {
        firebase
        .database()
        .ref("/feedback/")
        .push(userfeed)
        .then((res) => {
          console.log(res);
          alert("Your Response is send")
        })
        .catch((err) => {

        });
    }
    return (
        <div>
            <div className="hero hero-inner">
                <div className="container ">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mx-auto text-center text-#1A374D ">
                            <div className="intro-wrap ">
                                <h1 className="mb-0 text-wsubjectite">Contact  Us</h1>
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
                                <div className="col-12">
                                    <div className="form-group">
                                        <label className="text-black" htmlFor="fname">First name</label>
                                        <input type="text" className="form-control" name='name' onChange={(e)=>feed(e)} id="fname" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        
                                        <label className="text-black" htmlFor="lname">Phone .NO</label>
                                        <input type="text" className="form-control" name="phone" onChange={(e)=>feed(e)}  id="lname"></input>
                                    </div>

                                </div>
                            </div>
                            <div className="form-group">
                                <label className="text-black" htmlFor="email">Email address</label>
                                <input type="email" className="form-control " onChange={(e)=>feed(e)} name="email"  id="email"></input>
                            </div>
                            <div className="form-group">
                                <label className="text-black" htmlFor="message">Message</label>
                                <textarea className="form-control" onChange={(e)=>feed(e)} name="message"  id="exampleFormControlTextarea1" rows={3}></textarea>

                            </div>
                            <button type="submit" className="btn btn-primary" onClick={submit}>Send Message</button>
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
            {/* done ?  oyee start mukvana che jo nicaha. */}
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <h1 className='mt-5 text-center'>Testimonials</h1>
                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <div className='d-flex justify-content-center' >
                            <img className="rounded-circle shadow-1-strong mb-4 mt-5"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar"
                                style={{ width: "150px" }} />
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <h5 className="mb-3 text-center ">Maria Kate</h5>
                                <p className=' text-center'>Photographer</p>
                                <p className="text-muted text-center">
                                    <i className="fa fa-quote-left pe-2"></i>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                    nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                                    fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                                    doloremque.
                                </p>
                            </div>
                        </div>
                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li><i className="fa fa-star fa-sm"></i></li>
                            <li><i className="fa fa-star fa-sm"></i></li>
                            <li><i className="fa fa-star fa-sm"></i></li>
                            <li><i className="fa fa-star fa-sm"></i></li>
                            <li><i className="fa fa-star fa-sm"></i></li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <div className='d-flex justify-content-center' >


                            <img className="rounded-circle shadow-1-strong mb-4 mt-5"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar"
                                style={{ width: "150px" }} />
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <h5 className="mb-3 text-center">John Doe</h5>
                                <p className=' text-center'>Web Developer</p>
                                <p className="text-muted text-center">
                                    <i className="fa fa-quote-left pe-2"></i>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                    nesciunt sint eligendi reprehenderit reiciendis.
                                </p>
                            </div>
                        </div>
                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li><i className="fa fa-star fa-sm"></i></li>
                            <li><i className="fa fa-star fa-sm"></i></li>
                            <li><i className="fa fa-star fa-sm"></i></li>
                            <li><i className="fa fa-star fa-sm"></i></li>
                            <li><i className="fa fa-star fa-sm"></i></li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <div className='d-flex justify-content-center' >
                            <img className="rounded-circle shadow-1-strong mb-4 mt-5"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar"
                                style={{ width: "150px" }} />
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <h5 className="mb-3  text-center">Anna Deynah</h5>
                                <p className='  text-center'>UX Designer</p>
                                <p className="text-muted  text-center">
                                    <i className="fas fa-quote-left pe-2"></i>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                    nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                                    fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                                    doloremque.
                                </p>
                            </div>
                        </div>
                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li><i className="fa fa-star fa-sm"></i></li>
                            <li><i className="fa fa-star fa-sm"></i></li>
                            <li><i className="fa fa-star fa-sm"></i></li>
                            <li><i className="fa fa-star fa-sm"></i></li>
                            <li><i className="fa fa-star fa-sm"></i></li>
                        </ul>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </button>
            </div>

            

        </div>
    )
}

export default Contact;
