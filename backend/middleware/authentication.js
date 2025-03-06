import jsonwebtoken from "jsonwebtoken";
import ErrorHandler from "../utils/errorHandlerClass.js";
import { catchAsyncError } from "./catchAsyncError.js";
import userSchema from "../models/userSchema.js";

export const isAuthenticated = catchAsyncError(async (req, res, next) => {

    const { token } = req.cookies;

    if (!token) {
        return next(new ErrorHandler("Please Login Required for this Resource!", 401));
    }

    const verified = jsonwebtoken.verify(token, process.env.JWTOKEN_SECRET);

    req.user = await userSchema.findById(verified.id);

    if (!req.user) {
        return next(new ErrorHandler("Invalid Token! Please Login Again.", 401));
    }

    req.user = {
        id: req.user.id,
        userName: req.user.userName,
        role: req.user.role
    }

    next();

})

// Check the user Role Admin or Not
export const isAdmin = (...roles)=>{
    return catchAsyncError(async (req, res, next)=>{
        if(!roles.includes(req.user.role)){
            return next(new ErrorHandler("Unauthorized Access! Only Admins can perform this action.", 403));
        }
        next();
    })
}

export const isMaster = (...roles)=>{
    return catchAsyncError(async (req, res, next)=>{
        if(!roles.includes(req.user.role)){
            return next(new ErrorHandler("Unauthorized Access! Only Master can perform this action.",403));
        }
        next();
    })
}