import React, { useEffect, useState } from 'react'
import firebase from 'firebase';
import { useParams } from 'react-router-dom';

function Listpackage() {
  const [maindata, setmaindata]: any[] = useState([])
  const { from, to, day } = useParams();
  const [filter ,setfilter]:any = useState([])
useEffect(() => {
  getdata()
}, [])

function filterD(e:any){
  let name:any = e.target.name
  let val:any = e.target.value
  setfilter({...filter ,[name]:val})
  console.log(filter);

}
function submit(){
  console.log(filter);
}  

  function getdata() {
    let arr: any[] = [];
    let filter: any[] = []
    firebase
      .database()
      .ref("/package")
      .get()
      .then((res) => {
        res.forEach((element) => {
          arr.push({ key: element.key, ...element.val() });
        });
        setmaindata(arr);
        console.log(arr);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Filter
        </button>

        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">package Filter</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">

                <div className="">
                  <h5 className="">Locations</h5>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="mb-2">
                        <label id="origin-label" htmlFor="origin-input" className="form-label">From</label                    >
                        <div className="input-group">
                          <span className="input-group-text"><i className="bi-pin-map"></i> </span>
                          <input
                            type="text"
                            name="From"
                            onChange={(e)=>filterD(e)}
                            className="form-control"
                            list="origin-options"
                            id="origin-input"
                            placeholder="Location"
                            aria-describedby="origin-label"
                          />
                          <datalist id="origin-options"></datalist>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm">
                      <div className="mb-2">
                        <label id="destination-label" htmlFor="destination-input" className="form-label">To</label                     >
                        <div className="input-group">
                          <span className="input-group-text"><i className="bi-pin-map-fill"></i> </span>
                          <input
                            type="text"
                            name="To"
                            onChange={(e)=>filterD(e)}
                            className="form-control"
                            list="destination-options"
                            id="destination-input"
                            placeholder="Location"
                            aria-describedby="destination-label"

                          />
                          <datalist id="destination-options"></datalist>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-2 col-sm-12">
                    <div className="h-100 "><br />
                      <div className="card-body">
                        <h5 className="card-title">Dates</h5>
                        <div id="departure-date" className="mb-2">
                          <label id="departure-date-label" htmlFor="departure-date-input" className="form-label"
                          >strating date</label                   >
                          <div className="input-group">
                            <span className="input-group-text"><i className="bi-calendar"></i></span>
                            <input
                              type="date"
                              name="Departure Data"
                            onChange={(e)=>filterD(e)}
                              className="form-control"
                              id="departure-date-input"
                              aria-describedby="departure-date-label"
                            />
                          </div>
                        </div>
                        <div id="return-date" className="mb-2">
                          <label id="return-date-label" htmlFor="return-date-input" className="form-label">Ending date</label>
                          <div className="input-group">
                            <span className="input-group-text"><i className="bi-calendar-fill"></i> </span>
                            <input
                              type="date"
                              name="Return Data"
                              onChange={(e)=>filterD(e)}
                              className="form-control"
                              id="return-date-input"
                              aria-describedby="return-date-label"
                            />
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={submit}>Save changes</button>
              </div>
            </div>
          </div>
        </div>

      </div>

    <div className='mt-5  h-100  rounded shadow-lg'>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col"> <small><b>Sorted By:</b></small>  </th>
            <th scope="col"><small>packagename</small></th>
            <th scope="col"><small>From</small></th>
            <th scope="col"><small>to</small></th>
            <th scope="col"><small>Strating date</small></th>
            <th scope="col"><small>Ending date</small></th>
            <th scope="col"><small> totalprice</small></th>
          </tr>
        </thead>
        <tbody>
          {maindata.map((item: any, index: any) => {

            return (
              <tr key={index}>
                <td><img src={item!.img} alt="" width={40} />AirIndia
                </td>
                <td>{item.package_name}</td>
                <td>{item.from_location}</td>
                <td>{item.to_location}</td>
                <td>{item.strating_date}</td>
                  <td>{item.endind_date}</td>
                <td>{item.total_price}</td>
              </tr>
            )
          })
          }

        </tbody>
      </table>
    </div>
    </div>






  )
}

export default Listpackage