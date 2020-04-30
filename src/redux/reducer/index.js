import { combineReducers } from 'redux'
import globalReducer from './global_reducer.js'
import productReducer from './product_reducer.js'

export default combineReducers({
    globalReducer,
    productReducer
})