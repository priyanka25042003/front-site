import React, { useEffect, useState } from "react";
import "./bus.css";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import Offers from "../offers";
import Hotel from "../Hotel/hotel";
import bus from "../../assert/bus.jpeg";
import state from "../../assert/state.json";
import HorizontalGallery from "react-dynamic-carousel";
import firebase from "firebase";
import Lucknow from "../../assert/Lucknow.jpg";
import srilanka  from "../../assert/srilanka.jpg";
import Hyderabad  from "../../assert/Hyderabad.jpg";
import Shillong  from "../../assert/Shillong, Meghalaya.jpg";
import Coimbatore  from "../../assert/Coimbatore, Tamil Nadu.jpg";
import Gangtok  from "../../assert/Gangtok.jpg";
import pushkar  from "../../assert/pushkar.webp";
import ladakh  from "../../assert/ladakh.jpeg";

function Bus() {
  let cityarr:any[]=[]
  let city =  Object.values(state)
  city.forEach(i=>{
    i.forEach(city=>{
      cityarr.push(city)
      
    })
  })
  // console.log(cityarr);

  
  const [autosagetion, setautosagetion]: any[] = useState([]);
  const [showautosagetion, setshowautosagetion]: any = useState(false);
  const [showautofrom, setshowautofrom]: any = useState(false);

  const [search, setsearch]: any = useState();
  const [next_plan, setnxtplan] = useState<any[]>([]);
  const [filterh, setfilterh]: any = useState([]);

  useEffect(() => {
    getdata();
  }, []);
  function getdata() {
    let arr: any[] = [];
    firebase
      .database()
      .ref("/bus")
      .get()
      .then((res) => {
        res.forEach((element) => {
          arr.push({ key: element.key, ...element.val() });

        });
        console.log(arr);
        
        // setnxtplan(arr.slice(0, 4))
        setnxtplan(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function filterDatah(e: any) {
    let name: any = e.target.name;
    let val: any = e.target.value;
    // console.log({ ...filterh, [name]: val });
    setsearch({ ...search, [name]: val });
    if (name === "From") {
      hendelautosagetion(e);
    } else {
      hendelautosfrom(e);
    }
  }
  function setserch(e: any) {
    let name = e.target.name;
    let value = e.target.value;
    setsearch({ ...search, [name]: value });
  }
  const navigate = useNavigate();
  function navigat() {
    navigate("/listbus/" + search.From + "/" + search.To + "/" + search.day);
  }
  function hendelautosagetion(e: any) {
    setshowautosagetion(true);
    let ar: any[] = [];
    cityarr.forEach((element: any) => {
      // console.log(element);

      const capitalized =
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
      // console.log(capitalized);

      if (element.startsWith(capitalized)) {
        ar.push(element);
        console.log(ar);
        
      }
    });
    setautosagetion(ar);
  }
  function hendelautosfrom(e: any) {
    setshowautofrom(true);
    let ar: any[] = [];
    cityarr.forEach((element: any) => {
      // console.log(element);

      const capitalized =
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
      // console.log(capitalized);

      if (element.startsWith(capitalized)) {
        ar.push(element);
      }
    });
    setautosagetion(ar);
  }

  window.onclick = () => {
    setshowautosagetion(false);
    setshowautofrom(false);
  };
 


  function select(params: any, location: any) {
    if (location == "From") {
      setsearch({ ...search, From: params });
      setshowautosagetion(false);
    } else {
      setsearch({ ...search, To: params });
      setshowautofrom(false);
    }
    // console.log(search);
  }

  return (
    <div>
      <div className="bg-imagee "></div>
      <div className="m-1">
        <div className=" hstack gap-3 bg-light mt-5 text-dark d-flex justify-content-evenly shadow bg-body rounded rounded-pill alginne">
          <div className="w-25    bg-body rounded">
            <div className="  input-group input-daterange">
              <input
                type="text"
                name="From"
                onInput={(e) => filterDatah(e)}
                className="form-control"
                list="origin-options"
                id="origin-input"
                placeholder="Location"
                value={search?.From}
                aria-describedby="origin-label"
                autoComplete="off"
              />
              {showautosagetion ? (
                <div className="autosagetions">
                  {autosagetion.map((item: any) => {
                    return (
                      <div
                        onClick={() => select(item, "From")}
                        className="list-items"
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div>to</div>
          <div className="w-25    bg-body rounded">
            <div className="  input-group input-daterange">
              <input
                type="text"
                name="To"
                onInput={(e) => filterDatah(e)}
                className="form-control"
                list="origin-options"
                id="origin-input"
                placeholder="Location"
                value={search?.To}
                aria-describedby="origin-label"
                autoComplete="off"
              />
              {showautofrom ? (
                <div className="autosagetions">
                  {autosagetion.map((item: any) => {
                    return (
                      <div
                        onClick={() => select(item, "to")}
                        className="list-items"
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
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
                onChange={(e) => setserch(e)}
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
      </div>
      <>
        <br />
        <div style={{ marginTop: "9rem" }}>
        <div style={{ marginTop: "6rem" }}>
        <div className="mb-5">
          <h2 className="text-center">Top destinations</h2>
        </div>
        <div className="container-fluid d-flex overflow mt-3">
          <div className="m-5">
            <div className="roundede">
              <img
                src={Lucknow}
                alt=""
              />

            </div>
            <h5 className="text-center mt-2">Lucknow</h5>
          </div>
          <div className="m-5">
            <div className="roundede">
              <img
                src={srilanka}
                alt=""
              />
            </div>
            <h5 className="text-center mt-2">Srilanka</h5>
          </div>
          <div className="m-5">
            <div className="roundede">
              <img
                src={Hyderabad}
                alt=""
              />
            </div>
            <h5 className="text-center mt-2">Hyderabad</h5>
          </div>
          <div className="m-5">
            <div className="roundede">
              <img
                src={Shillong}
                alt=""
              />
            </div>
            <h5 className="text-center mt-2">Shillong</h5>
          </div>
          <div className="m-5">
            <div className="roundede">
              <img
                src={Coimbatore}
                alt=""
              />
            </div>
            <h5 className="text-center  mt-2"> Tamil Nadu</h5>
          </div>
          <div className="m-5">
            <div className="roundede">
              <img
                src={Gangtok}
                alt=""
              />
            </div>
            <h5 className="text-center mt-2">Gangtok</h5>
          </div>
          <div className="m-5">
            <div className="roundede">
              <img
                src={pushkar}
                alt=""
              />
            </div>
            <h5 className="text-center mt-2">pushkar</h5>
          </div>
          <div className="m-5">
            <div className="roundede">
              <img
                src={ladakh}
                alt=""
              />
            </div>
            <h5 className="text-center mt-2">ladakh</h5>
          </div>
        </div>
      </div>
          
          <br />
          <div className="container-f shadow p-3 mb-5 bg-body rounded">
          <HorizontalGallery
            tiles={next_plan.map((value) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: 300,
                  height: 500,
                }}
              >
                <div className="card rounded-5 "  style={{ width: "18rem" }} >
                  <div className="card-body">
                    <img className="card-img-top" src={value.img} alt="" />
                    <p className="card-text">{value.bus_type}</p>
                    <h3 className="card-title">{value.bus_name}</h3>
                    <small className="card-text d-flex justify-content-around">
                      <div>
                      {value.destination} 
                      </div>
                      <div>
                      To
                      </div>
                      <div>
                      {value.from_location}{" "}
                      </div>
                    </small>
                    <h6 className="mt-3">Type : {value.bus_seat_type}</h6>
                    <h6>₹ {value.bus_seat_price}/seate</h6>
                  </div>
                </div>
              </div>
            ))}
            elementWidth={350}
            minPadding={20}
          />
        </div>
          <div className="">
            <Offers></Offers>
          </div>
        </div>
      </>
    </div>
  );
}

export default Bus;
