import axios from 'axios'

import * as types from '../types/aboutTypes'
import { 
    API_URL_ABOUT_US, 
    API_URL_CONTACT_PHONES_NUMBERS,
    API_URL_ADMINISTRATION,
    API_URL_GALLERY,
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


// upload about data
export const uploadAbout = () => {
    return dispatch => {
        dispatch(makeAction(types.ABOUT_UPLOAD_ABOUT))
        
        axios({
            method: 'get',
            url: API_URL_ABOUT_US
        })
            .then(r => {
                dispatch(makeActionWithPayload(types.ABOUT_SUCCESS_ABOUT, r.data))
            })
            .catch(e => {
                dispatch(makeAction(types.ABOUT_FAIL_ABOUT))
            }) 
    }
}

// upload contact pnone numbers
export const uploadContactNumbers = () => {
    return dispatch => {
        dispatch(makeAction(types.ABOUT_UPLOAD_CONTACT_PNONES))
        
        axios({
            method: 'get',
            url: API_URL_CONTACT_PHONES_NUMBERS
        })
            .then(r => {
                dispatch(makeActionWithPayload(types.ABOUT_SUCCESS_CONTACT_PNONES, r.data))
            })
            .catch(e => {
                dispatch(makeAction(types.ABOUT_FAIL_CONTACT_PNONES))
            }) 
    }
}

// upload administration list
export const uploadAdministration = () => {
    return dispatch => {
        dispatch(makeAction(types.ABOUT_UPLOAD_ADMINISTRATION))
        
        axios({
            method: 'get',
            url: API_URL_ADMINISTRATION
        })
            .then(r => {
                dispatch(makeActionWithPayload(types.ABOUT_SUCCESS_ADMINISTRATION, r.data))
            })
            .catch(e => {
                dispatch(makeAction(types.ABOUT_FAIL_ADMINISTRATION))
            }) 
    }
}

// upload administration details
export const uploadAdministrationDetails = (slug) => {
    return dispatch => {
        dispatch(makeAction(types.ABOUT_UPLOAD_ADMINISTRATION_DETAILS))
        
        axios({
            method: 'get',
            url: combineUrl({baseUrl: API_URL_ADMINISTRATION, parts: [slug]})
        })
            .then(r => {
                dispatch(makeActionWithPayload(types.ABOUT_SUCCESS_ADMINISTRATION_DETAILS, r.data))
            })
            .catch(e => {
                dispatch(makeAction(types.ABOUT_FAIL_ADMINISTRATION_DETAILS))
            }) 
    }
}

// upload gallery categorys
export const uploadGalleryCategorys = () => {
    return dispatch => {
        dispatch(makeAction(types.ABOUT_UPLOAD_GALLERY))
        
        axios({
            method: 'get',
            url: API_URL_GALLERY
        })
            .then(r => {
                dispatch(makeActionWithPayload(types.ABOUT_SUCCESS_GALLERY, r.data))
            })
            .catch(e => {
                dispatch(makeAction(types.ABOUT_FAIL_GALLERY))
            }) 
    }
}

// upload gallery category details
export const uploadGalleryDetails = (slug) => {
    return dispatch => {
        dispatch(makeAction(types.ABOUT_UPLOAD_GALLERY_DETAILS))
        
        axios({
            method: 'get',
            url: combineUrl({baseUrl: API_URL_GALLERY, parts: [slug]})
        })
            .then(r => {
                dispatch(makeActionWithPayload(types.ABOUT_SUCCESS_GALLERY_DETAILS, r.data))
            })
            .catch(e => {
                dispatch(makeAction(types.ABOUT_FAIL_GALLERY_DETAILS))
            }) 
    }
}
