import React, { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Redirect } from "react-router-dom";
import * as EmailValidator from "email-validator";
import Layout from "../../shared/layout/layout";
import Input from "../../shared/input/input";
import Button from "../../shared/button/button";
import Spinner from "../../shared/spinner/spinner";
import { SignUpContainer } from "./style";
import { requestSignUpStart } from "../../../redux/actions/auth";

const SignUp = () => {
    const dispatch = useDispatch();

    const { isLoading, firebase, firebaseErrMessage } = useSelector(state => {
        return {
            isLoading: state.signup.loading,
            firebase: state.firebaseReducer,
            firebaseErrMessage: state.signup.error
        };
    }, shallowEqual);
    console.log(firebaseErrMessage);

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

    const [firstNameErrorMessage, setFirstNameErrorMessage] = useState();
    const [lastNameErrorMessage, setLastNameErrorMessage] = useState();
    const [emailErrorMessage, setEmailErrorMessage] = useState();
    const [passwordErrorMessage, setPasswordErrorMessage] = useState();

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

        if (name === "password" && userDetails.password.length > 6) {
            setPasswordHasError(false);
        } else {
            setPasswordHasError(true);
        }
    };

    const handleOnsubmit = () => {
        if (
            !firstNameHasError &&
            !lastNameHasError &&
            !emailHasError &&
            !passwordHasError
        ) {
            dispatch(requestSignUpStart(userDetails));
        }
    };

    const handleValidateForm = e => {
        e.preventDefault();
        const { firstName, lastName, email, password } = userDetails;
        const letters = /^[A-Za-z]+$/;

        //firstname
        if (firstName === "") {
            setFirstNameHasError(true);
            setFirstNameErrorMessage("firstName cannot be empty");
        }
        if (!firstName.match(letters)) {
            setFirstNameHasError(true);
            setFirstNameErrorMessage("firstName must include only letters");
        }

        // lastname;
        if (lastName === "") {
            setLastNameHasError(true);
            setLastNameErrorMessage("lastName cannot be empty");
        }
        if (!lastName.match(letters)) {
            setLastNameHasError(true);
            setLastNameErrorMessage("lastName must include only letters");
        }

        //email
        if (!EmailValidator.validate(email)) {
            setEmailHasError(true);
            setEmailErrorMessage("Insert a valid email");
        }

        //password
        if (password.length <= 6) {
            setPasswordHasError(true);
            setPasswordErrorMessage(
                "password must be greater than six characters"
            );
        }

        handleOnsubmit();
    };

    if (firebase.auth.uid) {
        return <Redirect to="/" />;
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
                    onSubmit={handleValidateForm}
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
                            />
                        );
                    })}
                    <Button blue_small_text>Sign Up</Button>
                    {!!firebaseErrMessage && (
                        <div className="firebase-err">{firebaseErrMessage}</div>
                    )}
                </form>
            </SignUpContainer>
        </Layout>
    );
};

export default SignUp;
