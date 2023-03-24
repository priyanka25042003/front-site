import React, { useState, useEffect } from "react";
import "./model.css";
import ac from "../../assert/air-conditioner-icon.png";
import { useNavigate } from "react-router";
import firebase from "firebase";


declare var Razorpay: any;

export default function Packagetmodel(props: any) {
  const [dataaa, setdata]: any = useState(props);
  const [localinfo, setlocalinfo]: any = useState([]);
  console.log(dataaa);
  
  const [book, setbook]: any = useState(false);
  const [tabIndex, settabIndex]: any = useState(0);
  const [seate, setseate]: any[] = useState([]);
  let data: any = {};

  const [userInfo, setUserInfo]: any[] = useState({
    name: " ",
    age: " ",
    idproof: " ",
    idproofNumber: " ",
  });
  const [info, setinfos]: any = useState({
    adults: 1,
    child: 0,
    infants: 0,
  });
  useEffect(() => {
    setlocalinfo(JSON.parse(localStorage.getItem("user") + ""));

  }, [])
  let navigate = useNavigate();
  let razorPayOptions: any = {
    key: "rzp_test_LwoStFwFdLyg9e",
    amount: "",
    name: "Tour&Travels Agency",
    order_id: "",
    description: "Load Wallet",
    image:
      "https://livestatic.novopay.in/resources/img/nodeapp/img/Logo_NP.jpg",
    prefill: {
      name: "Tour&Travels Agency",

      contact: "",
      method: "",
    },
    handler: (response: any) => {
      console.log(response);
      responhendel(response);
    },
    modal: {
      ondismiss: function () {
        if (window.confirm("Are you sure, you want to close the form?")) {
          let txt = "You pressed OK!";
          console.log("Checkout form closed by the user");
        } else {
          let txt = "You pressed Cancel!";
          console.log("Complete the Payment");
        }
      },
    },
    theme: {
      color: "#0096C5",
    },
  };
  function responhendel(res?: any): any {
    let paymentID = res
    if (paymentID) {
      data.paymentid =paymentID?.razorpay_payment_id
      booking(data)
    }
  }
  function setinfo(data: any) {
    let name: any = Object.keys(data);
    // {adults:1}
    // name = [adults] name[0] = adults
    // let qwee = daa
    // info[name] = data[name]
    // setinfos(info)
    setinfos({ ...info, [name[0]]: data[name[0]] });
    console.log(info);
  }
  function booking(item: any) {
    // data.item = item;

    firebase
      .database()
      .ref("/booking")
      .push(item)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function next() {
    if (tabIndex == 0) {
      if (
        userInfo.name &&
        userInfo.age &&
        userInfo.idproof &&
        userInfo.idproofNumber
      ) {
        settabIndex(1);
      }
    } else if (tabIndex == 1 && seate.length > 0) {
      settabIndex(2);
    } else if (tabIndex == 2) {
      Object.assign(data,userInfo,seate,info,book)

      console.log(data);
      let total_set: any;
      let prise: any;
      total_set =
            data.adults + data.child + data.infants;
          prise = data.bus_seat_price;
          proceed(total_set * prise);
    }
  }
  function sendData(sate: any) {
    console.log(sate);
    setseate(sate);
  }
  function setuserinfo(event: any) {
    let name: any = event.target.name;
    let value: any = event.target.value;
    setUserInfo({ ...userInfo, [name]: value });
    console.log(userInfo);
  }
  function proceed(amount: any) {
    razorPayOptions.amount = amount* 100
    var rzp1 = new Razorpay(razorPayOptions);
    rzp1.open();
    responhendel(razorPayOptions.handler)
  }
  function close() {
    props.close();
  }
  return (
    <>
      <div className="">
        <div
          id="myModal"
          className="modal d-block "
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content modal-ku">
              <div className="modal-header">
                <h3 className=" ml-5 text-muted">
                  {dataaa.datasoure.package_name}
                </h3>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  onClick={close}
                  aria-hidden="true"
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-8">
                    <div className="d-flex justify-content-center">
                      <img
                        className="w-75 h-25"
                        width={500}
                        src={dataaa.datasoure.img}
                        alt=""
                      />
                    </div>
                    <div className="container ml-5">
                      <p className="mt-3 text-muted">
                        {dataaa.datasoure.package_type}{" "}
                      </p>
                      <div className=" mt-4  d-flex">
                        <p className="font-weight-bold"> city : </p>{" "}
                        {dataaa.datasoure.city}
                        <div className="ml-5">
                          { dataaa.datasoure.city ? <img width={40} src={ac} alt="" /> :""}
                        </div>
                        <div className="ml-5">
                        <i className="fa fa-wifi fa-2x" aria-hidden="true"></i>
                        </div>
                        
                      </div>
                      <div className="border rounded shadow p-3">
                        <h5 className="text-muted mb-4">Description:-</h5>
                        {dataaa.datasoure.description}
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="d-flex justify-content-center mt-5">
                      <div className="mt-0 shadow w-75 ">
                        <div className="text-center mt-3">
                          <h3>₹ {dataaa.datasoure.total_price} </h3>{" "}
                          <p>Per seate</p>
                        </div>
                        <div className="d-flex justify-content-center mt-5 mb-4">
                          <div className=" w-75">
                            <button className="btn btn-lg w-100 btn-success p-2" onClick={() =>
                              localinfo ? setbook(dataaa.datasoure) : navigate("/singin")
                            }>
                              Book Package
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                      <div className="holli_right_other w-75">
                        <h3 className="nh_color fs_18">Feel free to call us</h3>
                        <p className="mb-3 mt-3 pb-2 border-bottom"></p>
                        <span className="d-block fs-12">
                          {" "}
                          <b style={{ marginBottom: " 10px" }}>
                            Toll Free No. :<br />{" "}
                          </b>{" "}
                          <span>1800-532-3636 </span>,{" "}
                          <span>1800-212-0136</span> <br />
                          <br />
                          <b style={{ marginBottom: " 5px" }}>
                            24/7 Service . : <br />{" "}
                          </b>
                          <span style={{ marginBottom: " 5px" }}>
                            +91 98163-48636
                          </span>
                          ,
                          <span style={{ marginBottom: " 5px" }}>
                            {" "}
                            +91 88263-03636
                          </span>
                        </span>
                        <span className="d-block fs-12">
                          {" "}
                          <br />
                          <b>Mail Us : </b> help@bharatbooking.com
                        </span>
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn" data-dismiss="modal" aria-hidden="true">
                  Close
                </button>
                <button className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 mt-3 ml-4 "></div>


    </>
  );
}
