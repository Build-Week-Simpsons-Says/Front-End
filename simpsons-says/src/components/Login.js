import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: '',
    password: ''
  });

//   const handleChange = (e) => {
//     setLoginCredentials({
//       ...loginCredentials,
//       [e.target.name]: e.target.value
//     })
//     console.log('login creds: ', loginCredentials)
//   }



  return (
    <div className="login-screen">

      <div className="login-form-container">

        <h2 className="login-form-title">Simpsons Says</h2>
        

        {/* add on submit for form */}
        <form  className="login-form">
          <input 
        //   onChange={handleChange}
          className="input-email"
          name="email"
          type="email"
          placeholder="Email"
          value = {loginCredentials.email}
          required
          />
          <input 
        //   onChange={handleChange}
          className="input-password"
          name="password"
          type="password"
          placeholder="Password"
          value = {loginCredentials.password}
          required
          />
          <button>Sign In</button>
        </form>

        <div className="register-description">
          <p>Don't have an account? Sign Up <Link to='/register'>Here</Link></p>
        </div>
        
      </div>
    </div>
  );
}

export default Login;