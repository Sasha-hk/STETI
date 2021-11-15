import * as types from '../types/naeTypes'


const defaultNewsState = {
    news: {
        records: [],
        isLoading: false,
        error: false,
    },
    events: {
        records: [],
        isLoading: false,
        error: false,
    },
    newsDetails: {
        records: [],
        isLoading: false,
        error: false,
    },
    eventsDetails: {
        records: [],
        isLoading: false,
        error: false,
    }
}

const naeReducer = (state = defaultNewsState, action) => {
    switch (action.type) {
        // Uploads
        case types.NAE_UPLOAD_NEWS:
            return {
                ...state,
                news: {
                    isLoading: true,
                    error: false,
                }
            }

        case types.NAE_UPLOAD_NEWS_DETAILS:
            return {
                ...state,
                newsDetails: {
                    isLoading: true,
                    error: false,
                }
            }

        case types.NAE_UPLOAD_EVENTS:
            return {
                ...state,
                events: {
                    isLoading: true,
                    error: false,
                }
            }
        
        case types.NAE_UPLOAD_EVENTS_DETAILS:
            return {
                ...state,
                eventsDetails: {
                    isLoading: true,
                    error: false,
                }
            }

        // Successes
        case types.NAE_SUCCESS_NEWS:
            return {
                ...state,
                news: {
                    records: action.payload,
                    isLoading: false,
                    error: false,
                }
            }

        case types.NAE_SUCCESS_NEWS_DETAILS:
            return {
                ...state,
                newsDetails: {
                    records: action.payload,
                    isLoading: false,
                    error: false,
                }
            }

        case types.NAE_SUCCESS_EVENTS:
            return {
                ...state,
                events: {
                    records: action.payload,
                    isLoading: false,
                    error: false,
                }
            }

        case types.NAE_SUCCESS_EVENTS_DETAILS:
            return {
                ...state,
                eventsDetails: {
                    records: action.payload,
                    isLoading: false,
                    error: false,
                }
            }
        
        // Fails
        case types.NAE_FAIL_NEWS:
            return {
                ...state,
                news: {
                    isLoading: false,
                    error: true,
                }
            }

        case types.NAE_FAIL_NEWS_DETAILS:
            return {
                ...state,
                newsDetails: {
                    isLoading: false,
                    error: true,
                }
            }
            
        case types.NAE_FAIL_EVENTS:
            return {
                ...state,
                events: {
                    isLoading: false,
                    error: true,
                }
            }
        case types.NAE_FAIL_EVENTS_DETAILS:
            return {
                ...state,
                eventsDetails: {
                    isLoading: false,
                    error: true,
                }
            }
    

        default:
            return state
    }
}


export default naeReducer
