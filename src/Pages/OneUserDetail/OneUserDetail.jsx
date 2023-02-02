import React from 'react';
import Header from '../../Components/Header';
import UserSideBar from './components/UserSideBar'

function OneUserDetail() {
  return (
    <div>
        <div>
            <Header/>
        </div>
    
        <div className='dashboard'>
        <UserSideBar/>
        
        </div>
    </div>
  )
}

export default OneUserDetail