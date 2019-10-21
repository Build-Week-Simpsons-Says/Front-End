import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styling/Login.scss'

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

        <h1 className="login-form-title">Simpsons Says</h1>
        

        {/* add on submit for form */}
        <form  className="login-form">
            <h2>Login</h2>
          <input 
        //   onChange={handleChange}
          className="input-email"
          name="email"
          type="email"
          placeholder="Email"
          value = {loginCredentials.email}
          required
          /> <br />
          <input 
        //   onChange={handleChange}
          className="input-password"
          name="password"
          type="password"
          placeholder="Password"
          value = {loginCredentials.password}
          required
          /> <br />
          <button>Sign In</button>
          <div className="register-description">
          <p>Don't have an account? Sign Up <Link to='/register'>Here</Link></p>
        </div>
        </form>

        
        
      </div>
    </div>
  );
}

export default Login;