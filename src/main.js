import React from "react";
import Nav from'./components/nav';
import About from './landing/about';
import How from './landing/howworks';
import Involved from './landing/difference';
import Who from './landing/who';
import Story from './landing/story';
import Contact from './components/contact';
const Main = () => {
    return (
        <div id="landing">
            <Nav />
            <About/>
            <How />
            <Who />
            <Story />
            <Involved />
            <Contact />
        </div>

    )
}
export default Main;