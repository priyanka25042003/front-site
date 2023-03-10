import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./package.css";
import Offers from "../offers";
import state from "../../assert/state.json";

function Package() {
  const [autosagetion, setautosagetion]: any[] = useState([]);
  const [showautosagetion, setshowautosagetion]: any = useState(false);
  const [showautofrom, setshowautofrom]: any = useState(false);
  const [search, setsearch]: any = useState();
  function setserch(e: any) {
    let name = e.target.name;
    let value = e.target.value;
    setsearch({ ...search, [name]: value });
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
  let cityarr: any[] = [];
  let city = Object.values(state);
  city.forEach((i) => {
    i.forEach((city) => {
      cityarr.push(city);
    });
  });
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
  const navigate = useNavigate();
  function navigat() {
    navigate(
      "/listpackage/" + search.from + "/" + search.to + "/" + search.day
    );
  }
  return (
    <div>
      <div className="cg-image " style={{ width: "100rem" }}></div>
      <div className="m-1"></div>
      <div className=" hstack gap-3 bg-light text-dark d-flex justify-content-evenly shadow bg-body rounded rounded-pill algine">
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
      <div className="bggcolor">
        <div className="ml-5" style={{ marginTop: "6rem" }}>
          <h2 className=""> Plan your next staycation</h2>
        </div>
        <div className="card  rounded hocard" style={{ width: "18rem" }}>
          
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
        <div className="">
          <Offers></Offers>
        </div>
      </div>
    </div>
  );
}

export default Package;
