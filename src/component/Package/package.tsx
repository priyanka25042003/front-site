import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./package.css";
import Offers from "../offers";
import state from "../../assert/state.json";
import HorizontalGallery from "react-dynamic-carousel";
import firebase from "firebase";
import imgnotfound from "../../assert/img_notF.jpg";

function Package() {
  const [maindata, setmaindata]: any[] = useState([]);

  const [autosagetion, setautosagetion]: any[] = useState([]);
  const [showautosagetion, setshowautosagetion]: any = useState(false);
  const [showautofrom, setshowautofrom]: any = useState(false);
  const [search, setsearch]: any = useState();
  function setserch(e: any) {
    let name = e.target.name;
    let value = e.target.value;
    setsearch({ ...search, [name]: value });
  }
  useEffect(() => {
    getdata();
  }, []);
  function filterDatah(e: any) {
    let name: any = e.target.name;
    let val: any = e.target.value;
    // // console.log({ ...filterh, [name]: val });
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
  function getdata() {
    let arr: any[] = [];
    let filter: any[] = [];
    firebase
      .database()
      .ref("/package")
      .get()
      .then((res) => {
        res.forEach((element) => {
          arr.push({ key: element.key, ...element.val() });
        });
        // console.log(arr);

        // arr.forEach((element) => {
        //   if (element.from_location == from && element.to_location == to) {
        //     filter.push(element);
        //   }
        // });
        if (filter.length != -1) {
          setmaindata(filter);
        } else {
          setmaindata(arr);
        }
        console.log(maindata);
        setmaindata(arr);
        
        console.log(arr);
      })
      .catch((err) => {
        // console.log(err);
      });
  }
  function hendelautosagetion(e: any) {
    setshowautosagetion(true);
    let ar: any[] = [];
    cityarr.forEach((element: any) => {
      // // console.log(element);

      const capitalized =
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
      // // console.log(capitalized);

      if (element.startsWith(capitalized)) {
        ar.push(element);
        // console.log(ar);
      }
    });
    setautosagetion(ar);
  }
  function hendelautosfrom(e: any) {
    setshowautofrom(true);
    let ar: any[] = [];
    cityarr.forEach((element: any) => {
      // // console.log(element);

      const capitalized =
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
      // // console.log(capitalized);

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
    // // console.log(search);
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
        <div className="container shadow p-3 mb-5 bg-body rounded">
        <HorizontalGallery
            tiles={maindata.map((value: any) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: 300,
                  height: 500,
                }}
              >
                <div className="card rounded-5 " style={{ width: "18rem" }}>
                  <div className="card-body">
                    <img className="card-img-top" src={value.img ? value.img : imgnotfound} alt={value.img ? value.img : imgnotfound} />
                    <h3 className="card-title">{value.package_name}</h3>
                    <div className="card-text">
                      <div className="d-flex justify-content-between">
                        <p>{value.to_location}</p>
                      </div>
                      <div className="m-1">
                      {value.details}
                    </div>
                      <div className="d-flex justify-content-between">
                        <p>{value.strating_date}</p>
                        <p>{value.endind_date}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="float-right mt-3">
                      Price:<b> {value.total_price}</b>
                      </h5>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            ))}
            elementWidth={350}
            minPadding={2}
          />
          </div>
        <div className="">
          <Offers></Offers>
        </div>
      </div>
    </div>
  );
}

export default Package;
