import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [firstName, setfName]=useState('');
  const [lastName, setlName]=useState('');
  const [email, setEmail] = useState('');
  const [phone, setPnumber] = useState('');
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');
  const [Cpassword, setCpassword] = useState('');
  const { signup, error, isLoading } = useSignup();

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    

    await signup(firstName, lastName, email, username, phone, password);
    navigate('/');
  };
  return (
    <div className="login-Container" onSubmit={handleSubmit}>
      <form className="login-form">
        <span className="signup">Signup</span>
        <input
          type="text"
          placeholder="First Name *"
          onChange={(e) => setfName(e.target.value)}
          value={firstName}
          className="form--input"
          required
        />
        <input
          type="text"
          placeholder="Last Name *"
          onChange={(e) => setlName(e.target.value)}
          value={lastName}
          className="form--input"
          required
        />
        <input
          type="email"
          placeholder="Email address *"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="form--input"
          required
        />
        <input
          type="text"
          placeholder="Phone Number *"
          onChange={(e) => setPnumber(e.target.value)}
          value={phone}
          className="form--input"
          required
        />
        <input
          type="text"
          placeholder="Username*"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="form--input"
          required
        />
        <input
          type="password"
          placeholder="Password *"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="form--input"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password *"
          onChange={(e) => setCpassword(e.target.value)}
          value={Cpassword}
          className="form--input"
          required
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
