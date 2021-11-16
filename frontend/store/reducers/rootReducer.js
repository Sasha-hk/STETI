import { combineReducers } from 'redux'
import naeReducer from './naeReducer'
import aboutReducer from './aboutReducer' 
import studyReducer from './studyReducer' 


const rootReducer = combineReducers({
    about: aboutReducer,
    news: naeReducer,
    study: studyReducer,
})


export default rootReducer
