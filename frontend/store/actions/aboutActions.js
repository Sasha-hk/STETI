import axios from 'axios'

import * as types from '../types/aboutTypes'
import { 
    API_URL_ABOUT_US, 
    API_URL_CONTACT_PHONES_NUMBERS,
    API_URL_ADMINISTRATION,
    API_URL_GALLERY,
    API_URL_USEFUL_LINKS,
    API_URL_PARTNERS
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
    return async dispatch => {
        dispatch(makeAction(types.ABOUT_UPLOAD_ABOUT))
        
        await axios({
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
    return async dispatch => {
        dispatch(makeAction(types.ABOUT_UPLOAD_CONTACT_PNONES))
        
        await axios({
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
    return async dispatch => {
        dispatch(makeAction(types.ABOUT_UPLOAD_ADMINISTRATION))
        
        await axios({
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
    return async dispatch => {
        dispatch(makeAction(types.ABOUT_UPLOAD_ADMINISTRATION_DETAILS))
        
        await axios({
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
    return async dispatch => {
        dispatch(makeAction(types.ABOUT_UPLOAD_GALLERY))
        
        await axios({
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
    return async dispatch => {
        dispatch(makeAction(types.ABOUT_UPLOAD_GALLERY_DETAILS))
        
        await axios({
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

// upload gallery category details
export const uploadUsefulLinks = () => {
    return async dispatch => {
        dispatch(makeAction(types.ABOUT_UPLOAD_USEFUL_LINKS))
        
        await axios({
            method: 'get',
            url: API_URL_USEFUL_LINKS,
        })
            .then(r => {
                dispatch(makeActionWithPayload(types.ABOUT_SUCCESS_USEFUL_LINKS, r.data))
            })
            .catch(e => {
                dispatch(makeAction(types.ABOUT_FAIL_USEFUL_LINKS))
            }) 
    }
}

// upload gallery category details
export const uploadPartners = () => {
    return async dispatch => {
        dispatch(makeAction(types.ABOUT_UPLOAD_PARTNERS))
        
        await axios({
            method: 'get',
            url: API_URL_PARTNERS,
        })
            .then(r => {
                dispatch(makeActionWithPayload(types.ABOUT_SUCCESS_PARTNERS, r.data))
            })
            .catch(e => {
                dispatch(makeAction(types.ABOUT_FAIL_PARTNERS))
            }) 
    }
}
