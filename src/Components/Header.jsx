import React from 'react';
import Logo from '../../src/assets/Group (1).png';
import user from '../../src/assets/image 4.png';
import {FaSearch} from 'react-icons/fa'
import {BsBell} from 'react-icons/bs'
 import {BiCaretDown} from 'react-icons/bi';
 import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='header'>

     <div className='logo'>
      <Link to={'/dashboard'}><img src={Logo} alt="" /></Link>
        
     </div>

     <div className='inputBox'>
        <input type="search" name="" placeholder="search for anything" />
        <div  className='search'>
        <FaSearch/>
        </div>
        
     </div>

     <div className='user'>
        <a href="">Docs</a>
        <BsBell/>

        <div className='userInfo'>
        <img  src={user} alt="" />
      <p>Adedeji</p>
        <BiCaretDown/>
        </div>
       
     </div>

    </div>
  )
}

export default Header