import * as types from '../types/naeTypes'

const defaultNewsState = {
    details: {
        news: {},
        events: {}
    },
    error: {
        news: false,
        events: false
    },
    isLoading: {
        news: false,
        events: false
    },
    news_and_events: {
        news: [],
        events: []
    },
}

const naeReducer = (state = defaultNewsState, action) => {
    switch (action.type) {
        // News
        case types.NAE_UPLOAD_NEWS:
            return {
                ...state,
                error: {
                    ...state.error, 
                    news: false,
                },
                isLoading: {
                    ...state.isLoading, 
                    news: true,
                },
            }

        case types.NAE_SUCCESS_NEWS:
            return {
                ...state,
                error: {
                    ...state.error, 
                    news: false,
                },
                isLoading: {
                    ...state.isLoading, 
                    news: false,
                },
                news_and_events: {...state.news_and_events, news: action.payload}
            }
        
        case types.NAE_FAIL_NEWS:
            return {
                ...state,
                error: {
                    ...state.error, 
                    news: true,
                },
                isLoading: {
                    ...state.isLoading, 
                    news: false,
                },
            }

        // Events
        case types.NAE_UPLOAD_EVENTS:
            return {
                ...state,
                error: {
                    ...state.error, 
                    events: false,
                },
                isLoading: {
                    ...state.isLoading, 
                    events: true,
                },
            }

        case types.NAE_SUCCESS_EVENTS:
            return {
                ...state,
                error: {
                    ...state.error, 
                    events: false,
                },
                isLoading: {
                    ...state.isLoading, 
                    events: false,
                },
                news_and_events: {...state.news_and_events, events: action.payload}
            } 
            
        case types.NAE_FAIL_EVENTS:
            return {
                ...state,
                error: {
                    ...state.error, 
                    events: false,
                },
                isLoading: {
                    ...state.isLoading, 
                    events: true,
                },
            }


        default:
            return state
    }
}

export default naeReducer