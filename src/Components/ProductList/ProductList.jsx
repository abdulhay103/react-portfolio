import React from 'react'
import "./productList.css"
import Product from "../Product/Product"
import {products} from "../../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h2 className="pl-title">Create & Insipre. It's Abdul Hay.</h2>
                <p className="pl-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vel voluptatibus aspernatur optio delectus quam inventore veritatis! Ea, inventore id.</p>
            </div>
            <div className="pl-list">
            {products.map((items) =>(
                <Product key={items.id} img={items.url} title={items.title} link={items.link}/>
            ))}
            </div>
        </div>
    )
}

export default ProductList
