import { catchAsyncError } from '../middleware/catchAsyncError.js';
import userSchema from '../models/userSchema.js'
import ErrorHandler from '../utils/errorHandlerClass.js';
import saveAndSendToken from '../utils/saveAndSendToken.js';
import sendEmail from '../utils/sendEmail.js';
import crypto from 'crypto';


// Sign up or Create a new user account
export const createUser = catchAsyncError(
    async (req, res, next) => {
        const user = await userSchema.create(req.body);

        saveAndSendToken(user, 200, res);
    }
)

// Login or Authenticate an existing user
export const loginUser = catchAsyncError(
    async (req, res, next) => {
        const { email, password } = req.body;

        if (!email || !password) {
            return next(new ErrorHandler("Enter Complete Credentials!"));
        }

        let user = await userSchema.findOne({ email }).select('+password');
        if (!user) {
            return next(new ErrorHandler("Invalid Credentials!", 400));
        }

        const isMatched = await user.passwordCompare(password);
        if (!isMatched) {
            return next(new ErrorHandler("Invalid Credentials!", 400));
        }

        user = await userSchema.findOne({email}).select("-password");

        saveAndSendToken(user, 201, res);
    }
)

// Logout the user
export const logoutUser = catchAsyncError(async (req, res, next) => {
    res.cookie("token", null, { expires: new Date(Date.now()), httpOnly: true });
    res.status(200).json({ success: true, message: "User Logged out successfully!" });
})


// user Forgot Password
export const userForgotPassword = catchAsyncError(async (req, res, next) => {
    console.log("Running userForgotPassword");
    const user = await userSchema.findOne({ email: req.body.email });

    if (!user) {
        return next(new ErrorHandler("User not found!", 404));
    }

    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    // const resetURL = `${req.protocol}://${req.get('host')}/auth/resetPassword/${resetToken}`;
    const resetURL = `http://localhost:5173/resetPassword/${resetToken}`;

    const message = `You are receiving this email because you (or someone else) have requested a password reset for your account.\n\nPlease click on the following link to complete the process:\n${resetURL}\n\nIf you did not request this, please ignore this email and your password will remain unchanged.\n`;

    try {

        await sendEmail({
            email: user.email,
            subject: "Bazaar Password Recovery",
            message
        });

        res.status(200).json({ success: true, message: `Reset Password Email Sent ${user.email} Successfully!` });

    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save({ validateBeforeSave: false });
        return next(new ErrorHandler(error.message, 500));
    }

})


// User Reset Password Confirmation
export const userResetPassword = catchAsyncError(async (req, res, next) => {
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

    const user = await userSchema.findOne({ resetPasswordToken, resetTokenExpiration: { $gt: Date.now() } })

    if (!user) {
        return next(new ErrorHandler("Invalid or Expired Reset Password Token!", 400));
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler("Passwords do not match!", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetTokenExpiration = undefined;

    await user.save();

    res.status(200).json({ success: true, message: "Password Reset Successfully!" });

})

// Check User Own Profile
export const userCheckProfile = catchAsyncError(async (req, res, next) => {

    const user = await userSchema.findById(req.user.id);

    if (!user) {
        return next(new ErrorHandler("User Not Found!", 404));
    }

    res.status(200).json({ success: true, user });

})

// Update User Own Profile Except Password
export const userUpdateOwnProfile = catchAsyncError(async (req, res, next) => {

    const newDetails = {
        userName: req.body.userName,
        email: req.body.email,
    }

    const user = await userSchema.findByIdAndUpdate(req.user.id, newDetails, { new: true, runValidators: true, useFindAndModify: false });
    if (!user) {
        return next(new ErrorHandler("User Not Found!", 404));
    }

    res.status(200).json({success: true, user})

})

// Update User Password
export const userUpdatePassword = catchAsyncError(async (req, res, next)=>{

    const user = await userSchema.findById(req.user.id).select("+password");
    if (!user) {
        return next(new ErrorHandler("User Not Found!", 404));
    }

    const isMatched = await user.passwordCompare(req.body.oldPassword);
    if(!isMatched) {
        return next(new ErrorHandler("Old Password Incorrect!", 400));
    }

    if(req.body.newPassword !== req.body.confirmPassword){
        return next(new ErrorHandler("Passwords do not match!", 400));
    }

    user.password = req.body.newPassword;
    await user.save();
    res.status(200).json({success: true, message: "Password Updated Successfully!"})

})

// Get Single Admin Details -----> Admin doesnt Access Except Master Details
export const getSingleAdminDetails = catchAsyncError(async (req, res, next)=>{

    const user = await userSchema.findById(req.params.id);
    if(!user) {
        return next(new ErrorHandler("User Not Found!", 404));
    }

    if(user.role === "master"){
        return next(new ErrorHandler("You are not authorized to access this Details!", 403));
    }

    res.status(200).json({success:true, user});
})

// Get All Admins and Admin Details 
export const getAllAdminDetails = catchAsyncError(async (req, res, next)=>{

    const users = await userSchema.find();

    if(!users) {
        return next(new ErrorHandler("No Admins Found!", 404));
    }

    res.status(200).json({success:true, users});

})

// Labeling the Role Admin/User ------> Change Role by Just Master
export const createRole = catchAsyncError(async (req, res, next)=>{

    const newRole = {
        role: req.body.role
    }

    const checkMaster = await userSchema.findById(req.params.id);
    if(checkMaster.role === "master"){
        return next(new ErrorHandler("You are not authorized to change the Master role!", 403));
    }

    const user = await userSchema.findByIdAndUpdate(req.params.id, newRole, {new: true, runValidators: true, useFindAndModify: false});
    if(!user) {
        return next(new ErrorHandler("User Not Found!", 404));
    }

    res.status(200).json({success: true, user})

})

// Deleting a user or Admin Role -----> Deleting Role by Master 
export const deletingUser = catchAsyncError(async (req, res, next)=>{
    const checkMaster = await userSchema.findById(req.params.id);
    if(checkMaster.role === "master"){
        return next(new ErrorHandler("Master Role is Not deleted!", 403));
    }
    
    const user = await userSchema.findByIdAndDelete(req.params.id);
    res.status(200).json({success: true, message: "User deleted Successfully"})
})