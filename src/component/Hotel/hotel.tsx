  import React, { useEffect, useState } from "react";
import "./hotel.css";
import firebase from "firebase";
import HorizontalGallery from "react-dynamic-carousel";
import { useNavigate } from "react-router-dom";
import Offers from "../offers";
import state from "../../assert/state.json";
import gujrat from "../../assert/gujrat.jpg";
import naital  from "../../assert/nailtal.jpeg";
import uttarakhandp  from "../../assert/uttarakhandp.jpg";
import Kashmir  from "../../assert/Kashmir.jpg";
import Kerala  from "../../assert/Keralap.jpg";
import Ooty  from "../../assert/oty.jpeg";
import Kolkata  from "../../assert/kolkata.jpeg";
import Kochi  from "../../assert/kochi.jpeg";
import Swal from "sweetalert2";
import Hotelmodel from "../model/hotelmodel";





function Hotel() {
  const [next_plan, setnxtplan] = useState<any[]>([]);
  let array: string[] = [];
  const citys = Object.values(state);

  citys.forEach((element) => {
    element.forEach((element) => {
      array.push(element);
    });
  });

  useEffect(() => {
    getdata();
  }, []);

  function getdata() {
    let arr: any[] = [];
    firebase
      .database()
      .ref("/hotel")
      .get()
      .then((res) => {
        res.forEach((element) => {
          arr.push({ key: element.key, ...element.val() });
        });
        // setnxtplan(arr.slice(0, 4))
        setnxtplan(arr);
      })
      .catch((err) => {
        Swal.fire("Error",err.message,"error")
        Swal.fire("Error",err.message,"error")
      });
  }
  const [autosagetion, setautosagetion]: any[] = useState([]);
  const [showautosagetion, setshowautosagetion]: any = useState(false);
  const [search, setsearch]: any = useState()
  const [filterh, setfilterh]: any = useState([]);


  function setserch(e: any) {
    let name = e.target.name
    let value = e.target.value
    setsearch({ ...search, [name]: value })
  }
  const navigate = useNavigate();
  function filterDatah(e: any) {
    let name: any = e.target.name;
    let val: any = e.target.value;
    console.log({ ...filterh, [name]: val });
    setfilterh({ ...filterh, [name]: val });
    if (name === "From" || name === "To") {
      hendelautosagetion(e);
    }
  }
  function hendelautosagetion(e: any) {
    setshowautosagetion(true);
    let ar: any[] = [];
    array.forEach((element) => {
      const capitalized =
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
      if (element.startsWith(capitalized)) {
        ar.push(element);
      }
    });
    setautosagetion(ar);
  }

  window.onclick = () => {
    setshowautosagetion(false);
  };
  
  function select(params: any) {
    setfilterh({ From: params });
    setshowautosagetion(false);
  }
  function navigat() {
    navigate("/hotallist/" + filterh.From + "/" + search.chackin + "/" + search.chackout);
  }
  const [modelval, setmodelval]: any = useState();

  function openmodel(value:any){
    setmodelval(value)
  }
  function close() {
    setmodelval()
  }
  return (
    <div>
      <div className="bgg-image containerd">
        <div className="left">
          <h1 className="text-left text-light display-3">
            Find your next stay
          </h1>
          <h5 className="text-left text-light display-6">
            Get the best prices properties, INDIA
          </h5>
        </div>
      </div>

      <div className="m-1">
        <div className=" hstack gap-3 bg-light text-dark d-flex justify-content-evenly shadow bg-body rounded rounded-pill algin">
          <div className="w-25    bg-body rounded">
            <input
              type="text"
              name="From"
              onInput={(e) => filterDatah(e)}
              className="form-control"
              list="origin-options"
              id="origin-input"
              placeholder="Location"
              value={filterh.From}
              aria-describedby="origin-label"
            />
            {showautosagetion ? (
              <div className="autosagetion">
                {autosagetion.map((item: any) => {
                  return (
                    <div
                      onClick={() => select(item)}
                      className="list-item"
                    >openmodel
                      {item}
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}

          </div>
          <div>
            <div className="input-group input-daterange">
              <input type="date" className="form-control" aria-valuemin={Date.now()} onChange={(e) => setserch(e)} name="chackin" />
              <div className="input-group-addon mr-3 mt-1 ml-3">to</div>
              <input type="date" className="form-control" onChange={(e) => setserch(e)} name="chackout" />
            </div>
          </div>
          <div>
            <div className="form-inline m-2 my-lg-0">
              <button
                className="btn btn-outline-primary rounded-pill b my-2 my-sm-0" onClick={navigat}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "6rem" }}>
        <div className="mb-5">
          <h2 className="text-center">Top destinations</h2>
        </div>
        <div className="container-fluid d-flex overflow mt-3">
          <div className="m-5">
            <div className="roundede">
              <img
                src={gujrat}
                alt=""
              />

            </div>
            <h5 className="text-center mt-2">Gujarat</h5>
          </div>
          <div className="m-5">
            <div className="roundede">
              <img
                src={naital}
                alt=""
              />
            </div>
            <h5 className="text-center mt-2">Nailtal</h5>
          </div>
          <div className="m-5">
            <div className="roundede">
              <img
                src={uttarakhandp}
                alt=""
              />
            </div>
            <h5 className="text-center mt-2">uttarakhand</h5>
          </div>
          <div className="m-5">
            <div className="roundede">
              <img
                src={Kashmir}
                alt=""
              />
            </div>
            <h5 className="text-center mt-2">Kashmir</h5>
          </div>
          <div className="m-5">
            <div className="roundede">
              <img
                src={Kerala}
                alt=""
              />
            </div>
            <h5 className="text-center  mt-2">Kerala</h5>
          </div>
          <div className="m-5">
            <div className="roundede">
              <img
                src={Ooty}
                alt=""
              />
            </div>
            <h5 className="text-center mt-2">Ooty</h5>
          </div>
          <div className="m-5">
            <div className="roundede">
              <img
                src={Kolkata}
                alt=""
              />
            </div>
            <h5 className="text-center mt-2">Kolkata</h5>
          </div>
          <div className="m-5">
            <div className="roundede">
              <img
                src={Kochi}
                alt=""
              />
            </div>
            <h5 className="text-center mt-2">kochi</h5>
          </div>
        </div>
      </div>

      <div className="bgcolor">
        <div className="text-center" style={{ marginTop: "6rem" }}>
          <h2 className=""> Plan your next staycation</h2>
        </div>
        <div className="container-f shadow p-3 mb-5 bg-body rounded">
          <HorizontalGallery
            tiles={next_plan.map((value) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: 300,
                  height: 400,
                }}
              >
                <div className="card rounded-5 " onClick={() =>openmodel(value)}  style={{ width: "18rem" }} >
                  <div className="card-body">
                    <img className="card-img-top" src={value.img} style={{ width: "15rem" , height:"10rem"}} alt="" />
                    <p className="card-text">{value.hotel_type}</p>
                    <small className="card-text">
                      {value.state} / {value.city}{" "}
                    </small>
                    <h3 className="card-title">{value.hotel_name}</h3>
                    <hr />
                    <h6>From : {value.total_price} / night</h6>
                  </div>
                </div>
              </div>
            ))}
            elementWidth={350}
            minPadding={20}
          />
        </div>
      </div>
      
      <div className="" >
        <Offers></Offers>
      </div>
      {modelval?
        <Hotelmodel close={() =>
          close()
        } datasoure={modelval}></Hotelmodel>:""
      }
    </div>

  );
}

export default Hotel;
