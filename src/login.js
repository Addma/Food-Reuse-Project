
import BG from './help';
import Nav from './nav';
import { Link } from 'react-router-dom';
import {useState} from 'react';
const Login = () => {

    const [username, setUser] = useState('');
    const [password, setPass] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
    }
    return (
        <div>
        <Nav bg={BG()}/>
        <form>
            <label htmlFor="username">Username:<input onChange={e => setUser(e.target.value)} id="username" value={username}/></label>
            <label htmlFor="password">Password:<input type="password" onChange={e => setPass(e.target.value)} id="password" value={password}/></label>
            <button type="submit" onSubmit={handleSubmit}>Login</button>
        </form>
        <p><button><Link to="/signup">Create Account</Link></button></p>
        </div>
    )
}
export default Login;