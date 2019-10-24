import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styling/Register.scss'

const Register = (props) => {

    const [newUserInfo, setNewUserInfo] = useState({
        username: '',
        password: '',
        primaryemail: ''
      })

      const handleChange = (e) => {
        setNewUserInfo({
          ...newUserInfo,
          [e.target.name]: e.target.value
        })
        console.log("new user info in handlechange", newUserInfo);
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://simpsonsays.herokuapp.com/createnewuser', newUserInfo)    
          .then(res => {
            // localStorage.setItem('userId', res.data.id);
            console.log("registered response", res);
            props.history.push("/login");
          })
          .catch(err => {
            console.log(err.response);
          })
      }
    

    return (
      <div className="register-screen">
        <div className="register-form-container">


            {/* add onSubmit to form */}
          <form  onSubmit={handleSubmit} className="register-form">

              <h2 className="register-form-title">Registration</h2>
              <input 
              onChange={handleChange}
              name="username"
              placeholder="Username"
              type="text"  
              value = {newUserInfo.username}          
              required
              /> <br />
              <input 
              onChange={handleChange}
              name="password"
              placeholder="Desired Password"
              type="password"
              value = {newUserInfo.password}
              required
              />
              <br />
              <input 
              onChange={handleChange}
              name="primaryemail"
              placeholder="Primary Email"
              type="primaryemail"
              value = {newUserInfo.primaryemail}
              required
              />
              <br />
            <button>Sign Up</button>
            <div className="login-description">
            <p>Already have an account? Login <Link to='/login'>Here</Link></p>
          </div>
          </form>
         
          


        </div>
      </div>
    );
  }

  export default Register;