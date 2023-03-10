import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Offers from "../offers";
import "./flight.css"
import airport from "../../assert/airport.json";
import HorizontalGallery from "react-dynamic-carousel";
import firebase from "firebase";

function Flight() {
    console.log(airport.airports);

    function setserch(e: any) {
        let name = e.target.name
        let value = e.target.value
        setsearch({ ...search, [name]: value })
        console.log(search);

    }
    const navigate = useNavigate();
    function navigat() {
        navigate("/listflight/" + search.From + "/" + search.To + "/" + search.day);
    }
    const [autosagetion, setautosagetion]: any[] = useState([]);
    const [showautosagetion, setshowautosagetion]: any = useState(false);
    const [showautofrom, setshowautofrom]: any = useState(false);

    const [search, setsearch]: any = useState()
    const [next_plan, setnxtplan] = useState<any[]>([]);
    const [filterh, setfilterh]: any = useState([]);

    function filterDatah(e: any) {
        let name: any = e.target.name;
        let val: any = e.target.value;
        console.log({ ...filterh, [name]: val });
        setsearch({ ...search, [name]: val });
        if (name === "From") {
            hendelautosagetion(e);
        } else {
            hendelautosfrom(e)
        }
    }
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
    function hendelautosagetion(e: any) {
        setshowautosagetion(true);
        let ar: any[] = [];
        airport.airports.forEach((element: any) => {
            console.log(element["airport_name"]);

            const capitalized =
                e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
            console.log(capitalized);

            if (element["airport_name"].startsWith(capitalized)) {
                ar.push(element);
            }
        });
        setautosagetion(ar);

    }
    function hendelautosfrom(e: any) {
        setshowautofrom(true);
        let ar: any[] = [];
        airport.airports.forEach((element: any) => {
            console.log(element["airport_name"]);

            const capitalized =
                e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
            console.log(capitalized);

            if (element["airport_name"].startsWith(capitalized)) {
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
        console.log(search);


    }


    return (
        <div>
            <div className="bg-image containerd">
            </div>
            <div className="m-1">
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
                                                onClick={() => select(item.airport_name, "From")}
                                                className="list-items"
                                            >
                                                {item.airport_name}
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
                    <div className="w-25    bg-body rounded" >
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
                                                onClick={() => select(item.airport_name, "to")}
                                                className="list-items"
                                            >
                                                {item.airport_name}
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
                <br />
                <div className="mb-3 mt-5 ">
                    <h2 className="text-center " >Destination</h2>
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
            </div>

            <div className="" >
                <Offers></Offers>
            </div>

        </div >




    )
}

export default Flight;

