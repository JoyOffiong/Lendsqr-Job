import React from 'react';
import loginImg from '../../../assets/pablo-sign-in 1.jpg'
import Logo from '../../../assets/Group (1).png'

function Left() {
  return (
    <div className='sideWrap'>

      <div className='Logo'>
      <img src={Logo} alt="Logo" />
      </div>
       

        <div className='loginImg'>
            <img 
            // width='300px'
            // height='1000px'
            src={loginImg} alt="" />
        </div>
    </div>
  )
}

export default Left
