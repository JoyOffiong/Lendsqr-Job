import React from 'react';
import UsersInfo from './UsersInfo';
import UsersDetails from '../../Users/UsersDetails'

export default function DashboardBody() {
  return (
    <div className='dashboardbody'>
        <UsersInfo/>
        <UsersDetails/>
    </div>
  )
}

