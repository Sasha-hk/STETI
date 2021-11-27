import axios from 'axios'

import * as types from '../types/cyclicCommissionTypes'
import { 
    API_URL_CYCLIC_COMMISSION,
} from '../../config/APIUrls'

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


// upload cyclic commission
export const uploadCyclicCommission = () => {
    return async dispatch => {
        console.log(1)
        dispatch(makeAction(types.CYCLIC_COMMISISON_UPLOAD))
        console.log(2)
        await axios({
            method: 'get',
            url: API_URL_CYCLIC_COMMISSION
        })
        .then(r => {
                console.log(3)
                dispatch(makeActionWithPayload(types.CYCLIC_COMMISISON_SUCCESS, r.data))
                console.log(3.1)
            })
            .catch(e => {
                console.log(4)
                dispatch(makeAction(types.CYCLIC_COMMISISON_FAIL))
            }) 
    }
}

// upload cyclic commission details
export const uploadCyclicCommissionDetails = (slug) => {
    return async dispatch => {
        dispatch(makeAction(types.CYCLIC_COMMISISON_UPLOAD_DETAILS))
        
        await axios({
            method: 'get',
            url: combineUrl({baseUrl: API_URL_CYCLIC_COMMISSION, parts: [slug]})
        })
            .then(r => {
                dispatch(makeActionWithPayload(types.CYCLIC_COMMISISON_SUCCESS_DETAILS, r.data))
            })
            .catch(e => {
                console.log(e)
                console.log(e.response)
                dispatch(makeAction(types.CYCLIC_COMMISISON_FAIL_DETAILS))
            }) 
    }
}
