import thunk from "redux-thunk";
import logger from "redux-logger";
import axios from "axios";
import { createStore, combineReducers, applyMiddleware } from "redux";

const products = (state = [], action) => {
    if (action.type === 'SET_PRODUCTS'){
        return action.products
    }
    if (action.type === 'ADD_TO_CART'){
        return [...state, action.products ]
    }
    return state
}

const reducer = combineReducers({ products })

const store = createStore(reducer, applyMiddleware(thunk, logger))


export const fetchProducts = () => {
    return async(dispatch) => {
        const response = await axios.get('/api/products')
        dispatch({ type: 'SET_PRODUCTS', products: response.data})
    }
}

export const addToCart = (products) => {
    return async(dispatch) => {
        const response = await axios.put('/api/products', products.inCart = !products.inCart)
        dispatch({ type: 'Add_TO_CART', products: response.data})
    }
}

export default store