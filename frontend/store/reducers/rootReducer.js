import { combineReducers } from 'redux'
import naeReducer from './naeReducer'
import aboutReducer from './aboutReducer' 


const rootReducer = combineReducers({
    news: naeReducer,
    about: aboutReducer,
})


export default rootReducer
