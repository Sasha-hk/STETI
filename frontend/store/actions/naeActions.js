import axios from 'axios'

import * as types from '../types/naeTypes'
import { API_URL_NEWS, API_URL_EVENTS } from '../../config/APIUrls'
import { combineUrl } from '../../config/utils'


const makeAction = (action) => {
    return {
        type: action
    }
}
const makeActionWithPayload = (action, payload) => {
    return {
        type: action,
        payload
    }
}

// urload news
export const uploadNews = () => {
    return async dispatch => {
        dispatch(makeAction(types.NAE_UPLOAD_NEWS))

        await axios({
            method: 'get',
            url: API_URL_NEWS
        })
        .then(r => {
                dispatch(makeActionWithPayload(types.NAE_SUCCESS_NEWS, r.data))
            })
            .catch(e => {
                dispatch(makeAction(types.NAE_FAIL_NEWS))
            }) 
    }
}

// urload news details
export const uploadNewsDetails = (slug) => {
    return async dispatch => {
        dispatch(makeAction(types.NAE_UPLOAD_NEWS_DETAILS)) 
        await axios({
            method: 'get',
            url: combineUrl({baseUrl: API_URL_NEWS, parts: [slug]})
        })  
            .then(r => {
                dispatch(makeActionWithPayload(types.NAE_SUCCESS_NEWS_DETAILS, r.data))
            })
            .catch(e => {
                dispatch(makeAction(types.NAE_FAIL_NEWS_DETAILS))
            }) 
    }
}

// urload events
export const uploadEvents = () => {
    return async dispatch => {
        dispatch(makeAction(types.NAE_UPLOAD_EVENTS))
        
        await axios({
            method: 'get',
            url: API_URL_EVENTS
        })
            .then(r => {
                dispatch(makeActionWithPayload(types.NAE_SUCCESS_EVENTS, r.data))
            })
            .catch(e => {
                dispatch(makeAction(types.NAE_FAIL_EVENTS))
            })
    }
}

// urload events details
export const uploadEventsDetails = (slug) => {
    return async dispatch => {
        dispatch(makeAction(types.NAE_UPLOAD_EVENTS_DETAILS))
        
        await axios({
            method: 'get',
            url: combineUrl({baseUrl: API_URL_EVENTS, parts: [slug]}),
        })
            .then(r => {
                dispatch(makeActionWithPayload(types.NAE_SUCCESS_EVENTS_DETAILS, r.data))
            })
            .catch(e => {
                dispatch(makeAction(types.NAE_FAIL_EVENTS_DETAILS))
            }) 
    }
}
