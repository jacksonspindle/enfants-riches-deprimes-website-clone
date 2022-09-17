import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, fetchProducts } from './store'

const ProductPage = () => {
    const { products } = useSelector(state => state)
    const dispatch = useDispatch()
    const { id } = useParams();

    const product = products.find(product => product.id === id.slice(1));

    const _addToCart = async() => {
        try {
            dispatch(addToCart(product))
        } catch (ex) {
            console.log(ex)
        }
    }

    return (
        <div>
            <ul>
                {
                !!product && 
                    <div className='product-container'>
                        <img src={`./assets/product_images/${product.image}`} />
                        <div className='product-info-container'>
                            <h1>{product.name}</h1>
                            <p>${product.price}</p>
                            <p>{product.description}</p>
                            <form>
                            <label for='select'></label>
                            <select name='SELECT SIZE' id='select'>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>
                            </form>
                            <button onClick={_addToCart}>ADD TO CART</button>
                        </div>
                    </div>
                }
            </ul>
        </div>
    )
}

export default ProductPage