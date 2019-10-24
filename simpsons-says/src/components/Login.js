import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styling/Login.scss'
import axios from 'axios'

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
    
    axios.post('https://simpsonsays.herokuapp.com/login', `grant_type=password&username=${this.state.credentials.username}&password=${this.state.credentials.password}`, {

      headers: {

        // btoa is converting our client id/client secret into base64
        Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
        'Content-Type': 'application/x-www-form-urlencoded'

      }

    })
      .then(res => {

        localStorage.setItem('token', res.data.access_token);
        this.props.history.push('/profile');

      })
      .catch(err => console.dir(err));

    e.preventDefault();

  }


  render(){
  return (
    <div className="login-screen">

      <div className="login-form-container">
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