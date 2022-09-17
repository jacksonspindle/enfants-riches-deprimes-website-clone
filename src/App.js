import React, { useEffect } from 'react'
import { Route, Routes, useLocation, Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Products from './Products'
import { fetchProducts, addToCart } from './store'
import ProductPage from './ProductPage'
import Home from './Home'
import Legal from './Legal'
import Cart from './Cart'

const App = () => {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    useEffect(() => {
        dispatch(addToCart())
    }, [])

    return(
        <div>
            <nav className='nav'>
                <Link to='/'>
                    <img src='./assets/ERD_logo.png' className='logo'/>
                </Link>
                <Link to='/' className='nav-item'>SEARCH</Link>
                <Link to='/products' className='nav-item'>PRODUCTS</Link>
                <Link to='/cart' className='nav-item'>CART</Link>
            </nav>
            
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products:id' element={<ProductPage />} />
                <Route path='/cart' element={<Cart />} />

            </Routes>
            
            <Legal />
            
        </div>
    )
}


export default App