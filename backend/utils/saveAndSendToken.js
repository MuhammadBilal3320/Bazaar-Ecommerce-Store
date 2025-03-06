const saveAndSendToken = (user, statusCode, res) => {

    const token = user.getJWToken(); // Generate a JWT token for the user using a method from the user object
    
    const options = {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000), // Set cookie expiration time by adding the configured number of days to the current time
        httpOnly: true // Set the cookie to HTTP-only to prevent client-side access (for security)
    };

    // Send the response with the status code, set the token as a cookie, and return success, user data, and token
    res.status(statusCode)
        .cookie("token", token, options) // Attach the token as an HTTP-only cookie
        .json({ success: true, user, token }); // Return the response as JSON with success flag, user, and token

}

export default saveAndSendToken;
