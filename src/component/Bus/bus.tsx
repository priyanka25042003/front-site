import React, { useState } from "react";
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
          <div className="mb-5" mt-5>
            <h2 className="text-center">Popular Destination</h2>
          </div>
          <div className="containerr-fluid d-flex overfloww mt-3">
            <div className="m-5">
              <div className="roundedee">
                <img
                  // src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg"
                  src="https://q-xx.bstatic.com/xdata/images/city/250x250/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
                  alt=""
                />
              </div>
              <h5 className="text-center mt-2">Mumbai</h5>
            </div>
            <div className="m-5">
              <div className="roundedee">
                <img
                  src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg"
                  alt=""
                />
              </div>
              <h5 className="text-center mt-2">Punjab</h5>
            </div>
            <div className="m-5">
              <div className="roundedee">
                <img
                  src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg"
                  alt=""
                />
              </div>
              <h5 className="text-center mt-2">Rajsthan</h5>
            </div>
            <div className="m-5">
              <div className="roundedee">
                <img
                  src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg"
                  alt=""
                />
              </div>
              <h5 className="text-center mt-2">Delhi</h5>
            </div>
            <div className="m-5">
              <div className="roundedee">
                <img
                  src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg"
                  alt=""
                />
              </div>
              <h5 className="text-center  mt-2">Surat</h5>
            </div>
            <div className="m-5">
              <div className="roundedee">
                <img
                  src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg"
                  alt=""
                />
              </div>
              <h5 className="text-center mt-2">Rajkot</h5>
            </div>
            <div className="m-5">
              <div className="roundedee">
                <img
                  src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg"
                  alt=""
                />
              </div>
              <h5 className="text-center mt-2">Ahmedabad</h5>
            </div>
            <div className="m-5">
              <div className="roundedee">
                <img
                  src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg"
                  alt=""
                />
              </div>
              <h5 className="text-center mt-2">Veraval</h5>
            </div>
          </div>
          <br />
          <div className="">
            <Offers></Offers>
          </div>
        </div>
      </>
    </div>
  );
}

export default Bus;
