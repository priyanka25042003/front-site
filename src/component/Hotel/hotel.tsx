import React, { useEffect, useState } from "react";
import "./hotel.css";
import firebase from "firebase";
import HorizontalGallery from "react-dynamic-carousel";
import { useNavigate } from "react-router-dom";
import Offers from "../offers";
import state from "../../assert/state.json";






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
        console.log(err);
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

  function navigat() {
    navigate("/hotallist/" + search.citys + "/" + search.chackin + "/" + search.chackout + "/" + search.search);
  }

  function select(params: any) {
    setfilterh({ From: params });
    setshowautosagetion(false);
  }
  return (
    <div>
      <div className="bgg-image containerd">
        <div className="centered">
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
              onInput={(e) => setsearch(e)}
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
          <div>
            <div className="input-group input-daterange">
              <input type="date" className="form-control" aria-valuemin={Date.now()} onChange={(e) => setserch(e)} name="chackin" />
              <div className="input-group-addon m-1">to</div>
              <input type="date" className="form-control" onChange={(e) => setserch(e)} name="chackout" />
            </div>
          </div>
          <div>
            <div className="form-inline m-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="search"
                onChange={(e) => setserch(e)}
              />
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
                src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg"
                alt=""
              />

            </div>
            <h5 className="text-center mt-2">cityname</h5>
          </div>
          <div className="m-5">
            <div className="roundede">
              <img
                src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg"
                alt=""
              />
            </div>
            <h5 className="text-center mt-2">cityname</h5>
          </div>
          <div className="m-5">
            <div className="roundede">
              <img
                src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg"
                alt=""
              />
            </div>
            <h5 className="text-center mt-2">cityname</h5>
          </div>
          <div className="m-5">
            <div className="roundede">
              <img
                src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg"
                alt=""
              />
            </div>
            <h5 className="text-center mt-2">cityname</h5>
          </div>
          <div className="m-5">
            <div className="roundede">
              <img
                src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg"
                alt=""
              />
            </div>
            <h5 className="text-center  mt-2">cityname</h5>
          </div>
          <div className="m-5">
            <div className="roundede">
              <img
                src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg"
                alt=""
              />
            </div>
            <h5 className="text-center mt-2">cityname</h5>
          </div>
          <div className="m-5">
            <div className="roundede">
              <img
                src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg"
                alt=""
              />
            </div>
            <h5 className="text-center mt-2">cityname</h5>
          </div>
          <div className="m-5">
            <div className="roundede">
              <img
                src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg"
                alt=""
              />
            </div>
            <h5 className="text-center mt-2">cityname</h5>
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
                <div className="card rounded-5 " style={{ width: "18rem" }} >
                  <div className="card-body">
                    <img className="card-img-top" src={value.img} alt="" />
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
      <div className="bgcolor">
        <div className="ml-5" style={{ marginTop: "6rem" }}>
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
                  height: 400 ,
                }}
              >
                <div className="card rounded-5 " style={{ width: "18rem" }}>
                  <div className="card-body">
                    <img className="card-img-top" src={value.img} alt="" />
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
            // fadeDistance={100}
            minPadding={20}
          />
        </div>
      </div>
      <div className="" >
        <Offers></Offers>
      </div>
    </div>
  );
}

export default Hotel;
