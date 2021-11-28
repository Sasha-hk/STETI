import axios from 'axios'

import * as types from '../types/cyclicCommissionTypes'
import { 
    API_URL_CYCLIC_COMMISSION,
    API_URL_CYCLIC_COMMISSION_ITEM,
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
        dispatch(makeAction(types.CYCLIC_COMMISISON_UPLOAD))
        await axios({
            method: 'get',
            url: API_URL_CYCLIC_COMMISSION
        })
        .then(r => {
                dispatch(makeActionWithPayload(types.CYCLIC_COMMISISON_SUCCESS, r.data))
            })
            .catch(e => {
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
                dispatch(makeAction(types.CYCLIC_COMMISISON_FAIL_DETAILS))
            }) 
    }
}

// upload cyclic commission item details
export const uploadCyclicCommissionItemDetails = (slug) => {
    return async dispatch => {
        dispatch(makeAction(types.CYCLIC_COMMISISON_UPLOAD_ITEM_DETAILS))
        
        await axios({
            method: 'get',
            url: combineUrl({baseUrl: API_URL_CYCLIC_COMMISSION_ITEM, parts: [slug]})
        })
            .then(r => {
                dispatch(makeActionWithPayload(types.CYCLIC_COMMISISON_SUCCESS_ITEM_DETAILS, r.data))
            })
            .catch(e => {
                dispatch(makeAction(types.CYCLIC_COMMISISON_FAIL_ITEM_DETAILS))
            }) 
    }
}
