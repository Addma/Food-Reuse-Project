import React from 'react';
import { useState } from "react"

const SignUp = () => {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [email, setMail] = useState('');
    const [account, setAccount] = useState('grower');// Grower if true, Kitchen if not.
    const [address, setAddress] = useState('');
    const [style, setStyle] = useState({ backgroundColor: "purple"});
    console.log(account);
    const handleChange = (e) => {
        setAccount(e.target.value)
    }
    return (
        <form>
            <fieldset>
                <label htmlFor="signup-username">Username:<input value={user} onChange={e => setUser(e.target.value)} id="signup-username" placeholder="Username"></input></label>
                <label htmlFor="signup-password">Password:<input value={user} onChange={e => setPass(e.target.value)} id="signup-password" placeholder="Password"></input></label>
                <label htmlFor="signup-email">E-mail:<input value={email} onChange={e => setMail(e.target.value)} id="signup-email" placeholder="name@example.com"></input></label>
                <label htmlFor="signup-address">Address:<input value={user} onChange={e => setAddress(e.target.value)} id="signup-address" placeholder=""></input></label>
                <label>I am a... <input name="account" type="radio" value="grower" onChange={handleChange} checked={account === 'grower'} />Grower
                <input type="radio" name="account" value="kitchen" onChange={handleChange} checked={account === 'kitchen'}/> Kitchen
                </label>
            </fieldset>
        </form>
    )

}
export default SignUp;