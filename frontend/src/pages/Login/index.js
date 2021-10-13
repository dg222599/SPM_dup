import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import { useGlobalContext } from '../../context';
import './styles.css'

export default function Login(props) {
  const { setUser } = useGlobalContext();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.length <= 0) {
      NotificationManager.error('Email canno\'t be empty', 'Error', 2000, null, null);
      return;
    }
    if (password.length <= 0) {
      NotificationManager.error('Password canno\'t be empty', 'Error', 2000, null, null);
      return;
    }
    // TODO: replace with actual API calls
    // const user = callToAPI()
    const user = {
      id: 1,
      name: "abc",
    };
    setUser(user, () => history.push('/'));
  };

  return (
    <>
      <div className="login h-100 container">
        <div className="row mt-5 form-container">
          <h1 className="">Login</h1>
          <div className="form-field">
            <input type="email"
              placeholder="Username"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-field">
            <input type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="form-field">
            <p className="mt-2 px-1 w-100 d-flex flex-column flex-md-row
							justify-content-between align-items-center">
              <span>New user? <a href="/signup">Register</a></span>
              <a href="/forgot-password">Forgot password?</a>
            </p>
            <button className="btn login-btn text-uppercase"
              onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </>
  )
}
