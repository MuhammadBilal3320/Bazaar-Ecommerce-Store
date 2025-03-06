import { 
    ALL_PRODUCT_REQUEST, 
    ALL_PRODUCT_SUCCESS, 
    ALL_PRODUCT_FAIL, 
    SINGLE_PRODUCT_DETAILS_REQUEST,
    SINGLE_PRODUCT_DETAILS_FAIL,
    SINGLE_PRODUCT_DETAILS_SUCCESS,
    CLEAR_ERRORS } from "../constants/productContants";

// All Product Reducer functions
export const productReducer = (state = { products: [] }, action) => {

    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            return {
                loading: true,
                products: []
            }

        case ALL_PRODUCT_SUCCESS:
            return {
                loading: false,
                products: action.payload.product,
                perPageProduct: action.payload.perPageProduct,
                productCount: action.payload.productCount,
                filteredProductsCount: action.payload.filteredProductsCount,
                maxPrice: action.payload.maxPrice
            }

        case ALL_PRODUCT_FAIL:
            return {
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

// Single Product Details Reducer Function
export const singleProductDetailsReducer = (state = { product: {} }, action) => {

    switch (action.type) {
        case SINGLE_PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
                ...state
            }

        case SINGLE_PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }

        case SINGLE_PRODUCT_DETAILS_FAIL:
            return {
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