import React from "react";
import { Link } from "react-router-dom";


export default function Nav(){
    return (
        <nav>
            <ul>
                <Link to="/about"><li>About</li></Link>
                <Link to="/"><li>Home</li></Link>
            </ul>
        </nav>
    )
}