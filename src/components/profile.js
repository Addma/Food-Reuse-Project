import React, { useEffect, useState } from 'react';
import { getUser } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../features/userSlice';
import Nav from './nav';
import bg from '../help';
import FRP from '../images/frp.png'
const Profile = () => {
    const user = useSelector((state) => getUser(state));
    const dispatch = useDispatch();
    const [foodsState, setfoodState] = useState([]);
    useEffect(() => {
        console.log(user);
        const foodEles = user.foods.map((food, i) => {
            return (
                <div>
                    <img src={food.image} alt={food.label}/>
                    <p>{food.label}</p>
                </div>
            )
        })
        setfoodState(foodEles);
        }, [])
    const [foodSearch, setFoodSearch] = useState('');
    const handleFoodSearch = async () => {
        console.log(foodSearch);
        const res = await fetch('http://localhost:3001/profile/addFood',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: user,
                food: foodSearch
            })
        })
        const response = await res.json();
        if (response.status === "ok") {
            dispatch(login(response.data));
        }else {
            alert(response.message);
        }
    }
    return (
        <div id="profile-cols">
            <Nav bg={bg()}/>
    <div id="profile">
        <div id="profile-info">
            <img src={user.image ? user.image : FRP} alt="profile"/>
                <div className='profile-data'>
                    <h1>{user.organization}</h1>
                    <p>{user.address}</p>
                    <p>{user.number ? user.number : "Add a number"}</p>
                    <p>{user.description ? user.description : "Add a description"}</p>
                </div>
        </div>
        <div style={{margin: "auto", width: "75%", height: "10px", backgroundColor: "grey", borderRadius: "25%"}}></div>
        <div id="foods">
            <div className='food-toolbar'>
                <h1>{user.foods ? "My foods" : "You have no foods listed yet..."}</h1> 
                <div>
                    <input type="search" value={foodSearch} onChange={e => setFoodSearch(e.target.value)} placeholder='apple...'/>
                    <button onClick={handleFoodSearch}>Add</button>
                </div>
            </div>
            {foodsState}
        </div>
    </div>
    </div>
    )
}
export default Profile;