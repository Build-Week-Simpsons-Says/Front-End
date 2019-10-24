import React from 'react'

const ProfileCard = props => {
    return(
        <div className='profile-container'>
            <h2>{props.username}</h2>
            <h3>{props.primaryemail}</h3>
        </div>
    )
}

export default ProfileCard;