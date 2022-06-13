import React from "react";
import Nav from './nav';
import BG from '../help';
import {useState, useEffect} from 'react';
const Contact = () => {
    const [size, setSize] = useState({});
    useEffect(() => {
        setSize({height: document.querySelector('.contact1 div').clientWidth})
    }, [])
return (
    <div id="contact-frp">
            <div className="contact1">
            <h1>Contact Us</h1>
            <div style={size}></div>
            </div>
        <div className="contact2">
            <p>Have questions about the FRP project?</p>
            <p><b>For general inquiries,</b> please contact us at info.frp@gmail.com</p>
            <p><b>Food assistance,</b> To find your nearest food bank, check out our map page to get in touch
                with the person you need.
            </p>
            <p><b>To make a financial donation</b> or questions about your gift, please contact __</p>
            <p>If you have any suggestions about the website, please contact us at info.frp@gmail.com</p>
        </div>
    </div>
)

}
export default Contact;