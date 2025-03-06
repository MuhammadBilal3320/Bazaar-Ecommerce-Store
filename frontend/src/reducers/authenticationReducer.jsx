import {
    REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAIL,

    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL,

    FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAIL,

    RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAIL,

    USER_LOADER_REQUEST, USER_LOADER_SUCCESS, USER_LOADER_FAIL,

    LOGOUT_SUCCESS, LOGOUT_FAIL,

    CLEAR_ERRORS
} from "../constants/authenticationContants";

// Registration Reducer functions
export const registrationReducer = (state = { user: {} }, action) => {

    switch (action.type) {
        case REGISTRATION_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            }

        case REGISTRATION_SUCCESS:
            return {
                loading: false, 
                isAuthenticated: true,
                user: action.payload
            }

        case REGISTRATION_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }

}

// LOGIN Reducer functions
export const loginReducer = (state = { user: {} }, action) => {

    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            }

        case LOGIN_SUCCESS:
            return {
                loading: false, 
                isAuthenticated: true,
                user: action.payload
            }

        case LOGIN_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }

}

// Forgot Password Reducer functions
export const forgotPasswordReducer = (state = { user: {} }, action) => {

    switch (action.type) {
        case FORGOT_PASSWORD_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            }

        case FORGOT_PASSWORD_SUCCESS:
            return {
                loading: false, 
                isAuthenticated: true,
                user: action.payload
            }

        case FORGOT_PASSWORD_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }

}


// Reset Password Reducer Function
export const resetPasswordReducer = (state = { user: {} }, action) => {

    switch (action.type) {
        case RESET_PASSWORD_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            }

        case RESET_PASSWORD_SUCCESS:
            return {
                loading: false, 
                isAuthenticated: true,
                user: action.payload
            }

        case RESET_PASSWORD_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }

}


// User Loader Reducer Function
export const userLoaderReducer = (state = { user: {} }, action) => {

    switch (action.type) {
        case USER_LOADER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            }

        case USER_LOADER_SUCCESS:
            return {
                loading: false, 
                isAuthenticated: true,
                user: action.payload
            }

        case USER_LOADER_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }

}

// Logout Reducer Function
export const logoutReducer = (state = { user: {} }, action) => {

    switch (action.type) {

        case LOGOUT_SUCCESS:
            return {
                loading: false, 
                isAuthenticated: false,
                user: null
            }

        case LOGOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }

}