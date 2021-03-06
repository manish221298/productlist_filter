import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from 'redux-thunk'
import productReducer  from '../reducer/productReducer'


const reduxStore = () => {
    const store = createStore(combineReducers({
        products: productReducer,
    }), applyMiddleware(thunk))
    return store
}

export default reduxStore