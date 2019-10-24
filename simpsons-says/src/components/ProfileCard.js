import React from 'react'
import Profile from '../styling/Profile.scss'
import donuticon from '../Images/donuticon.png'

const ProfileCard = props => {
    return(
        <div className='profile-container'>
            <div className='profilecard'>
            <img src={donuticon}/>
            <h2>{props.username}</h2>
            <h3>{props.primaryemail}</h3>
            </div>
        </div>
    )
}

export default ProfileCard;