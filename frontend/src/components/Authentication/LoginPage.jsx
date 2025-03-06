import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { userLoginAction } from "../../actions/AuthenticationAction";

const LoginPage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [unknownError, setUnknownError] = useState("");
    const initialValues = {
        email: "",
        password: ""
    };

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email format").required("Email is required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
    });

    const handleSubmit = async (values) => {
        const response = await dispatch(userLoginAction(values.email, values.password));

        if (response.success) {
            navigate("/", { replace: true });
            window.location.reload();
        } else {
            setUnknownError(response.message);
        }
    };


    return (
        <LoginMainContainer>

            <Link to={"/"}><img src="/images/signImage.png" alt="This is Image" height={"150px"} className="bazaarLogo activeCard" /></Link>

            <div className={`container ${unknownError ? "errorContainer shakeContainer" : ""}`} >
                <div className="mainHeading-text">
                    <h1>SIGN IN</h1>
                    <p>Enter Your Credentials to Access the Website.</p>
                </div>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched, setFieldValue }) => (
                        <Form>
                            <div className="inputField">
                                <Field
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    className={errors.email && touched.email ? "input-error" : ""}
                                    onChange={(e) => {
                                        setFieldValue("email", e.target.value);
                                        setUnknownError(""); // Reset error when user types
                                    }}
                                />
                                <ErrorMessage name="email" component="div" className="error" />
                            </div>

                            <div className="inputField">
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className={errors.password && touched.password ? "input-error" : ""}
                                    onChange={(e) => {
                                        setFieldValue("password", e.target.value);
                                        setUnknownError(""); // Reset error when user types
                                    }}
                                />
                                <ErrorMessage name="password" component="div" className="error" />
                            </div>

                            <div className="unknownError error">{unknownError}</div>
                            <div className="forgotPassword"><Link className="alreadyAccountLink" to="/forgotPassword">Forgot Password?</Link></div>

                            <button type="submit" className="submitButton">LOGIN</button>
                            <Link className="createNewButton" to="/registration">
                                <button type="button">CREATE NEW ACCOUNT</button>
                            </Link>
                        </Form>
                    )}
                </Formik>

            </div>
        </LoginMainContainer>
    );
};

export default LoginPage;

const LoginMainContainer = styled.main`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    height: 100vh;
    width: 100%;

    .bazaarLogo {
    padding: 10px;
    margin: 40px 0;
}


    .container{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
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

    .errorContainer{
        box-shadow: 0px 0px 5px rgba(247, 2, 2, 0.918);
    }

    /* Shake Animation */
@keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
    100% { transform: translateX(0); }
}

/* Apply shake effect only when error exists */
.shakeContainer {
    animation: shake 0.3s ease-in-out;
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

    .mainHeading-text{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    h1{
        color: rgb(60,60,60);
        font-weight: 800;
        text-align: center;
    }

    p{
        text-align: center;
        font-weight: 500;
        color: #414040d6;
    }

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .inputField{
        width: 100%;
        margin: 10px 0;
    }

    input{
        width: 100%;
        height: 40px;
        padding: 0 10px;
        border: none;
        border-radius: 8px;
        box-shadow: 0px 0px 2px black;
        font-weight: 500;
        font-size: 15px;
    }

    .forgotPassword{
        width: 100%;
        display: flex;
        justify-content: end;
    }

    .submitButton{
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

        &:active{
            transform: scale(0.95);
            transition: all 0.3s;
        }
    }

    .createNewButton{
        width: 100%;

        > button{
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

        &:hover{
            background-color: black;
            color: white;
        }

        &:active{
            transform: scale(0.95);
            transition: all 0.3s;
        }

        }
    }

    .alreadyAccountLink{
        text-decoration: none;
        font-size: large;
        font-weight: 600;
        color: purple;
    }


`