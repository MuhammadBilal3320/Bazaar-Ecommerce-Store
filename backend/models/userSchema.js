import mongoose, { Schema } from "mongoose";
import validator from "validator";  // Used to validate email format
import bcrypt from 'bcryptjs';  // Used to hash (encrypt) the password
import jsonwebtoken from "jsonwebtoken";  // Used to create JSON Web Tokens for user authentication
import crypto from "crypto";  // Used to generate random tokens for password reset

// Create a schema (structure) for the user data
const userPrototype = new Schema({

    userName: {  // User's name
        type: String,
        required: [true, "Please Enter User Name!"],  // This field is required
        unique: [true, "This User Name is Already Taken!"]  // Each username must be unique
    },

    email: {  // User's email
        type: String,
        required: [true, "Please Enter Email!"],  // This field is required
        unique: [true, "This Email is Already Taken!"],  // Each email must be unique
        validate: {  // Validate that the email is correctly formatted
            validator: validator.isEmail,  // Check if the email is valid
            message: "Please Enter Valid Email!"  // Error message if email is not valid
        }
    },

    password: {  // User's password
        type: String,
        required: [true, "Please Enter Password!"],  // This field is required
        minlength: [8, "Password should be at least 8 characters long!"],  // Minimum length of 8 characters
        select: false  // Do not return the password when querying the user
    },

    avatar: {  // User's avatar (profile picture)
        public_id: {  // Avatar's public ID
            type: String,
            // required: true  
        },
        url: {  // URL link to the avatar
            type: String,
            // required: true 
        }
    },

    role: {  // User's role (default is "user")
        type: String,
        default: "user",  // Default value is 'user'
    },

    createOn: {  // Date when the user was created
        type: Date,
        default: Date.now  // Automatically set to the current date
    },

    resetPasswordToken: String,  // Token for resetting the password
    resetTokenExpiration: Date,  // Expiration time for the reset token
});

// Pre-save hook to hash the password before saving it
userPrototype.pre('save', async function (next) {
    // If the password has not been changed, move on
    if (!this.isModified("password")) {
        return next();
    }
    // If the password was changed, hash it
    this.password = await bcrypt.hash(this.password, 10);  // Hash the password with bcrypt
});

// Method to compare entered password with the stored (hashed) password
userPrototype.methods.passwordCompare = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);  // Compare passwords
};

// Method to generate a JSON Web Token for the user
userPrototype.methods.getJWToken = function () {
    // Create a token using the user's ID, secret, and expiration time
    return jsonwebtoken.sign({ id: this._id }, process.env.JWTOKEN_SECRET, { expiresIn: process.env.JWT_EXPIRE });
};

// Method to generate a reset password token
userPrototype.methods.getResetPasswordToken = function (){
    const resetToken = crypto.randomBytes(20).toString('hex');  // Generate a random token
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');  // Hash the token
    this.resetTokenExpiration = Date.now() + process.env.RESET_PASSWORD_EXPIRE * 60 * 1000;  // Set token expiration time
    return resetToken;  // Return the raw token (not hashed) to send to the user
};

// Create the User model from the schema and export it
const userSchema = mongoose.model("User", userPrototype);
export default userSchema;
