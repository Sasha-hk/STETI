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
export const newsUpload = () => {
    return dispatch => {
        dispatch(makeAction(types.NAE_UPLOAD_NEWS))
        
        axios({
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
export const newsUploadDetails = (slug) => {
    return dispatch => {
        dispatch(makeAction(types.NAE_UPLOAD_NEWS_DETAILS)) 
        axios({
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
export const eventsUpload = () => {
    return dispatch => {
        dispatch(makeAction(types.NAE_UPLOAD_EVENTS))
        
        axios({
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
export const eventsUploadDetails = (slug) => {
    return dispatch => {
        dispatch(makeAction(types.NAE_UPLOAD_EVENTS_DETAILS))
        
        axios({
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
