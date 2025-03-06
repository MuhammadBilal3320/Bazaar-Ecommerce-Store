import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { userForgotPasswordAction } from "../../actions/AuthenticationAction";

const ForgotPasswordPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialValues = {
        email: ""
    };

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email format").required("Email is required")
    });

    const handleSubmit = (values) => {
        dispatch(userForgotPasswordAction(values.email));
        navigate("/emailSentSuccessful", { replace: true });
    };

    return (
        <ForgotPasswordContainer>
            <Link to={"/"}>
                <img src="/images/signImage.png" alt="Logo" height={"150px"} className="logoImage" />
            </Link>

            <div className="container">
                <div className="heading-text">
                    <h1>Forgot Password</h1>
                    <p>Enter your email to receive a password reset link.</p>
                </div>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="inputField">
                                <Field
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    className={errors.email && touched.email ? "input-error" : ""}
                                />
                                <ErrorMessage name="email" component="div" className="error" />
                            </div>

                            <button type="submit" className="submitButton">Send Reset Link</button>
                            <Link className="backToLoginButton" to="/login">
                                <button type="button">Back to Login</button>
                            </Link>
                        </Form>
                    )}
                </Formik>
            </div>
        </ForgotPasswordContainer>
    );
};

export default ForgotPasswordPage;

const ForgotPasswordContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;
    gap: 20px;

    .logoImage {
        padding: 10px;
        margin: 40px 0;
    }

    .container {
        display: flex;
        flex-direction: column;
        gap: 30px;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.87);
        border-radius: 8px;
        width: 400px;
        padding: 20px;

        @media screen and (max-width: 480px) {
            width: 380px;
            box-shadow: none;
        }
    }

    .input-error {
        box-shadow: 0px 0px 3px red;
    }

    .error {
        margin-top: 3px;
        margin-left: 15px;
        color: red;
        font-size: 14px;
    }

    .heading-text {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    h1 {
        color: rgb(60,60,60);
        font-weight: 800;
        text-align: center;
    }

    p {
        text-align: center;
        font-weight: 500;
        color: #414040d6;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .inputField {
        width: 100%;
        margin: 10px 0;
    }

    input {
        width: 100%;
        height: 40px;
        padding: 0 10px;
        border: none;
        border-radius: 8px;
        box-shadow: 0px 0px 2px black;
        font-weight: 500;
        font-size: 15px;
    }

    .submitButton {
        width: 100%;
        height: 40px;
        margin: 10px 0;
        background-color: rgb(60,60,60);
        color: white;
        font-size: 18px;
        font-weight: 600;
        transition: all 0.3s;
        cursor: pointer;
        border-radius: 20px;
        border: none;

        &:active {
            transform: scale(0.95);
            transition: all 0.3s;
        }
    }

    .backToLoginButton {
        width: 100%;

        > button {
            width: 100%;
            height: 40px;
            background-color: white;
            color: black;
            font-size: 18px;
            font-weight: 600;
            transition: all 0.3s;
            cursor: pointer;
            border-radius: 20px;
            border: none;
            box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.808);

            &:hover {
                background-color: black;
                color: white;
            }

            &:active {
                transform: scale(0.95);
                transition: all 0.3s;
            }
        }
    }
`;
