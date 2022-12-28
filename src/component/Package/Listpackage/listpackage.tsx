import React, { useEffect, useState } from 'react'
import firebase from 'firebase';
import { useParams } from 'react-router-dom';

function Listpackage() {
  const [maindata, setmaindata]: any[] = useState([])
  const { from, to, day } = useParams();
useEffect(() => {
  getdata()
}, [])

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





  )
}

export default Listpackage