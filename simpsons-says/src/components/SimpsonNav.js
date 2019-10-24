import React from "react"
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import simpsonstv from '../Images/simpsonstv.png'
import donuticon from '../Images/donuticon.png'

const NavBar = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
padding:0 10px;
align-items: center;
background-color: #FED90F;
height: 50px;
color: #c96b00;
box-shadow: 0 0 3px #333;
margin-bottom: 40px;
img{
    width:30px;
}
b{
    color: #EB589D;
    text-shadow: 2px 3px 2px #000000;
}
img {
    filter: drop-shadow(2px 2px 1px rgba(0,0,0,1));
    margin-right: 5px;
    
  }
`
const Links = styled.div`
width: 50%;
display: flex;
justify-content: space-around;
align-items: center;
img{
    width: 30px;
    margin-right: 5px;
    filter: drop-shadow(0px 0px 2px rgba(0,0,0,.8));
}
a{
    color:#fff;
  font-size: 2rem;
  font-weight:bold;
  transition: color 0.2s linear;
  -webkit-transition: color 0.2s linear;
  -moz-transition: color 0.2s linear;
  filter: drop-shadow(0 0 1px rgba(0,0,0,.8));
}
a:hover{
    color: #EB589D;
    text-decoration:none;
    filter: drop-shadow(0 0 1px rgba(0,0,0,.3));
}
`
const HeaderText = styled.h1`
`


function SimpsonNav() {
    return (
        <NavBar>
            <div className='logo'>
                <HeaderText>
                    <img src={simpsonstv} />
                    <b>Simpsons Says</b>
                </HeaderText>
            </div>
            <Links>
                <a href=''><img src={donuticon}/>Home</a>
                <a href=''><img src={donuticon}/>About Us</a>
                <NavLink to='/quotes'><img src={donuticon}/>Quotes</NavLink>
                <NavLink to='/profile'><img src={donuticon}/>Profile</NavLink>
                <NavLink to='/login'><img src={donuticon}/>Login</NavLink>
                <NavLink to='/register'><img src={donuticon}/>Register</NavLink>
            </Links>
        </NavBar>
    )
}
export default SimpsonNav
