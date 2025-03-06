import React from "react";
import { Link, useNavigate} from "react-router-dom";
import styled from "styled-components";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { userRegistrationAction } from "../../actions/AuthenticationAction";

const RegistrationPage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialValues = {
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
    };

    const validationSchema = Yup.object({
        userName: Yup.string().required("Username is required"),
        email: Yup.string().email("Invalid email format").required("Email is required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required")
            
    });

    const handleSubmit = (values) => {
        dispatch(userRegistrationAction(values.userName, values.email, values.password));
        navigate("/registrationSuccessful", { replace: true });
    };

    return (
        <RegistrationMainContainer>

            <Link to={"/"}><img src="/images/signImage.png" alt="This is Image" height={"150px"} className="bazaarLogo activeCard" /></Link>

            <div className="container">
                <div className="mainHeading-text">
                    <h1>SIGN UP</h1>
                    <p>Enter Your Details and Create New Account.</p>
                </div>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="userName inputField">
                                <Field
                                    type="text"
                                    name="userName"
                                    placeholder="User Name"
                                    className={errors.userName && touched.userName ? "input-error" : ""}
                                />
                                <ErrorMessage name="userName" component="div" className="error" />
                            </div>

                            <div className="email inputField">
                                <Field
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    className={errors.email && touched.email ? "input-error" : ""}
                                />
                                <ErrorMessage name="email" component="div" className="error" />
                            </div>

                            <div className="password inputField">
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className={errors.password && touched.password ? "input-error" : ""}
                                />
                                <ErrorMessage name="password" component="div" className="error" />
                            </div>

                            <div className="confirmPassword inputField">
                                <Field
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}
                                />
                                <ErrorMessage name="confirmPassword" component="div" className="error" />
                            </div>

                            <button type="submit" className="submitButton">CREATE NEW ACCOUNT</button>
                        </Form>
                    )}
                </Formik>

                <p>Already Have Account? <Link to="/login" className="alreadyAccountLink">Login</Link></p>
            </div>
        </RegistrationMainContainer>
    );
};

export default RegistrationPage;

const RegistrationMainContainer = styled.main`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    height: 100vh;
    width: 100%;

    .bazaarLogo{
        padding: 10px;
        margin: 40px 0;
    }

    .container{
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

    .submitButton{
        width: 100%;
        height: 40px;
        margin-top: 15px;
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

    .alreadyAccountLink{
        text-decoration: none;
        font-size: large;
        font-weight: 600;
        color: purple;
    }


`