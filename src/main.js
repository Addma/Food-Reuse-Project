import React from "react";
import Nav from'./nav';
import Account from './profile'
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
        <div>
            <h1>Hi</h1>
            <Nav/>
            <Account profile={profile} foods={foods}/>
        </div>

    )
}
export default Main;