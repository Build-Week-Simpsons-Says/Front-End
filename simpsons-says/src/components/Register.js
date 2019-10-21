import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styling/Register.scss'

const Register = () => {

    const [newUserInfo, setNewUserInfo] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      })

      const handleChange = (e) => {
        setNewUserInfo({
          ...newUserInfo,
          [e.target.name]: e.target.value
        })
        console.log("new user info in handlechange", newUserInfo);
      }

    return (
      <div className="register-screen">
        <div className="register-form-container">

        <h1 >Simpsons Says</h1>

            {/* add onSubmit to form */}
          <form  className="register-form">

              <h2 className="register-form-title">Registration</h2>
              <input 
              onChange={handleChange}
              name="first_name"
              placeholder="First Name"
              type="text"  
              value = {newUserInfo.first_name}          
              required
              /> <br />
              <input 
              onChange={handleChange}
              name="last_name"
              placeholder="Last Name"
              type="text"   
              value = {newUserInfo.last_name}      
              required
              />     
              <br />
              <input 
              onChange={handleChange}
              name="email"
              placeholder="Desired Email"
              type="email"
            //   value = 
              required
              /><br />
              <input 
              onChange={handleChange}
              name="password"
              placeholder="Desired Password"
              type="password"
              value = {newUserInfo.email}
              required
              />
              <br />
            <button>Sign Up</button>
            <div className="login-description">
            <p>Already have an account? Login <Link to='/'>Here</Link></p>
          </div>
          </form>
         
          


        </div>
      </div>
    );
  }

  export default Register;