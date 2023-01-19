import React from 'react'
import Header from '../../Components/Header'
import Sidebar from './components/Sidebar'
import DashboardBody from './components/DashboardBody'

function Dashboard() {
  return (
    <div>
        <div>
            <Header/>
        </div>
    
        <div className='dashboard'>
        <Sidebar/>
        <DashboardBody/>
        </div>
    </div>
  )
}

export default Dashboard