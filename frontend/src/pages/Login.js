

import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import '../Styles/Loginpage.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error } = useLogin();

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
    navigate('/');
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
        {error && <div className="error">{error}</div>}

        <button className="form--submit">Login</button>
        <p>
          Don't have account? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
