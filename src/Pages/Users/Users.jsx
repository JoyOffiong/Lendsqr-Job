import React from 'react'
import Header from '../../Components/Header'
import Sidebar from '../Dashboard/components/Sidebar'
import UsersInfo from '../Dashboard/components/UsersInfo'
import UsersDashboard from './userDashboard'

function Users() {
  return (
    <div>
        <div>
            <Header/>
        </div>
    
        <div className='dashboard'>
        <Sidebar/>

        <div className='dashboardbody'>
        <UsersInfo/>
        <UsersDashboard/>
    </div>
        </div>
    </div>
  )
}

export default Users