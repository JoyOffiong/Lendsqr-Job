import React from 'react'

function Right() {
  return (
    <div className='wrapper'>
    <div className='title'>
        <h3>Welcome Back</h3>
        <p>Enter Details to Login</p>
    </div>

    <form>
       <input type="text" placeholder='Username'/>
       <input type="email" placeholder='Email Address' />
    </form>

<div className='password'>
<a href="">FORGOT PASSWORD</a> 
</div>
 
<div className='buttonWrap'>
<button className='button'>LOG IN</button>
</div>
  

</div>
  )
}

export default Right