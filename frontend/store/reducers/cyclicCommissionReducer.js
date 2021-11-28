import * as types from '../types/cyclicCommissionTypes'


const defaultCyclicCommissionState = {
    cyclicCommissionList: {
        records: [],
        isLoading: false,
        error: false,
    },
    cyclicCommissionDetails: {
        records: [],
        isLoading: false,
        error: false,
    },
}

const cyclicCommissionReducer = (state = defaultCyclicCommissionState, action) => {
    switch (action.type) {
        // Uploads
        case types.CYCLIC_COMMISISON_UPLOAD:
            return {
                ...state,
                cyclicCommissionList: {
                    ...state.cyclicCommissionList,
                    isLoading: true,
                    error: false,
                }
            }

        case types.CYCLIC_COMMISISON_UPLOAD_DETAILS:
            return {
                ...state,
                cyclicCommissionDetails: {
                    ...state.cyclicCommissionDetails,
                    isLoading: true,
                    error: false,
                }
            }


        // Successes
        case types.CYCLIC_COMMISISON_SUCCESS:
            return {
                ...state,
                cyclicCommissionList: {
                    records: action.payload,
                    isLoading: false,
                    error: false,
                }
            }

        case types.CYCLIC_COMMISISON_SUCCESS_DETAILS:
            return {
                ...state,
                cyclicCommissionDetails: {
                    records: action.payload,
                    isLoading: false,
                    error: false,
                }
            }
        

        // Fails
        case types.CYCLIC_COMMISISON_FAIL:
            return {
                ...state,
                cyclicCommissionList: {
                    ...state.cyclicCommissionList,
                    isLoading: false,
                    error: true,
                }
            }

        case types.CYCLIC_COMMISISON_FAIL_DETAILS:
            return {
                ...state,
                cyclicCommissionDetails: {
                    ...state.cyclicCommissionDetails,
                    isLoading: false,
                    error: true,
                }
            }
    

        default:
            return state
    }
}


export default cyclicCommissionReducer
