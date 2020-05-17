import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Link, Redirect } from "react-router-dom";
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

    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    const [err, setErr] = useState(true);


    const userInfo = useSelector(state => state.auth.data)
    const cart = useSelector(state => state.cart)
    const isLoading = useSelector(state => state.auth.loading)
    const firebase = useSelector(state => state.firebaseReducer)
    const firebaseErrMessage = useSelector(state => state.auth.error)


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

        if (name === "password" && userDetails.password.length > 5) {
            setPasswordHasError(false);
        }
    };

    const handleValidateForm = e => {
        const { name } = e.target;
        const { email, password } = userDetails;

        //email
        if (name === "email") {
            if (!EmailValidator.validate(email)) {
                setEmailHasError(true);
                setEmailErrorMessage("Insert a valid email");
            }
        }

        //password
        if (name === "password") {
            if (password.length <= 6) {
                setPasswordHasError(true);
                setPasswordErrorMessage("password Incorrect");
            }
        }
    };

    const handleOnsubmit = e => {
        e.preventDefault();
        dispatch(requestUserLoginStart(userDetails));
    };

    useEffect(() => {
        if (
            !emailHasError &&
            !passwordHasError &&
            EmailValidator.validate(userDetails.email) &&
            userDetails.password.length >= 6
        ) {
            setErr(false);
        } else {
            setErr(true);
        }
    }, [emailHasError, passwordHasError, userDetails]);

    if (userInfo) {
        if (!!cart !== false) {
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
                                handleOnBlur={handleValidateForm}
                            />
                        );
                    })}
                    <Button blue_small_text disabled={err}>
                        Login
                    </Button>
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
