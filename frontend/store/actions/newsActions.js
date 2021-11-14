import axios from 'axios'

import * as types from '../types/newsTypes'
import newsReducer from '../reducers/newsReducer';

const makeNewsUpload = () => {
    return {
        type: types.NEWS_UPLOAD
    }
}
const makeNewsSuccess = (payload) => {
    return {
        type: types.NEWS_SUCCESS,
        payload
    }
}
const makeNewsError = () => {
    return {
        type: types.NEWS_FAIL
    }
}

const newsUpload = () => {
    return dispatch => {
        dispatch(makeNewsUpload())
        axios({
            method: 'get',
            url: 'http://localhost:8000/api/nae/news/'
        })
            .then(r => {
                dispatch(makeNewsSuccess(r.data))
            })
            .catch(r => {
                dispatch(makeNewsError())
            })
    }
}

export default newsUpload

