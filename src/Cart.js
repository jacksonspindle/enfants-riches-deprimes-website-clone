import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


const Cart = () => {

    const { products } = useSelector(state => state)
    const dispatch = useDispatch()

    const cartedProducts = products.filter(product => product.inCart === true)

    return (
        <div >
            <ul className='cart-container'>
                {cartedProducts.map(product => {
                    return (
                        <div>
                                <div className='cart-product'>
                                    <img src={`./assets/product_images/${product.image}`} />
                                    <div>                            
                                        <li> {product.name}</li>
                                        <p className='cart-product-price'>PRICE: $ {product.price}</p>
                                    </div>
                                </div>
                        </div>
                    )
                })}
            {cartedProducts.length === 0 ? <div>
                <div className='cart-empty-text-container'>
                    <h1 className='cart-empty-text'>your cart is empty... <Link to="/products" > shop now </Link></h1>
                </div>
            </div> : ''}
            <h1>Total: $ {cartedProducts.reduce((prevVal, curVal) => {
                return prevVal + curVal.price
            },0)}</h1>
            <button className='checkout-button'>CHECK OUT</button>

            </ul>
        </div>
    )
}

export default Cart