import React from "react";
import "./refund.css";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
function refund(){
    return(
         <div>
             <div className="bg-style">
                   <div className="container ">
                       <div className="row align-items-center">
                           <div className="col-lg-4 mx-auto text-center text-#1A374D ">
                              <div className="intro-wrap ">
                                  <h3 className="mb-0 text-white">REFUND STATUS</h3>
                             </div>
                          </div>
                     </div>
                 </div>
             </div>
             <br></br>
       <div>
        <br></br>
       <div className="shadow p- mb-5 bg-body-tertiary rounded m-5   h-100" >
       <div>
            <form className="contact-form aos-init aos-animate center " data-aos="fade-up" data-aos-delay="100">
                 <div className="form-group m-5">
                       <label className="text-black" htmlFor="fname">Ticket Number</label>
                       <input type="text" className="form-control" id="fname" />
                </div>
                <div className="form-group m-5">
                      <label className="text-black" htmlFor="fname">Email/phone Number</label>
                      <input type="text" className="form-control" id="fname" />
                 </div>
                 <button type="button" className="btn btn-secondary mt-2 mr-10px ml-5 mb-2">Refund Status</button>
                
                <br></br>
                
                <i className="fa fa-info-circle ml-5" aria-hidden="true"></i>
                Enter your Ticket Number and the email address used while booking the ticket
                
             </form>
        </div>
       </div>
       <div className="cg-style">
                 <div className="container ">
                       <div className="row align-items-center">
                          <div className="col-lg-10 mx-auto text-center text-#1A374D ">
                              <div className="intro-wrap ">
                        <h1 className="mb-0 text-white">Wish you a Happy and Comfortable Journey</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
 <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href='' className='ml-4 text-reset'>
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href='' className='ml-4 text-reset'>
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href='' className='ml-4 text-reset'>
              <i className="fa fa-google" aria-hidden="true"></i>
            </a>
            <a href='' className='ml-4 text-reset'>
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </section>

        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon icon="gem" className="me-3" />
                  Online Bus Ticketing
                </h6>
                <p>
                  This website provides online bus booking services throughout India with amazing deals on bus ticket prices.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Other Booking</h6>
                <p>
                  <a href='FLIGHT' className='text-reset'>
                    FLIGHT
                  </a>
                </p>
                <p>
                  <a href='HOTAL' className='text-reset'>
                    HOTEL
                  </a>
                </p>
                <p>
                  <a href='PACKAGE' className='text-reset'>
                    PACKAGE
                  </a>
                </p>
                <p>
                  <a href='BUS' className='text-reset'>
                   BUS
                  </a>
                </p>
                {/*<p>
<a href='#!' className='text-reset'>
Laravel
</a>
</p>*/}
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                <p>
                  <a href='offers' className='text-reset'>
                    Offers
                  </a>
                </p>
                <p>
                  <a href='ABOUT' className='text-reset'>
                    About
                  </a>
                </p>
                <p>
                  <a href='CONTACT' className='text-reset'>
                    Contact
                  </a>
                </p>
                <p>
                  <a href='feedback' className='text-reset'>
                    feedback
                  </a>
                </p>
                <p>
                  <a href='feedback' className='text-reset'>
                 Refund
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  AHMEDABAD, ahme 10012, INDIA
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  busticketing@gmail.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2022 Copyright:
          <a className='text-reset fw-bold' href='bansariprajapati05@gmail.com'>
            BansariPrajapati
          </a>
        </div>
      </MDBFooter>
    </div>
    )
}
export default refund;