import React from 'react'
import Profile from '../styling/Profile.scss'
import donuticon from '../Images/donuticon.png'

const ProfileCard = props => {
    return(
        <div className='profile-container'>
            <div className='profilecard'>
            <img src={donuticon}/>
            <h3>Username: <span className='username'>{props.username}</span></h3>
            <h3>Email: <span>{props.primaryemail}</span></h3>
            </div>
        </div>
    )
}

export default ProfileCard;