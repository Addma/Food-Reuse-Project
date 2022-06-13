import React from "react";
import Nav from '../components/nav';
import BG from '../help';
import {ReactComponent as Donate} from '../images/donate.svg';
import {ReactComponent as Volunteer} from '../images/volunteer.svg';
import {ReactComponent as Money} from '../images/money.svg';
const About = () => {

return (
    <div id="involved-frp">
        <h1>
            How to make a difference
        </h1>
        <div id="diff-wrapper">
            <div className="diff1">
                <div></div>
                <h1>Food donation</h1>
                <h2>Community Centre and Foodbank</h2>
            </div>
            <div className="diff2">
                <div></div>
                <h1>Donate Funds</h1>
                <div>Resources</div>
                <h2>Find out various sources</h2>
                <div>Maps and Contacts</div>
                <h2>Find out the locations and contacts for burning questions</h2>
            </div>
            <div className="diff3">
                <div></div>
                <h1>Volunteering</h1>
                <div>Maps and Contacts</div>
                <h2>Find out the community centres and food banks that are looking for volunteers</h2>
            </div>
        </div>
    </div>
)

}
export default About;