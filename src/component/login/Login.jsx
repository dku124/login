import React from 'react';
import { Container } from 'reactstrap';

import './login.css';

const Login = () => {
  return (
    <Container>
      <div className="login">
        <h1>Login</h1>
        <form action="">
          <div className="info">
            <label htmlFor="username">Name:</label>
            <input type="text" name="" id="username" />
          </div>
          <div className="info">
            <label htmlFor="pass">Password:</label>
            <input type="password" name="" id="pass" />
          </div>
          <button type="" className="btn">
            Submit
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
