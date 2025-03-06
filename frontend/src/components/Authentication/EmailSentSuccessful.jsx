import React from 'react';
import styled from 'styled-components';

const EmailSentSuccessful = () => {
    return (
        <EmailSentSuccessfulMainContainer>
            <div className="container">
                <img src="/images/tick.png" alt="Success Icon" width={"100px"} />
                <h1>Email Sent Successfully</h1>
                <p>We've sent a password reset link to your email. Please check your inbox to continue.</p>
            </div>
        </EmailSentSuccessfulMainContainer>
    );
}

export default EmailSentSuccessful;

const EmailSentSuccessfulMainContainer = styled.main`
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
`;
