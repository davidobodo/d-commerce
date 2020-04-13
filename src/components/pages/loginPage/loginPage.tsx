import React, { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Redirect } from "react-router-dom";
import * as EmailValidator from "email-validator";
import Layout from "../../shared/layout/layout";
import Input from "../../shared/input/input";
import Button from "../../shared/button/button";
import Spinner from "../../shared/spinner/spinner";
import { requestUserLoginStart } from "../../../redux/actions/auth";
import { LoginContainer } from "./style";

const Login = () => {
    const dispatch = useDispatch();
    const [emailHasError, setEmailHasError] = useState(false);
    const [passwordHasError, setPasswordHasError] = useState(false);

    const [emailErrorMessage, setEmailErrorMessage] = useState();
    const [passwordErrorMessage, setPasswordErrorMessage] = useState();

    const { isLoading, firebase, firebaseErrMessage } = useSelector(state => {
        return {
            isLoading: state.login.loading,
            firebase: state.firebaseReducer,
            firebaseErrMessage: state.login.error
        };
    }, shallowEqual);

    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    });

    const handleOnChange = e => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    const handleOnKeyDown = e => {
        const { name } = e.target;

        if (e.key === "Enter") return;

        if (name === "email") {
            setEmailHasError(false);
        }

        console.log(userDetails.password.length);
        if (name === "password" && userDetails.password.length > 6) {
            setPasswordHasError(false);
        }
    };

    if (firebase.auth.uid) {
        return <Redirect to="/" />;
    }

    const handleOnsubmit = () => {
        console.log({ emailHasError }, { passwordHasError });
        if (!emailHasError && !passwordHasError) {
            console.log("in this level");
            console.log({ emailHasError }, { passwordHasError });
            dispatch(requestUserLoginStart(userDetails));
        }
    };

    const handleValidateForm = e => {
        const { email, password } = userDetails;
        const letters = /^[A-Za-z]+$/;
        e.preventDefault();

        //email
        if (!EmailValidator.validate(email)) {
            setEmailHasError(true);
            setEmailErrorMessage("Insert a valid email");
        }

        //password
        if (password.length <= 6) {
            setPasswordHasError(true);
            setPasswordErrorMessage("password Incorrect");
        }

        handleOnsubmit();
    };

    const ipnut_fields = [
        {
            label: "Email",
            type: "email",
            name: "email",
            inputHasError: emailHasError,
            inputErrorMessage: emailErrorMessage
        },
        {
            label: "Password",
            type: "password",
            name: "password",
            inputHasError: passwordHasError,
            inputErrorMessage: passwordErrorMessage
        }
    ];

    return (
        <Layout isFooterPresent>
            {isLoading && <Spinner />}
            <LoginContainer>
                <form
                    action=""
                    onSubmit={handleValidateForm}
                    onChange={handleOnChange}
                    onKeyDown={handleOnKeyDown}
                    noValidate
                >
                    <h2>Login</h2>
                    {ipnut_fields.map((field, i) => {
                        const {
                            label,
                            type,
                            name,
                            inputHasError,
                            inputErrorMessage
                        } = field;
                        return (
                            <Input
                                key={i}
                                label={label}
                                type={type}
                                name={name}
                                hasError={inputHasError}
                                errorMessage={inputErrorMessage}
                            />
                        );
                    })}
                    <Button blue_small_text>Login</Button>
                    {!!firebaseErrMessage && (
                        <div className="firebase-err">{firebaseErrMessage}</div>
                    )}
                </form>
            </LoginContainer>
        </Layout>
    );
};

export default Login;
