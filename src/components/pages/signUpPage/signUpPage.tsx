import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Redirect } from "react-router-dom";
import * as EmailValidator from "email-validator";
import Layout from "../../shared/layout/layout";
import Input from "../../shared/input/input";
import Button from "../../shared/button/button";
import Spinner from "../../shared/spinner/spinner";
import { SignUpContainer } from "./style";
import { requestSignUpStart } from "../../../redux/actions/auth";
import { userInfo } from "os";

const SignUp = () => {
    const dispatch = useDispatch();

    const { isLoading, firebase, firebaseErrMessage, cart, userInfo } = useSelector(
        state => {
            return {
                isLoading: state.auth.loading,
                firebase: state.firebaseReducer,
                firebaseErrMessage: state.auth.error,
                cart: state.cart,
                userInfo: state.auth.data
            };
        },
        shallowEqual
    );

    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const [firstNameHasError, setFirstNameHasError] = useState(false);
    const [lastNameHasError, setLastNameHasError] = useState(false);
    const [emailHasError, setEmailHasError] = useState(false);
    const [passwordHasError, setPasswordHasError] = useState(false);

    const [firstNameErrorMessage, setFirstNameErrorMessage] = useState('');
    const [lastNameErrorMessage, setLastNameErrorMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    const [err, setErr] = useState(true);

    const handleOnChange = e => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    const handleOnKeyDown = e => {
        const { name } = e.target;

        if (e.key === "Enter") return;

        if (name === "firstName") {
            setFirstNameHasError(false);
        }

        if (name === "lastName") {
            setLastNameHasError(false);
        }

        if (name === "email") {
            setEmailHasError(false);
        }

        if (name === "password" && userDetails.password.length > 5) {
            setPasswordHasError(false);
        }
    };

    const handleValidateForm = e => {
        const { name } = e.target;
        const { firstName, lastName, email, password } = userDetails;
        const letters = /^[A-Za-z]+$/;

        //firstname
        if (name === "firstName") {
            if (firstName === "") {
                setFirstNameHasError(true);
                setFirstNameErrorMessage("firstName cannot be empty");
            }
            if (!firstName.match(letters) && firstName !== "") {
                setFirstNameHasError(true);
                setFirstNameErrorMessage("firstName must include only letters");
            }
            if (firstName.length < 3 && firstName !== "") {
                setFirstNameHasError(true);
                setFirstNameErrorMessage(
                    "firstName must be more than 2 letters"
                );
            }
        }

        // lastname;
        if (name === "lastName") {
            if (lastName === "") {
                setLastNameHasError(true);
                setLastNameErrorMessage("lastName cannot be empty");
            }
            if (!lastName.match(letters) && lastName !== "") {
                setLastNameHasError(true);
                setLastNameErrorMessage("lastName must include only letters");
            }
            if (lastName.length < 3 && lastName !== "") {
                setLastNameHasError(true);
                setLastNameErrorMessage("lastName must be more than 2 letters");
            }
        }

        //email
        if (name === "email") {
            if (!EmailValidator.validate(email)) {
                setEmailHasError(true);
                setEmailErrorMessage("Insert a valid email");
            }
        }

        //password
        if (name === "password") {
            if (password.length < 6) {
                setPasswordHasError(true);
                setPasswordErrorMessage(
                    "password must be greater than six characters"
                );
            }
        }
    };

    const handleOnsubmit = e => {
        e.preventDefault();
        dispatch(requestSignUpStart(userDetails));
    };

    useEffect(() => {
        if (
            !firstNameHasError &&
            !lastNameHasError &&
            !emailHasError &&
            !passwordHasError &&
            userDetails.firstName.length >= 2 &&
            userDetails.lastName.length >= 2 &&
            EmailValidator.validate(userDetails.email) &&
            userDetails.password.length >= 6
        ) {
            setErr(false);
        } else {
            setErr(true);
        }
    }, [
        firstNameHasError,
        lastNameHasError,
        emailHasError,
        passwordHasError,
        userDetails
    ]);

    if (userInfo) {

        if (userInfo.localId) {
            if (!!cart !== false) {
                return <Redirect to="/checkout" />;
            } else {
                return <Redirect to="/" />;
            }
        }
    }

    const ipnut_fields = [
        {
            label: "First Name",
            type: "text",
            name: "firstName",
            inputHasError: firstNameHasError,
            inputErrorMessage: firstNameErrorMessage
        },
        {
            label: "Last Name",
            type: "text",
            name: "lastName",
            inputHasError: lastNameHasError,
            inputErrorMessage: lastNameErrorMessage
        },
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
            <SignUpContainer>
                <form
                    action=""
                    onSubmit={handleOnsubmit}
                    onChange={handleOnChange}
                    onKeyDown={handleOnKeyDown}
                    noValidate
                >
                    <h2>Sign Up</h2>

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
                        Sign Up
                    </Button>
                    {!!firebaseErrMessage && (
                        <div className="firebase-err">{firebaseErrMessage}</div>
                    )}
                </form>
            </SignUpContainer>
        </Layout>
    );
};

export default SignUp;
