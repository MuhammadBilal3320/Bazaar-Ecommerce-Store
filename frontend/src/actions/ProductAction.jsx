import axios from "axios";
import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    SINGLE_PRODUCT_DETAILS_REQUEST,
    SINGLE_PRODUCT_DETAILS_FAIL,
    SINGLE_PRODUCT_DETAILS_SUCCESS,
    CLEAR_ERRORS
} from "../constants/productContants";

// Get All Product Action Function
export const getAllProducts = (keyword = "", currentPage = 1, price, rating = 0, category) => async (dispatch) => {
    try {
        dispatch({
            type: ALL_PRODUCT_REQUEST,
        });

        // Start constructing the base API link
        let link = `/api/getAllProducts?page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&totalRating[gte]=${rating}`;

        // Add category only if it is not empty
        if (category) {
            link += `&category=${category}`;
        }

        // Add keyword if present
        if (keyword) {
            link += `&keyword=${keyword}`;
        }

        const { data } = await axios.get(link);

        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response?.data?.message || error.message,
        });
    }
};




// Get Single Product Details Action Function
export const getSingleProductDetails = (id) => async (dispatch) => {
    try {

        dispatch({
            type: SINGLE_PRODUCT_DETAILS_REQUEST,
        })

        const { data } = await axios.get(`/api/getProductDetails/${id}`);

        dispatch({
            type: SINGLE_PRODUCT_DETAILS_SUCCESS,
            payload: data.product,
        })

    } catch (error) {
        dispatch({
            type: SINGLE_PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message || error.message,
        })
    }
}



export const clearErrors = () => (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    })
}