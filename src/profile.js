import React from 'react';


const Profile = ({profile, foods}) => {
    return (
    <div id="profile">
        <h1>Profile</h1>
        <p>{profile.name}</p>
        <div id="foods">
        {foods.map((e, i)=> <p key={i}>{e}</p>)}
        </div>
    </div>
    )
}
const Prof = () => {
    return (
        <h1>Profile</h1>
    )
}
export default Profile;