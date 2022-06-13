import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getUser } from '../features/userSlice';
import { Link } from 'react-router-dom';
import { logout } from '../features/userSlice';
const Dashboard = () => {
    const user = useSelector((state) => getUser(state));
    const dispatch = useDispatch();
    useEffect(()=> {
        console.log(user);
    }, [])
    const handleLogout = (e) => {
        dispatch(state => logout(state));
        window.location.href="/login"
    }
    return (
        <div id="dashboard">
            <h1>Hello world!</h1>
            {user ? <h1>LOGGED IN</h1> : <h1>WHY RU HERE</h1>}
            <Link to="/profile">Profile</Link>
            <p onClick={handleLogout}>Logout</p>
        </div>
    )
}
export default Dashboard;