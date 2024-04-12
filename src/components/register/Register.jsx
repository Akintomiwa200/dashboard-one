import React, { useState } from 'react';
import './register.css';

const Register = ({ onRegister, onClose }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});

  function formHandler(e) {
    e.preventDefault();

    let errorObj = {};

    if (userName.trim() === '') {
      errorObj.userName = 'Name required';
    }
    if (email.trim() === '') {
      errorObj.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errorObj.email = 'Email invalid';
    }
    if (password.trim() === '') {
      errorObj.password = 'Password is required';
    } else if (password.length < 6) {
      errorObj.password = 'Password must be at least 6 characters long';
    }

    setError(errorObj);

    // If there are no errors, call onRegister function with user data
    if (Object.keys(errorObj).length === 0) {
      const userData = { userName, email, password };
      onRegister(userData);
    }
  }

  return (
    <div>
      <form onSubmit={formHandler}>
        <p>Kindly fill the form appropriately</p>
        <input
          type='text'
          placeholder='Name'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />{' '}
        <br />
        {error.userName && <div className='error-message'>{error.userName}</div>}
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{' '}
        <br />
        {error.email && <div className='error-message'>{error.email}</div>}
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{' '}
        <br />
        {error.password && <div className='error-message'>{error.password}</div>}
              <span>
                    <button type='submit'>✔</button>
                    <button onClick={onClose}>❌</button>
              </span>
      </form>
      
    </div>
  );
};

export default Register;
