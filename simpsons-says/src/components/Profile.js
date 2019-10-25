import React, { useState, useEffect } from "react"
import ProfileCard from "./ProfileCard"
import QuoteList from "./QuoteList"
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
            <QuoteList />
            <div>
                <ProfileCard
                    username={userInfo.username}
                    primaryemail={userInfo.primaryemail}
                />
            </div>
        </>
    )
}

export default Profile
