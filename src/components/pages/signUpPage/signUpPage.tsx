import React, { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Layout from "../../shared/layout/layout";
import Input from "../../shared/input/input";
import Button from "../../shared/button/button";
import Spinner from "../../shared/spinner/spinner";
import { SignUpContainer } from "./style";
import { requestSignUpStart } from "../../../redux/actions/auth";

const ipnut_fields = [
    {
        label: "First Name",
        type: "text",
        name: "firstName"
    },
    {
        label: "Last Name",
        type: "text",
        name: "lastName"
    },
    {
        label: "Email",
        type: "email",
        name: "email"
    },
    {
        label: "Password",
        type: "password",
        name: "password"
    }
];

const SignUp = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.signup.loading, shallowEqual);
    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    const handleOnChange = e => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };
    const handleOnsubmit = e => {
        e.preventDefault();
        dispatch(requestSignUpStart(userDetails));
    };

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
                        const { label, type, name } = field;
                        return (
                            <Input
                                key={i}
                                label={label}
                                type={type}
                                name={name}
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
