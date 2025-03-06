import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { productReducer, singleProductDetailsReducer } from "./reducers/productReducer";
import { forgotPasswordReducer, loginReducer, registrationReducer, resetPasswordReducer, userLoaderReducer } from "./reducers/authenticationReducer";

const reducer = combineReducers({
    products: productReducer,
    singleProduct: singleProductDetailsReducer,
    userRegistration: registrationReducer,
    userLogin: loginReducer,
    userForgotPassword: forgotPasswordReducer,
    userResetPassword: resetPasswordReducer,
    userLoader: userLoaderReducer
});

const initialState = {};

const middleware = [thunk];

// Use configureStore with a configuration object
const store = configureStore({
    reducer, 
    preloadedState: initialState,initialState,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middleware),
    devTools: composeWithDevTools(), 
});

export default store;
