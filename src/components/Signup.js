import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../action/UserAction';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signin = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');  // Add phone state

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitSignup = (e) => {
    e.preventDefault();
    dispatch(signup(name, email, password, phone));  // Pass phone number in signup action
    navigate('/welcome');
  };

  return (
    <div className='sign-form'>
      <h2>Create Your Account</h2>
      <form onSubmit={submitSignup}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='browser-default'
          placeholder='Full Name'
          required
        />
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='browser-default'
          placeholder='Email address'
          required
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='browser-default'
          placeholder='Password'
          required
        />
        <input
          type='tel'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className='browser-default'
          placeholder='Phone number'
          required
        />
        <button className='sign-up-button'>Sign Up</button>
        <div className='divider'></div>
        <div>
          Already have an account?{' '}
          <button
            className='signup-link'
            onClick={() => navigate('/login')}
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
