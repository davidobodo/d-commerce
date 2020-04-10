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
    console.log("component renders");
    const dispatch = useDispatch();

    const { isLoading, firebase } = useSelector(state => {
        return {
            isLoading: state.signup.loading,
            firebase: state.firebaseReducer
        };
    }, shallowEqual);

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

    const handleValidateForm = () => {
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
            setPasswordErrorMessage("password must be greater than six");
        }
    };

    const handleOnsubmit = e => {
        handleValidateForm();
        e.preventDefault();
        // dispatch(requestSignUpStart(userDetails));
    };

    if (firebase.auth.uid) {
        return <Redirect to="/" />;
    }

    const ipnut_fields = [
        {
            label: "First Name",
            type: "text",
            name: "firstName",
            inputhasError: firstNameHasError,
            inputerrorMessage: firstNameErrorMessage
        },
        {
            label: "Last Name",
            type: "text",
            name: "lastName",
            inputhasError: lastNameHasError,
            inputerrorMessage: lastNameErrorMessage
        },
        {
            label: "Email",
            type: "email",
            name: "email",
            inputhasError: emailHasError,
            inputerrorMessage: emailErrorMessage
        },
        {
            label: "Password",
            type: "password",
            name: "password",
            inputhasError: passwordHasError,
            inputerrorMessage: passwordErrorMessage
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
                    noValidate
                >
                    <h2>Sign Up</h2>

                    {ipnut_fields.map((field, i) => {
                        const {
                            label,
                            type,
                            name,
                            inputhasError,
                            inputerrorMessage
                        } = field;
                        return (
                            <Input
                                key={i}
                                label={label}
                                type={type}
                                name={name}
                                hasError={inputhasError}
                                errorMessage={inputerrorMessage}
                            />
                        );
                    })}
                    <Button blue_small_text>Sign Up</Button>
                </form>
            </SignUpContainer>
        </Layout>
    );
};

export default SignUp;
