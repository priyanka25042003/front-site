import React from 'react'
import HorizontalGallery from 'react-dynamic-carousel';
import "./about.css";

function About() {
    return (
        <div>
            <div className="hero hero-inner">
                <div className="container ">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mx-auto text-center text-#1A374D ">
                            <div className="intro-wrap ">
                                <h1 className="mb-0 text-white">About Us</h1>
                                <p className="text-white">"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-around'>
                <div id="carouselExampleIndicators" className="carousel slide w-100 m-5" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://themewagon.github.io/tour/images/slider-2.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://themewagon.github.io/tour/images/slider-3.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://themewagon.github.io/tour/images/slider-4.jpg" className="d-block w-100" alt="..." />
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
                <div className="m-3 mt-5" >
                    <div >
                        <h2 className="section-title mb-4">About Tours</h2>
                        <p className='text-justify' >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <ul className="  two-col clearfix">
                            <li> Bus</li>
                            <li>Airlines</li>
                            <li>Hotels</li>
                            <li>Package Tours</li>
                        </ul>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default About;
