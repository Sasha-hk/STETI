import { combineReducers } from 'redux'
import naeReducer from './naeReducer'


const rootReducer = combineReducers({
    news: naeReducer
})


export default rootReducer
