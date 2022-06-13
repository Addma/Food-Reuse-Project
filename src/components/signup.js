import React from 'react';
import { useState } from "react"
import BG from '../help';
import Nav from './nav';
import { Link } from 'react-router-dom';
const SignUp = () => {

    const [pass, setPass] = useState('');
    const [email, setMail] = useState('');
    const [account, setAccount] = useState('grower');// Grower if true, Kitchen if not.
    const [address, setAddress] = useState('');
    const [org, setOrg] = useState('');
    const [pass2, setPass2] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (pass !== pass2){
        alert("Passwords don't match")
        setPass('');
        setPass2('');
            return;
        }

        let newUser = {
            organization: org,
            email: email,
            password: pass,
            account: account,
            address: address
        }
        const res = await fetch("http://localhost:3001/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser)
        })
        const data = await res.json();
        if (data.status === "ok"){
            alert("You have been signed up. Redirecting to login...");
            window.location.href= "/login";
        } else {
            alert("You already have an acount with this e-mail.");
        }
        setPass('');
        setMail('');
        setAccount('');
        setAddress('');
        setOrg('');
    }
    return (
        <div>
            <Nav bg={BG()}/>
        <div >
        <form onSubmit={handleSubmit}>
            <fieldset id="signup-form">
                <h1>Sign up</h1>
                <label htmlFor='signup-org'>Garden/Kitchen Name:<input onChange={e => setOrg(e.target.value)} value={org} id="signup-org"/></label>
                <label htmlFor="signup-email">E-mail:<input value={email} onChange={e => setMail(e.target.value)} id="signup-email" placeholder="name@example.com"></input></label>
                <label htmlFor="signup-password">Password:<input type="password" value={pass} onChange={e => setPass(e.target.value)} id="signup-password" placeholder="Password"></input></label>
                <label htmlFor="signup-password2">Re-enter Password:<input type="password" value={pass2} onChange={e => setPass2(e.target.value)} id="signup-password2" placeholder="Password"></input></label>    
                <label htmlFor="signup-address">Address of Community Garden/Kitchen:<input value={address} onChange={e => setAddress(e.target.value)} id="signup-address" placeholder=""></input></label>
                <label htmlFor="account" id="account-label">I am a... <input name="account" type="radio" value="grower" onChange={e => setAccount(e.target.value)} checked={account === 'grower'} />Grower
                <input type="radio" name="account" value="kitchen" onChange={e => setAccount(e.target.value)} checked={account === 'kitchen'}/> Kitchen
                </label>
                <button type="submit">Sign-up</button>
                <p>Have an account? <Link to="/login">Login</Link></p>
            </fieldset>
        </form>
        </div>
        </div>
    )

}
export default SignUp;