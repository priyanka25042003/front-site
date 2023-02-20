import React, { useState } from 'react'
import "./bus.css";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import Offers from '../offers';
import Package from '../Package/package';
import Hotel from '../Hotel/hotel';


function Bus() {
  const [search, setsearch]: any = useState()
  function setserch(e: any) {
    let name = e.target.name
    let value = e.target.value
    setsearch({ ...search, [name]: value })
  }
  const navigate = useNavigate();
    function navigat() {
      navigate("/listbus/"+search.from+"/"+search.to+"/"+search.day);
    }

  return (
  
    <div>
    <div className="bg-imagee ">
    </div>
    <div className="m-1">
        <div className=" hstack gap-3 bg-light text-dark d-flex justify-content-evenly shadow bg-body rounded rounded-pill alginne">
            <div className="w-25    bg-body rounded">
                <select
                    className="form-select w-100 rounded"
                    aria-label="Default select example"
                    name="from"
                    onChange={(e)=>setserch(e)}
                    id=""
                >
                  
          
                    <option value="" selected >
                       Leaving from
                    </option>
                    <option value="Ahmdabad">Ahmdabad</option>
                    <option value="Surat">Surat</option>
                    <option value="Rajkot">Rajkot</option>
                    <option value="Junagad">Junagad</option>
                </select>
            </div>
          <div>
          <i className="fa-solid fa-repeat"></i>
          </div>
            <div className="w-25    bg-body rounded" >
                <div className="  input-group input-daterange">
                    <select
                        className="form-select w-100 rounded"
                        aria-label="Default select example"
                        name="to"
                    onChange={(e)=>setserch(e)}

                        id=""
                    > 
                    <i className="fa-solid fa-repeat"></i>
                        <option value="" selected>
                           Going To
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
    </div><><br /><div style={{ marginTop: "9rem" }}>
      <div className="mb-5" mt-5>
        <h2 className="text-center">Popular Destination</h2>
      </div>
      <div className="containerr-fluid d-flex overfloww mt-3">
        <div className="m-5">
          <div className="roundedee">
            <img
              // src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg"
              src='https://q-xx.bstatic.com/xdata/images/city/250x250/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o='
              alt="" />
          </div>
          <h5 className="text-center mt-2">Mumbai</h5>
        </div>
        <div className="m-5">
          <div className="roundedee">
            <img
              src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg"
              alt="" />
    </div>
          <h5 className="text-center mt-2">Punjab</h5>
        </div>
        <div className="m-5">
          <div className="roundedee">
            <img
              src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg"
              alt="" />
          </div>
          <h5 className="text-center mt-2">Rajsthan</h5>
        </div>
        <div className="m-5">
          <div className="roundedee">
            <img
              src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg"
              alt="" />
          </div>
          <h5 className="text-center mt-2">Delhi</h5>
        </div>
        <div className="m-5">
          <div className="roundedee">
            <img
              src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg"
              alt="" />
          </div>
          <h5 className="text-center  mt-2">Surat</h5>
        </div>
        <div className="m-5">
          <div className="roundedee">
            <img
              src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg"
              alt="" />
          </div>
          <h5 className="text-center mt-2">Rajkot</h5>
        </div>
        <div className="m-5">
          <div className="roundedee">
            <img
              src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg"
              alt="" />
          </div>
          <h5 className="text-center mt-2">Ahmedabad</h5>
        </div>
        <div className="m-5">
          <div className="roundedee">
            <img
              src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg"
              alt="" />
          </div>
          <h5 className="text-center mt-2">Veraval</h5>
        </div>
      </div>
      <br />
      <div className="">
        <Offers></Offers>
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
      </MDBFooter>
    </div></></div>
                  

                      )
                    }

                      export default Bus;