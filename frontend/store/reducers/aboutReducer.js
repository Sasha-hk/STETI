import * as types from '../types/aboutTypes'


const defaultAboutState = {
    about: {
        records: [],
        isLoading: false,
        error: false,
    }, 
    contactNumbers: {
        records: [],
        isLoading: false,
        error: false,
    }, 
    administration: {
        records: [],
        isLoading: false,
        error: false,
    }, 
    administrationDetails: {
        records: [],
        isLoading: false,
        error: false,
    }, 
    gallery: {
        records: [],
        isLoading: false,
        error: false,
    }, 
    galleryDetails: {
        records: [],
        isLoading: false,
        error: false,
    }, 
}


const aboutReducer = (state = defaultAboutState, action) => {
    switch (action.type) {
        // Uploads
        case types.ABOUT_UPLOAD_ABOUT:
            return {
                ...state,
                about: {
                    ...state.about,
                    isLoading: true,
                    error: false,
                }
            }

        case types.ABOUT_UPLOAD_CONTACT_PNONES:
            return {
                ...state,
                contactNumbers: {
                    ...state.contactNumbers,
                    isLoading: true,
                    error: false,
                }
            }

        case types.ABOUT_UPLOAD_ADMINISTRATION:
            return {
                ...state,
                administration: {
                    ...state.administration,
                    isLoading: true,
                    error: false,
                }
            } 

        case types.ABOUT_UPLOAD_ADMINISTRATION_DETAILS:
            return {
                ...state,
                administrationDetails: {
                    ...state.administrationDetails,
                    isLoading: true,
                    error: false,
                }
            } 

        case types.ABOUT_UPLOAD_GALLERY:
            return {
                ...state,
                gallery: {
                    ...state.gallery,
                    isLoading: true,
                    error: false,
                }
            }

        case types.ABOUT_UPLOAD_GALLERY_DETAILS:
            return {
                ...state,
                galleryDetails: {
                    ...state.galleryDetails,
                    isLoading: true,
                    error: false,
                }
            }
            
            
        // Successes
        case types.ABOUT_SUCCESS_ABOUT:
            return {
                ...state,
                about: {
                    records: action.payload,
                    isLoading: false,
                    error: false,
                }
            }

        case types.ABOUT_SUCCESS_CONTACT_PNONES:
            return {
                ...state,
                contactNumbers: {
                    records: action.payload,
                    isLoading: false,
                    error: false,
                }
            }

        case types.ABOUT_SUCCESS_ADMINISTRATION:
            return {
                ...state,
                administration: {
                    records: action.payload,
                    isLoading: false,
                    error: false,
                }
            }

        case types.ABOUT_SUCCESS_ADMINISTRATION_DETAILS:
            return {
                ...state,
                administrationDetails: {
                    records: action.payload,
                    isLoading: false,
                    error: false,
                }
            }

        case types.ABOUT_SUCCESS_GALLERY:
            return {
                ...state,
                gallery: {
                    records: action.payload,
                    isLoading: false,
                    error: false,
                }
            }

        case types.ABOUT_SUCCESS_GALLERY_DETAILS:
            return {
                ...state,
                galleryDetails: {
                    records: action.payload,
                    isLoading: false,
                    error: false,
                }
            }

        // Fails
        case types.ABOUT_FAIL_ABOUT:
            return {
                ...state,
                galleryDetails: {
                    ...state.galleryDetails,
                    isLoading: false,
                    error: true,
                }
            }

        case types.ABOUT_FAIL_CONTACT_PNONES:
            return {
                ...state,
                contactNumbers: {
                    ...state.contactNumbers,
                    isLoading: false,
                    error: true,
                }
            }

        case types.ABOUT_FAIL_ADMINISTRATION:
            return {
                ...state,
                administration: {
                    ...state.administration,
                    isLoading: false,
                    error: true,
                }
            }

        case types.ABOUT_FAIL_ADMINISTRATION_DETAILS:
            return {
                ...state,
                administrationDetails: {
                    ...state.administrationDetails,
                    isLoading: false,
                    error: true,
                }
            }

        case types.ABOUT_FAIL_GALLERY:
            return {
                ...state,
                gallery: {
                    ...state.gallery,
                    isLoading: false,
                    error: true,
                }
            }

        case types.ABOUT_FAIL_GALLERY_DETAILS:
            return {
                ...state,
                galleryDetails: {
                    ...state.galleryDetails,
                    isLoading: false,
                    error: true,
                }
            }


        default:
            return state
    }
}


export default aboutReducer
