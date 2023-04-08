import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, error, isLoading } = useSignup();

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
    navigate('/');
  };
  return (
    <div className="login-Container" onSubmit={handleSubmit}>
      <form className="login-form">
        <span className="signup">Signup</span>
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

        <button className="form--submit">Signup</button>
        <p>
          Already have account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
