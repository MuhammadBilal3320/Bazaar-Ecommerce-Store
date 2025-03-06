import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const RegistrationSuccessful = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/", { replace: true });
    };

    return (
        <RegistrationSuccessfulMainContainer>
            <div className="container">
                <img src="/images/tick.png" alt="This is image" width={"100px"} />
                <h1>Registration Successful</h1>
                <p>Registration complete! You can now explore our site and see everything available!</p>
                <button onClick={handleHomeClick}>HOME</button>
            </div>
        </RegistrationSuccessfulMainContainer>
    );
}

export default RegistrationSuccessful;

const RegistrationSuccessfulMainContainer = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .container{
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

    button{
        width: 90%;
        height: 40px;
        background-color: rgb(60, 60, 60);
        color: white;
        border: none;
        border-radius: 30px;
        cursor: pointer;
        font-weight: 600;
        font-size: 18px;
        transition: all 0.3s;
        
        &:hover{
            background-color: rgb(40, 40, 40);
        }

        &:active{
            transform: scale(0.95);
            transition: all 0.3s;
        }
    }

`