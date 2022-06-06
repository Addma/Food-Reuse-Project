import React from "react";
import Nav from '../nav';
import BG from '../help';
import York from '../images/york.png';
const About = () => {

return (
    <div id="who-frp">
        <div className="who-flex">
        <div className="who-info">
            <h1>Who we are.</h1>
            <p>To tackle to the issue of proverty with the SDG 1 in mind, the reuse group created the Food Reuse Project. 
                To help solve these problems, C4 partnered with IBM and CCLA. </p>
            <p>The group is composed of the members Adam Araujo, Seung Hyun Kim, Ahmed, Sathini De Silva, Jaishri, Sonya, Colin, Honey, Ayesha, Soo and Umar. </p>
        </div>
        <div className="who-img">
            <img src="" alt=""/>
        </div>
        </div>
    <div className="who-partner">
        <div id="who-flex2">
                    <h2>Partnered with:</h2>
        <div className="who-imgs">
            <div className="who-york"></div>
                        <div className="who-york"></div>

            <div className="who-york"></div>

            <div className="who-york"></div>
        </div>
        </div>

    </div>
    </div>
)

}
export default About;