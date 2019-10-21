import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

        <h2 className="register-form-title">Simpsons Says Registration</h2>

            {/* add onSubmit to form */}
          <form  className="register-form">


              <input 
              onChange={handleChange}
              name="first_name"
              placeholder="First Name"
              type="text"  
              value = {newUserInfo.first_name}          
              required
              />
              <input 
              onChange={handleChange}
              name="last_name"
              placeholder="Last Name"
              type="text"   
              value = {newUserInfo.last_name}      
              required
              />     

              <input 
              onChange={handleChange}
              name="email"
              placeholder="Desired Email"
              type="email"
            //   value = 
              required
              />
              <input 
              onChange={handleChange}
              name="password"
              placeholder="Desired Password"
              type="password"
              value = {newUserInfo.email}
              required
              />

            <button>Sign Up</button>
          </form>

          <div className="login-description">
            <p>Already have an account? Login <Link to='/'>Here</Link></p>
          </div>


        </div>
      </div>
    );
  }

  export default Register;