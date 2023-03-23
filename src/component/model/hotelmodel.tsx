import React, { useState, useEffect } from "react";
import "./model.css";
export default function Hotelmodel(props: any) {
  const [data, setdata]: any = useState(props);
  console.log(data);

  function close() {
    props.close()
  }
  return (
    <>

      <div className="">
        <div id="myModal" className="modal d-block " tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content  modal-ku">
              <div className="modal-header">
                <h3 id="myModalLabel">Modal header</h3>
                <button type="button" className="close" data-dismiss="modal" onClick={close} aria-hidden="true">×</button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="d-flex justify-content-center">
                    <img className="h-50 w-50" src={data.datasoure.img} alt="" />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                <button className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}