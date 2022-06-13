import React from "react";
import BG from '../help';
import York from '../images/york.png';
import C4 from '../images/frp-c4.png';
import IBM from '../images/ibm.png';
import CCLA from '../images/CCLA.png';
import {useEffect, useState} from 'react';

const About = () => {
    const [size, setSize] = useState({});

    useEffect(() => {
        setSize({height: document.querySelector('.who-img').clientWidth})
    }, [])
return (
    <div id="who-frp">
        <div className="who-flex">
        <div className="who-info">
            <h1>Who we are.</h1>
            <p>To tackle to the issue of proverty with the SDG 1 in mind, the reuse group created the Food Reuse Project. 
                To help solve these problems, C4 partnered with IBM and CCLA. </p>
            <p>The group is composed of the members Adam Araujo, Seung Hyun Kim, Ahmed, Sathini De Silva, Jaishri, Sonya, Colin, Honey, Ayesha, Soo and Umar. </p>
        </div>
        <div className="who-img" style={size}>
            <img src="" alt=""/>
        </div>
        </div>
    <div className="who-partner">
        <div>
            <h1>Partnered with:</h1>
        </div>
        <div className="who-partner-imgs">
        <div style={{backgroundImage: `url(${York})`}}></div>
        <div style={{backgroundImage: `url(${C4})`}}></div>
        <div style={{backgroundImage: `url(${IBM})`}}></div>
        <div style={{backgroundImage: `url(${CCLA})`}}></div>
        </div>
    </div>
    </div>
)

}
export default About;