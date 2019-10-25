import React, { useState, useEffect } from "react"
import ProfileCard from "./ProfileCard"
import TestSearch from './TestSearch'
import axios from "axios"

const Profile = () => {
    const [userInfo, setUserInfo] = useState({})

    // console.log('state',userInfo)

    useEffect(() => {
        axios
            .get("https://simpsonsays.herokuapp.com/users/getuserinfo", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then(res => setUserInfo(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            
            <div>
                <ProfileCard
                    username={userInfo.username}
                    primaryemail={userInfo.primaryemail}
                />
                <TestSearch />
            </div>
        </>
    )
}

export default Profile
