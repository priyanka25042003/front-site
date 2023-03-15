import React from 'react'
import { useParams } from 'react-router-dom'

export default function Hotelview() {
    let {id} = useParams()
  return (
    <div>hotel.view:<p>{id}</p>


    </div>
    
  )
}
