import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../action/UserAction';
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userSignup = useSelector((state) => state.userSignup);
  const { loading, error, success } = userSignup;

  useEffect(() => {
    if (success) {
      navigate('/login');
    }
  }, [success, navigate]);

  const submitSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    dispatch(signup(name, email, password));
  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      {error && <h2>{error}</h2>}
      {loading && <h2>Loading...</h2>}
      <form onSubmit={submitSignup}>
        <button className="facebook-signup">Connect with Facebook</button>
        <button className="google-signup">Connect with Google</button>
        <div className="signup-or center">
          <span>or</span>
          <div className="or-divider"></div>
        </div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="browser-default"
          placeholder="Full Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="browser-default"
          placeholder="Email Address"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="browser-default"
          placeholder="Password"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="browser-default"
          placeholder="Confirm Password"
        />
        <button className="sign-up-button">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
