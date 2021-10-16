import React from 'react'
import "./intro.css"
import Me from "../../Img/me1.png"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wraper">
                    <h2 className="i-intro">Hello! My name is </h2>
                    <h1 className="i-name">Abdul Hay</h1>
                    <div className="i-items">
                        <div className="i-items-wraper">
                            <div className="i-item">Web Developer</div>
                            <div className="i-item">UX/UI Designer</div>
                            <div className="i-item">Degital Marketer</div>
                            <div className="i-item">Market Analyzer</div>
                            <div className="i-item">Content Creator</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I design and develop services for customer of all sizes, spesializing in creating stylish, mordern websites, web services & online store.
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="Me" className="i-img" />
            </div>
        </div>
    )
}

export default Intro
