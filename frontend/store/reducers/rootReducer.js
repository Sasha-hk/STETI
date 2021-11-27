import { combineReducers } from 'redux'
import naeReducer from './naeReducer'
import aboutReducer from './aboutReducer' 
import studyReducer from './studyReducer' 
import cyclicCommissionReducer from './cyclicCommissionReducer'


const rootReducer = combineReducers({
    about: aboutReducer,
    news: naeReducer,
    study: studyReducer,
    cyclicCommission: cyclicCommissionReducer,
})


export default rootReducer
