import * as types from '../types/studyTypes'


const defaultStudyState = {
    departments: {
        records: [],
        isLoading: false,
        error: false,
    },
    forEntrants: {
        records: [],
        isLoading: false,
        error: false,
    },
    forEntrantsDetails: {
        records: [],
        isLoading: false,
        error: false,
    },
    forStudents: {
        records: [],
        isLoading: false,
        error: false,
    },
    forStudentsDetails: {
        records: [],
        isLoading: false,
        error: false,
    },
    library: {
        records: [],
        isLoading: false,
        error: false,
    },
    libraryDetails: {
        records: [],
        isLoading: false,
        error: false,
    },
}

const studyReducer = (state = defaultStudyState, action) => {
    switch (action.type) {
        // Uploads
        case types.STUDY_UPLOAD_DEPARTMENTS:
            return {
                ...state,
                departments: {
                    ...state.departments,
                    isLoading: true,
                    error: false,
                }
            }

        case types.STUDY_UPLOAD_FOR_STUDENTS:
            return {
                ...state,
                forStudents: {
                    ...state.forStudents,
                    isLoading: true,
                    error: false,
                }
            }

        case types.STUDY_UPLOAD_FOR_STUDENTS_DETAILS:
            return {
                ...state,
                forStudentsDetails: {
                    ...state.forStudentsDetails,
                    isLoading: true,
                    error: false,
                }
            }

        case types.STUDY_UPLOAD_FOR_ENTRANTS:
            return {
                ...state,
                forEntrants: {
                    ...state.forEntrants,
                    isLoading: true,
                    error: false,
                }
            }

        case types.STUDY_UPLOAD_FOR_ENTRANTS_DETAILS:
            return {
                ...state,
                forEntrantsDetails: {
                    ...state.forEntrantsDetails,
                    isLoading: true,
                    error: false,
                }
            }

        case types.STUDY_UPLOAD_LIBRARY:
            return {
                ...state,
                library: {
                    ...state.library,
                    isLoading: true,
                    error: false,
                }
            }

        case types.STUDY_UPLOAD_LIBRARY_DETAILS:
            return {
                ...state,
                libraryDetails: {
                    ...state.libraryDetails,
                    isLoading: true,
                    error: false,
                }
            }


        // Successes
        case types.STUDY_SUCCESS_DEPARTMENTS:
            return {
                ...state,
                departments: {
                    records: action.payload,
                    isLoading: false,
                    error: false,
                }
            }

        case types.STUDY_SUCCESS_FOR_STUDENTS:
            return {
                ...state,
                forStudents: {
                    records: action.payload,
                    isLoading: false,
                    error: false,
                }
            }

        case types.STUDY_SUCCESS_FOR_STUDENTS_DETAILS:
            return {
                ...state,
                forStudentsDetails: {
                    records: action.payload,
                    isLoading: false,
                    error: false,
                }
            }

        case types.STUDY_SUCCESS_FOR_ENTRANTS:
            return {
                ...state,
                forEntrants: {
                    records: action.payload,
                    isLoading: false,
                    error: false,
                }
            }

        case types.STUDY_SUCCESS_FOR_ENTRANTS_DETAILS:
            return {
                ...state,
                forEntrantsDetails: {
                    records: action.payload,
                    isLoading: false,
                    error: false,
                }
            }

        case types.STUDY_SUCCESS_LIBRARY:
            return {
                ...state,
                library: {
                    records: action.payload,
                    isLoading: false,
                    error: false,
                }
            }

        case types.STUDY_SUCCESS_LIBRARY_DETAILS:
            return {
                ...state,
                libraryDetails: {
                    records: action.payload,
                    isLoading: false,
                    error: false,
                }
            }


        // Fails
        case types.STUDY_FAIL_DEPARTMENTS:
            return {
                ...state,
                departments: {
                    ...state.departments,
                    isLoading: false,
                    error: true,
                }
            }

        case types.STUDY_FAIL_FOR_STUDENTS:
            return {
                ...state,
                forStudents: {
                    ...state.forStudents,
                    isLoading: false,
                    error: true,
                }
            }

        case types.STUDY_FAIL_FOR_STUDENTS_DETAILS:
            return {
                ...state,
                forStudentsDetails: {
                    ...state.forStudentsDetails,
                    isLoading: false,
                    error: true,
                }
            }

        case types.STUDY_FAIL_FOR_ENTRANTS:
            return {
                ...state,
                forEntrants: {
                    ...state.forEntrants,
                    isLoading: false,
                    error: true,
                }
            }

        case types.STUDY_FAIL_FOR_ENTRANTS_DETAILS:
            return {
                ...state,
                forEntrantsDetails: {
                    ...state.forEntrantsDetails,
                    isLoading: false,
                    error: true,
                }
            }

        case types.STUDY_FAIL_LIBRARY:
            return {
                ...state,
                library: {
                    ...state.library,
                    isLoading: false,
                    error: true,
                }
            }

        case types.STUDY_FAIL_LIBRARY_DETAILS:
            return {
                ...state,
                libraryDetails: {
                    ...state.libraryDetails,
                    isLoading: false,
                    error: true,
                }
            }


        default:
            return state
    }
}


export default studyReducer
