import axios from 'axios'

import * as types from '../types/studyTypes'
import { 
    API_URL_DEPARTMENTS,
    API_URL_GALLERY, 
    API_URL_FOR_ENTRANTS,
    API_URL_FOR_STUDENTS,
    API_URL_LIBRARY,
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


// upload departments
export const uploadDepartments = () => {
    return async dispatch => {
        dispatch(makeAction(types.STUDY_UPLOAD_DEPARTMENTS))
        
        await axios({
            method: 'get',
            url: API_URL_DEPARTMENTS
        })
            .then(r => {
                dispatch(makeActionWithPayload(types.STUDY_SUCCESS_DEPARTMENTS, r.data))
            })
            .catch(e => {
                dispatch(makeAction(types.STUDY_FAIL_DEPARTMENTS))
            }) 
    }
}

// upload for students
export const uploadForStudents = () => {
    return async dispatch => {
        dispatch(makeAction(types.STUDY_UPLOAD_FOR_STUDENTS))
        
        await axios({
            method: 'get',
            url: API_URL_FOR_STUDENTS
        })
            .then(r => {
                dispatch(makeActionWithPayload(types.STUDY_SUCCESS_FOR_STUDENTS, r.data))
            })
            .catch(e => {
                dispatch(makeAction(types.STUDY_FAIL_FOR_STUDENTS))
            }) 
    }
}

// upload for students details
export const uploadForStudentsDetails = (slug) => {
    return async dispatch => {
        dispatch(makeAction(types.STUDY_UPLOAD_FOR_STUDENTS_DETAILS))
        
        await axios({
            method: 'get',
            url: combineUrl({baseUrl: API_URL_FOR_STUDENTS, parts: [slug]})
        })
            .then(r => {
                dispatch(makeActionWithPayload(types.STUDY_SUCCESS_FOR_STUDENTS_DETAILS, r.data))
            })
            .catch(e => {
                dispatch(makeAction(types.STUDY_FAIL_FOR_STUDENTS_DETAILS))
            }) 
    }
}

// upload for entrants
export const uploadForEntrants = () => {
    return async dispatch => {
        dispatch(makeAction(types.STUDY_UPLOAD_FOR_ENTRANTS))
        
        await axios({
            method: 'get',
            url: API_URL_FOR_ENTRANTS
        })
            .then(r => {
                dispatch(makeActionWithPayload(types.STUDY_SUCCESS_FOR_ENTRANTS, r.data))
            })
            .catch(e => {
                dispatch(makeAction(types.STUDY_FAIL_FOR_ENTRANTS))
            }) 
    }
}

// upload for entrants details
export const uploadForEntrantsDetails = (slug) => {
    return async dispatch => {
        dispatch(makeAction(types.STUDY_UPLOAD_FOR_ENTRANTS_DETAILS))
        
        await axios({
            method: 'get',
            url: combineUrl({baseUrl: API_URL_FOR_ENTRANTS, parts: [slug]})
        })
            .then(r => {
                dispatch(makeActionWithPayload(types.STUDY_SUCCESS_FOR_ENTRANTS_DETAILS, r.data))
            })
            .catch(e => {
                dispatch(makeAction(types.STUDY_FAIL_FOR_ENTRANTS_DETAILS))
            }) 
    }
}

// upload library categorys
export const uploadLibrary = () => {
    return async dispatch => {
        dispatch(makeAction(types.STUDY_UPLOAD_LIBRARY))
        
        await axios({
            method: 'get',
            url: API_URL_LIBRARY
        })
            .then(r => {
                dispatch(makeActionWithPayload(types.STUDY_SUCCESS_LIBRARY, r.data))
            })
            .catch(e => {
                dispatch(makeAction(types.STUDY_FAIL_LIBRARY))
            }) 
    }
}

// upload library category details
export const uploadLibraryDetails = (slug) => {
    return async dispatch => {
        dispatch(makeAction(types.STUDY_UPLOAD_LIBRARY_DETAILS))
        
        await axios({
            method: 'get',
            url: combineUrl({baseUrl: API_URL_LIBRARY, parts: [slug]})
        })
            .then(r => {
                dispatch(makeActionWithPayload(types.STUDY_SUCCESS_LIBRARY_DETAILS, r.data))
            })
            .catch(e => {
                dispatch(makeAction(types.STUDY_FAIL_LIBRARY_DETAILS))
            }) 
    }
}
