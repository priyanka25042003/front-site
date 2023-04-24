import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit'
import React from 'react'

function Footer() {
  return (
      <div>      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
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
                              Online Ticketing Booking
                          </h6>
                          <p>
                              This website provides online  booking services throughout India with amazing deals on bus ticket prices.
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
                              <a href='refund' className='text-reset'>
                                  refund
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
      </MDBFooter></div>
  )
}

export default Footer