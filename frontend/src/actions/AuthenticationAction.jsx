import axios from 'axios';
import {
    REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAIL,

    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL,

    FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAIL,

    RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAIL,

    USER_LOADER_REQUEST, USER_LOADER_SUCCESS, USER_LOADER_FAIL,

    LOGOUT_SUCCESS, LOGOUT_FAIL,

    CLEAR_ERRORS,
} from '../constants/authenticationContants';

// Registration Action functions
export const userRegistrationAction = (userName, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: REGISTRATION_REQUEST,
        });

        const config = { headers: { 'Content-Type': 'application/json' } };

        const { data } = await axios.post('/auth/createUser', { userName, email, password }, config);

        dispatch({
            type: REGISTRATION_SUCCESS,
            payload: data.user,
        });

    } catch (error) {
        dispatch({
            type: REGISTRATION_FAIL,
            payload: error.response?.data?.message || error.message,
        });
    }
};

// Login Action functions
export const userLoginAction = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });

        const config = { headers: { 'Content-Type': 'application/json' } };

        const { data } = await axios.post('/auth/loginUser', { email, password }, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user,
        });

        return { success: true, user: data.user };

    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message;

        dispatch({
            type: LOGIN_FAIL,
            payload: errorMessage,
        });

        return { success: false, message: errorMessage };
    }
};

// Forgot password Action Functin
export const userForgotPasswordAction = (email) => async (dispatch) => {
    try {
        dispatch({
            type: FORGOT_PASSWORD_REQUEST,
        });

        const config = { headers: { 'Content-Type': 'application/json' } };

        const { data } = await axios.post('/auth/forgetPassword', { email }, config);

        dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            payload: data.user,
        });

    } catch (error) {
        dispatch({
            type: FORGOT_PASSWORD_FAIL,
            payload: error.response?.data?.message || error.message,
        });
    }
};

// Reset Password Action Function
export const userResetPasswordAction = (passwords, token) => async (dispatch) => {
    try {
        dispatch({
            type: RESET_PASSWORD_REQUEST,
        });

        const config = { headers: { 'Content-Type': 'application/json' } };

        const { data } = await axios.put(`/auth/resetPassword/${token}`, passwords, config);

        dispatch({
            type: RESET_PASSWORD_SUCCESS,
            payload: data.user,
        });

    } catch (error) {
        dispatch({
            type: RESET_PASSWORD_FAIL,
            payload: error.response?.data?.message || error.message,
        });
    }
};

// User Loader Action Function
export const userLoaderAction = () => async (dispatch) => {
    try {
        dispatch({ type: USER_LOADER_REQUEST });

        const { data } = await axios.get('/auth/userProfile', {
            withCredentials: true,  // Ensures cookies are sent with the request
        });

        dispatch({
            type: USER_LOADER_SUCCESS,
            payload: data.user,
        });

    } catch (error) {
        dispatch({
            type: USER_LOADER_FAIL,
            payload: error.response?.data?.message || "Failed to load user",
        });
    }
};

// Logout User Action Function
export const userLogoutAction = () => async (dispatch) => {
    try {
        await axios.get(`/auth/logoutUser`);

        dispatch({
            type: LOGOUT_SUCCESS
        });

    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response?.data?.message || error.message,
        });
    }
};

// Clear Errors Action function
export const clearErrors = () => (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    })
}