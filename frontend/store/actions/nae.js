import axios from 'axios'

import * as types from '../types/naeTypes'

const makeAction = (action) => {
    return {
        type: action
    }
}
const makeActionPayload = (action, payload) => {
    return {
        type: action,
        payload
    }
}

export const newsUpload = () => {
    return dispatch => {
        dispatch(makeAction(types.NAE_UPLOAD_NEWS))
        
        axios({
            method: 'get',
            url: 'http://localhost:8000/api/nae/news/'
        })
            .then(r => {
                dispatch(makeActionPayload(types.NAE_SUCCESS_NEWS, r.data))
            })
            .catch(e => {
                dispatch(makeAction(types.NAE_FAIL_NEWS))
            }) 
    }
}
export const eventsUpload = () => {
    return dispatch => {
        dispatch(makeAction(types.NAE_UPLOAD_EVENTS))
        
        axios({
            method: 'get',
            url: 'http://localhost:8000/api/nae/events/'
        })
            .then(r => {
                dispatch(makeActionPayload(types.NAE_SUCCESS_EVENTS, r.data))
            })
            .catch(e => {
                dispatch(makeAction(types.NAE_FAIL_EVENTS))
            })
    }
}
