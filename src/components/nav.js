import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../features/userSlice";
import FRP from '../images/frp.png'
import Language from './language'
export default function Nav({bg}){
    const user = useSelector((state) => getUser(state))
    console.log(user);
    return (
            <div className="asd" style={bg}>
                <div id="navbar">
                <div id="logo">
                <a href="/"><img id="frp" src={FRP} alt="FRP"/></a>
                </div>
                <nav>
                <Link to="/about">About us</Link>
                <Link to="/works">Our Works</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/map">Map</Link>

                {user ? <Link to="/profile">{user.organization}</Link> : <Link to="/login">Login</Link>}
                <Language/>
                </nav>
                </div>
                {bg ? <div></div> : <div id="landing-text">
                    <h1>Help Give Food Back</h1>
                    <h2 style={{fontSize: ".75vw"}}>The Food Reuse Project helps connect the gap between local community garderns with community kitchens to help reduce food waste.</h2>
                    <Link to="/signup"><button>Join Now</button></Link>
                </div>}
            </div>
    )
}