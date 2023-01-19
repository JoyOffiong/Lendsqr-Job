import React from 'react'
import karma from '../../../assets/karma.png'
import whitelist from '../../../assets/whitelist.png'
import {BsEye} from 'react-icons/bs'

function ViewDetailsModal() {
  return (
    <div className='viewDetails'>
        <p> <BsEye/> <span>View Details</span> </p>
        <p> <img src={karma} alt="" />   <span>BlackList Member</span> </p>
        <p> <img src={whitelist} alt="" /> <span>Shortlist</span></p>
    </div>
  )
}

export default ViewDetailsModal