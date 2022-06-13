import { useEffect, useState } from "react";


const Story = () => {
    const [size, setSize] = useState({});
    useEffect(() => {
        setSize({height: document.querySelector('.story2').clientWidth});
    }, [])
    return (
        <div id="story-land">
            <div className="story">
            <h1 style={{fontSize: "3vw"}}>Our Story.</h1>
            <h2>FRP was created during the York University C4 sprint in Summer 2022, to solve social problems while addressing the first
                Sustainable Develpoment goal created by the United Nation General Assembly. </h2>
            <h2>As part of C4, the Reuse group was assembled with students from diverse fields and background tasked with addressing
                such problems through the benefits of smart cities. Hence, FRP.
            </h2>
            </div>
            <div style={size} className="story2">
                <img src="" alt=""/>
            </div>
        </div>
    )
}
export default Story;