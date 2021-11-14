import * as types from '../types/newsTypes'

const defaultNewsState = {
    news: [],
    isLoading: false,
    error: false,
}

const newsReducer = (state = defaultNewsState, action) => {
    switch (action.type) {
        case types.NEWS_UPLOAD:
            return {...state, isLoading: true, error: false}

        case types.NEWS_FAIL:
            return {...state, isLoading: false, error: true}

        case types.NEWS_SUCCESS:
            return {...state, isLoading: false, error: false, news: action.payload}

        default:
            return state
    }
}

export default newsReducer