import BG from '../help';
import Nav from './nav';
import { Link } from 'react-router-dom';
import {useState, useRef, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../features/userSlice';
const Login = () => {
    const user = useSelector((state) => state.user.user)   
    console.log(user);
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const dispatch = useDispatch();
    const loginRef = useRef(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        loginRef.current.style.opacity = "0";
        const user = {email: email, password: password}
        try {
        const response = await fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        const data = await response.json();
        console.log("res", data);
         if (data.user){
             console.log(data);
            alert("Login successful");
            dispatch(login(data.user))
            window.location.href = '/dashboard'
        } else {
            if (data.message){
                alert(data.message);
            }else
            alert('Please check your email/password')
        }
    }catch(err) {
        console.log(err);
        alert("Something wrong happened... try again");
    }
        setEmail('');
        setPass('');
        loginRef.current.style.opacity = "1";
    }

    useEffect(() => {
        dispatch(logout())
    }, [])
    return (
        <div>
        <Nav bg={BG()}/> 
        <form onSubmit={handleSubmit}>
            <fieldset id="login-form">
            <h1>Login</h1>
            <label htmlFor="email">Email:<input onChange={e => setEmail(e.target.value)} id="email" value={email} placeholder="info@example.com"/></label>
            <label htmlFor="password">Password:<input type="password" onChange={e => setPass(e.target.value)} id="password" value={password}/></label>
            <button type="submit" ref={loginRef}>Login</button>
                    <p>Don't have an account? <Link to="/signup">Create Account</Link></p>

            </fieldset>
        </form>
        </div>
    )
}
export default Login;