import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductPage from './ProductPage'
import App from './App'

const Products = () => {
    const { products } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div>
            <ul className='image-container'>
                {products.map(product => {
                    return (
                        <div >
                            <Link to={`/products:${product.id}`} className='nav-item'>
                                <img src={`./assets/product_images/${product.image}`} className='product-image' />
                            </Link>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Products