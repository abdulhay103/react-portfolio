import React from 'react'
import "./about.css"
import UxUi from "../../Img/UX.jpg"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg">Card1</div>
                <div className="a-card">
                    <div className="a-img">
                        <img src={UxUi} alt="UxUi" />
                    </div>
                </div>
            </div>
            <div className="a-right">Right Side</div>
        </div>
    )
}

export default About
