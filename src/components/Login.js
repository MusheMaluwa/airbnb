import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../action/UserAction';
import { openModal } from '../action/ModalAction';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error: userLoginError } = userLogin;

  useEffect(() => {
    if (userInfo) {
      dispatch(openModal('closed', '')); // Close the modal on successful login
      navigate('/dashboard');  // Redirect to dashboard or another page
    }

    if (userLoginError) {
      setError(userLoginError);
    }
  }, [userInfo, userLoginError, dispatch, navigate]);

  const submitLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const redirectToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="login-form">
      <h2>Log in or Sign up</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={submitLogin}>
        <button className="facebook-login">Connect with Facebook</button>
        <button className="google-login">Connect with Google</button>
        <div className="login-or center">
          <span>or</span>
          <div className="or-divider"></div>
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="browser-default"
          placeholder="Email address"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="browser-default"
          placeholder="Password"
        />
        <button className="sign-up-button" type="submit">
          {loading ? 'Loading...' : 'Login'}
        </button>
        <div className="divider"></div>
        <div>
          Don't have an account?{' '}
          <button className="signup-link" onClick={redirectToSignup}>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
