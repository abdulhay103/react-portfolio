import React from 'react'
import "./toggle.css"
import Sun from "../../Img/sun.png"
import Moon from "../../Img/moon.png"
import Phone from "../../Img/phone.png"

const Toggle = () => {
    return (
        <div className="t">
            <img src={Sun} alt="" className="t-img" />
            <img src={Moon} alt="" className="t-img" />
            <img src={Phone} alt="" className="t-img" />
        </div>
    )
}

export default Toggle
