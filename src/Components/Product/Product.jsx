import React from 'react'
import "./product.css"

const Product = ({img, link, title}) => {
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} className="link" target="_blank" rel="noreferrer">
                <img src={img} alt="img" className="p-img" />
            </a>
        </div>
    )
}

export default Product
