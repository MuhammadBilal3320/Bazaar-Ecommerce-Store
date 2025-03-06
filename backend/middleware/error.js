import ErrorHandler from "../utils/errorHandlerClass.js";


export const errorHandler = (err, req, res, next)=>{

    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // handling the Cast Error----> Example: if we give the _id wrong
    if(err.name === "CastError"){
        const message = "Resource Not Found! Invalid " + err.path;
        err = new ErrorHandler(message, 400);
    }

    // handling the Duplication Error
    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} , Invalid Resource!`;
        err = new ErrorHandler(message, 400);
    }

    // handling Wrong JWT Error
    if(err.name === "jsonWebTokenError"){
        const message = "Invalid JWT Token!";
        err = new ErrorHandler(message, 401);
    }

    // handling JWT Expired Error
    if(err.name === "TokenExpiredError"){
        const message = "Token is Expired, Try Again!";
        err = new ErrorHandler(message, 401);
    }

    res.status(err.statusCode).json({success: false, message:err.message});

}