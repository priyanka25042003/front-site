import "./flight.css"


function Flight() {
    return (
     <div>
        <div className="bg-image containerd">     
       </div>
        <div className='m-1'>
        <div className=' hstack gap-3 bg-light text-dark d-flex justify-content-evenly shadow bg-body rounded rounded-pill algin'  >
        <div className="entry">
            <button className="btn-entry" type="button">One-way</button>
            <button className="btn-entry" type="button">Round-trip</button>
        <button className="btn-entry" type="button">Multi-city</button>
        </div>
        
        </div>
    </div>
    </div>

       
     
    )
}

export default Flight;

