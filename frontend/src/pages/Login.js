import React from 'react'
import '../Styles/login.css'
const Login = () => {
  return (
    <div id='header'>
      <h3><b>Login</b> or <b>Signup</b></h3>
      <form> 
        
        <input type='text' name='pNumber' placeholder='+91 | Mobile Number *' required></input>
        <h6>By continuing, I agree to the<br></br> <b className='terms'>Terms of Use </b>&<b className='terms'> Privacy Policy</b></h6>
        <button type="submit" class="btn btn2">CONTINUE</button>
        <h6>Have trouble logging in? <b className='terms'>Get help</b></h6>
      </form>
    </div>
  )
}

export default Login