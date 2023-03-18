import React from "react";
import "./home.css";
import Offers from "../offers";
import rajasthan from "../../assert/pexels-rahul-1011093.jpg";
import maharastra from "../../assert/maharatra.jpg";
import gujarat from "../../assert/Gujarat.jpg";
import kerala from "../../assert/Kerala.jpg";
import kashmir from "../../assert/Kashmir.jpg";
import himachal from "../../assert/Himachal.jpg";




function home() {

  function sringk(value: string) {
    let result = value.slice(0, 150);
    return result + "....";
  }
  return (
    <div>
      <div className="bggg-image containerdd">
        <div className="centeredd">
          <h1
            className="text-left text-light display-3"
            style={{ color: "gray", opacity: "0.7" }}
          >
            A taste of every lifestyle
          </h1>
          <h5
            className="text-left text-light display-6"
            style={{ color: "gray", opacity: "0.7" }}
          >
            Get the best prices properties, INDIA
          </h5>
        </div>
      </div>
      <div style={{ marginTop: "6rem" }}>
        <div className="mb-5">
          <h2 className="text-center text-muted">Top destinations</h2>
        </div>
        <div className="containerr-fluid d-flex overfloww mt-3">
          <div className="m-5">
            <div className="roundedee">
              <img
                src="https://www.indianluxurytrains.com/blog/wp-content/uploads/2013/09/Mahabat-ka-Maqbara.jpg"
                alt=""
              />
            </div>
            <h5 className="text-center mt-2">Gujrat</h5>
          </div>
          <div className="m-5">
            <div className="roundedee">
              <img
                src="https://www.planetware.com/photos-large/IND/india-top-attractions-gateway-india.jpg"
                alt=""
              />
            </div>
            <h5 className="text-center mt-2">mumbai</h5>
          </div>
          <div className="m-5">
            <div className="roundedee">
              <img
                src="https://www.planetware.com/wpimages/2019/08/india-top-attractions-goa-beaches.jpg"
                alt=""
              />
            </div>
            <h5 className="text-center mt-2">Goa</h5>
          </div>
          <div className="m-5">
            <div className="roundedee">
              <img
                src="https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-new-delhi.jpg"
                alt=""
              />
            </div>
            <h5 className="text-center mt-2">Delhi</h5>
          </div>
          <div className="m-5">
            <div className="roundedee">
              <img
                src="https://www.planetware.com/wpimages/2019/09/india-jaipur-top-attractions-hawa-mahal.jpg"
                alt=""
              />
            </div>
            <h5 className="text-center  mt-2">Jaipur</h5>
          </div>
          <div className="m-5">
            <div className="roundedee">
              <img
                src="https://www.planetware.com/wpimages/2022/03/india-best-places-to-visit-manali.jpg"
                alt=""
              />
            </div>
            <h5 className="text-center mt-2">Manali</h5>
          </div>
          <div className="m-5">
            <div className="roundedee">
              <img
                src="https://www.planetware.com/wpimages/2020/02/india-varanasi-best-places-to-visit-ganges-river.jpg"
                alt=""
              />
            </div>
            <h5 className="text-center mt-2">Varanasi</h5>
          </div>
          <div className="m-5">
            <div className="roundedee">
              <img
                src="https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-kapaleeshwarar-temple.jpg"
                alt=""
              />
            </div>
            <h5 className="text-center mt-2">Chennai</h5>
          </div>
        </div>
      </div>
      <div className="bggcolor">
        <div className="ml-5" style={{ marginTop: "6rem" }}>
          <h2 className="text-center text-muted"> Plan your next staycation</h2>
        </div>
        <div className="container">
          <div className="row ">
            <div className="col-4">
              <div className="card  rounded hocard m-4">
                <img
                  src={gujarat}
                  className="mult-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">GUJRAT</h5>
                  <p className="card-text">
                    Gujarat tour packages offer opportunities to embrace the legacy of the exotic culture.
                    Tourists cannot miss savouring the amazing food in Gujarat.

                  </p>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col-4" >
              <div className="card  rounded hocard m-4">
                <img
                  src={kashmir}
                  className="mult-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">KASHMIR</h5>
                  <p className="card-text">

                    A nature lover's paradise, a light of hope for spiritual people, a reason for family get togethers, and a cozy nest for honeymooners, the heaven on earth, Jammu & Kashmir offers itself as the best holiday destination in India.
                  </p>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card  rounded hocard m-4">
                <img
                  src={kerala}
                  className="mult-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">KERALA</h5>
                  <p className="card-text">
                    Kerala holiday deals that come with the best prices.
                    Get special discount on an advanced booking of Kerala Summer, Monsoon & Winter packaged tours
                  </p>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card  rounded hocard m-4">
                <img
                  src={himachal}
                  className="mult-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">HIMACHAL</h5>
                  <p className="card-text">
                    Himachal Pradesh is a haven for adventure lovers, and offers the ultimate thrill and adrenaline rush with various adventure activities like camping, trekking, paragliding, skiing, ice skating, mountain cycling, river rafting and rock climbing.
                  </p>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card  rounded hocard m-4">
                <img
                  src={maharastra}
                  className="mult-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">MAHARASHTRA</h5>
                  <p className="card-text">
                    Maharashtra - is brimming with an array of colorful shrines; a remarkable collection of caves; golden beaches lined with swaying palm trees; historic hotspots with strong past connection; and oodles of emerald hill stations under the canopy of lush western ghats.
                  </p>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card  rounded hocard m-4">
                <img
                  src={rajasthan}
                  className="mult-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title"> RAJASTHAN</h5>
                  <p className="card-text">
                    In rajasthan Visit the heritage tourist destinations like Jodhpur, Jaipur and Udaipur, or enjoy adventure activities in Pushkar, Bharatpur and Jaisalmer, ranging from hot air balloon ride to sand dune bashing.
                  </p>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            {/* <div className="col-4">
              <div className="card  rounded hocard m-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                  className="mult-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text"></p>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="">
          <Offers></Offers>
        </div>
      </div>
    </div>
  );
}

export default home;
