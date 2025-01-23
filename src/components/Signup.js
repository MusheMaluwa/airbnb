import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signin = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');  // State to handle error messages

  const navigate = useNavigate();

  const submitSignup = async (e) => {
    e.preventDefault();

    // Prepare the data for the backend
    const userData = {
      name,
      email,
      password,
      phone
    };

    try {
      const response = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        // Signup successful, redirect to login page
        navigate('/');
      } else {
        // Handle error (e.g., email already exists)
        setError(data.error);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="sign-form">
      <h2>Create Your Account</h2>
      <form onSubmit={submitSignup}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="browser-default"
          placeholder="Full Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="browser-default"
          placeholder="Email address"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="browser-default"
          placeholder="Password"
          required
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="browser-default"
          placeholder="Phone number"
          required
        />
        <button className="sign-up-button">Sign Up</button>
        {error && <p className="error-message">{error}</p>}
        <div className="divider"></div>
        <div>
          Already have an account?{' '}
          <button
            type="button"
            className="signup-link"
            onClick={() => navigate('/')}
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
