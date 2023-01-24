import React from 'react'

function UserSideBar() {
  return (
    <div className="sidebar">

      
<p><img src={briefcase} alt="" /> <span className="organization">Switch Organization </span> </p>      
       <p> <img src={dashboard} alt=""/> <span>Dashboard</span> </p>      
       
    

      <div className="section">
      <h4>CUSTOMERS</h4>

      <p> <img src={users} alt=""/>
      <Link  to={'/users'}>Users</Link></p>
      <p> <img src={Guarantors} alt=""/> <span>Guarantors</span> </p> 
      <p> <img src={loans} alt=""/> <span>Loans</span> </p> 
      <p> <img src={decision} alt=""/> <span>Decision Models</span> </p> 
      <p> <img src={savings} alt=""/> <span>Savings</span> </p> 
      <p> <img src={loanRequest} alt=""/> <span>Loan Request</span> </p> 
      <p> <img src={whiteList} alt=""/> <span>White List</span> </p> 
      <span> <img src={karma} alt=""/> <span>Karma</span> </span> 
      </div>

      <div className="section">
        <h4>BUSINESSES</h4>
        <p> <img src={loanRequest} alt=""/> <span>Loan Products</span> </p>
        <p> <img src={savingsProducts} alt=""/> <span>Savings Products</span> </p> 
        <p> <img src={coins} alt=""/> <span>Fees and Charges</span> </p> 
        <p> <img src={transactions} alt=""/> <span>Transactions</span> </p> 
        <p> <img src={services} alt=""/> <span>Services</span> </p> 
     
      <p>Service Account</p>
      <p> <img src={settlement} alt=""/> <span>Settlements</span> </p>  
      <span> <img src={report} alt=""/> <span>Reports</span> </span> 
       </div>

       <div className="section">
          <h4> SETTINGS</h4>
        <p> <img src={preferences} alt=""/> <span>Preferences</span> </p> 
        <p> <img src={feesandpricing} alt=""/> <span>Fees and Pricing</span> </p> 
        <p> <img src={audit} alt=""/> <span>Audit Logs</span> </p> 
        <p> <img src={audit} alt=""/> <span>System Messages</span> </p> 

       </div>

       <div className='section'>
        <p>LogOut</p>
       </div>
    </div>
  );
}

export default UserSideBar