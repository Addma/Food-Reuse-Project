import React from "react";
import Nav from'./nav';
import Account from './profile'
import Image from './images/frp-landing.webp';
import About from './landing/about';
import How from './landing/howworks';
import Involved from './landing/involved';
import Who from './landing/who';
import Story from './landing/story';
const Main = () => {
let profile = {
    name: "105 Gibson Community Center",
    address: "2040 Don Mills Road",
    contact: {
        phone: "416-441-9678",
        name: "Adam Araujo",
        email: "adam.araujo7@Hotmail.com",

    }
}
let foods = ['Apple', 'Chicken', 'Meat']
    return (
        <div id="landing">
           
            <Nav/>
            <About/>
            <How />
            <Who />
            <Story />
            <Involved />
            <Account profile={profile} foods={foods}/>
        </div>

    )
}
export default Main;