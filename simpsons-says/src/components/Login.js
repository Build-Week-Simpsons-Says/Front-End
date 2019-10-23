import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styling/Login.scss'
import { axiosLoginAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {

  state = {
    credentials: {
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  login = e => {
    e.preventDefault();
    axiosLoginAuth()
      .post(
        "/login",
        `grant_type=password&username=${this.state.credentials.username}&password=${this.state.credentials.password}`,
        this.state.credentials
      )
      .then(res => {
        
        console.log(res.data);
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/home");
      })
      .catch(err => console.log(err));
  };

  render(){
  return (
    <div className="login-screen">

      <div className="login-form-container">

        <h1 className="login-form-title">Simpsons Says</h1>
        

        {/* add on submit for form */}
        <form className="login-form">
            <h2>Login</h2>
          <input 
          onChange={this.handleChange}
          className="input-username"
          name="username"
          type="username"
          placeholder="Username"
          value = {this.state.credentials.username}
          required
          /> <br />
          <input 
          onChange={this.handleChange}
          className="input-password"
          name="password"
          type="password"
          placeholder="Password"
          value = {this.state.credentials.password}
          required
          /> <br />
          <button onClick={this.login}>Sign In</button>
          <div className="register-description">
          <p>Don't have an account? Sign Up <Link to='/register'>Here</Link></p>
        </div>
        </form>

        
        
      </div>
    </div>
  );
  }
}

export default Login;