import React from 'react';
import styled from 'styled-components';

const PasswordResetSuccessful = () => {
    return (
        <PasswordResetSuccessfulMainContainer>
            <div className="container">
                <img src="/images/tick.png" alt="Success Icon" width={"100px"} />
                <h1>Password Reset Successfully</h1>
                <p>Your password has been reset successfully. You can now log in with your new password.</p>
            </div>
        </PasswordResetSuccessfulMainContainer>
    );
}

export default PasswordResetSuccessful;

const PasswordResetSuccessfulMainContainer = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        width: 500px;
        text-align: center;
        padding: 20px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        box-shadow: 0px 0px 3px black;
    }

    h1{
        line-height: 30px;
        font-size: 30px;
    }
`;
