import React, { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Redirect, Link, useHistory } from "react-router-dom";
import * as EmailValidator from "email-validator";
import Layout from "../../shared/layout/layout";
import Input from "../../shared/input/input";
import Button from "../../shared/button/button";
import Spinner from "../../shared/spinner/spinner";
import { requestUserLoginStart } from "../../../redux/actions/auth";
import { LoginContainer } from "./style";

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [emailHasError, setEmailHasError] = useState(false);
    const [passwordHasError, setPasswordHasError] = useState(false);

    const [emailErrorMessage, setEmailErrorMessage] = useState();
    const [passwordErrorMessage, setPasswordErrorMessage] = useState();

    let _emailHasErr = false;
    let _passwordHasErr = false;

    const { isLoading, firebase, firebaseErrMessage, cart } = useSelector(
        state => {
            return {
                isLoading: state.login.loading,
                firebase: state.firebaseReducer,
                firebaseErrMessage: state.login.error,
                cart: state.cart
            };
        },
        shallowEqual
    );

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

        if (name === "password" && userDetails.password.length > 6) {
            setPasswordHasError(false);
        }
    };

    const handleValidateForm = () => {
        const { email, password } = userDetails;
        const letters = /^[A-Za-z]+$/;

        //email
        if (!EmailValidator.validate(email)) {
            _emailHasErr = true;
            setEmailHasError(true);
            setEmailErrorMessage("Insert a valid email");
        }

        //password
        if (password.length <= 6) {
            _passwordHasErr = true;
            setPasswordHasError(true);
            setPasswordErrorMessage("password Incorrect");
        }

        if (_emailHasErr || _passwordHasErr) return true;
    };

    const handleOnsubmit = e => {
        e.preventDefault();

        const err = handleValidateForm();

        if (err) return;
        dispatch(requestUserLoginStart(userDetails));
    };

    if (firebase.auth.uid) {
        if (history.action === "REPLACE" && !!cart !== false) {
            return <Redirect to="/checkout" />;
        } else {
            return <Redirect to="/" />;
        }
    }

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
                    onSubmit={handleOnsubmit}
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

                <div className="create-account-link">
                    <Link to="/signup">Create account</Link>
                </div>
            </LoginContainer>
        </Layout>
    );
};

export default Login;
