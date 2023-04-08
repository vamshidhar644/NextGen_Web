// import React from 'react'
// import '../Styles/login.css'
// const Login = () => {
//   return (
//     <div id='header'>
//       <h3><b>Login</b> or <b>Signup</b></h3>
//       <form>

//         <input type='text' name='pNumber' placeholder='+91 | Mobile Number *' required></input>
//         <h6>By continuing, I agree to the<br></br> <b className='terms'>Terms of Use </b>&<b className='terms'> Privacy Policy</b></h6>
//         <button type="submit" class="btn btn2">CONTINUE</button>
//         <h6>Have trouble logging in? <b className='terms'>Get help</b></h6>
//       </form>
//     </div>
//   )
// }

// export default Login

import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import '../Styles/Loginpage.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };
  return (
    <div className="login-Container" onSubmit={handleSubmit}>
      <form className="login-form">
        <span className="signup">Login</span>
        <input
          type="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="form--input"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="form--input"
        />

        <button className="form--submit">Login</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
