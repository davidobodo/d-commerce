import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../shared/layout/layout";
import Input from "../../shared/input/input";
import Button from "../../shared/button/button";
import { SignUpContainer } from "./style";
import { requestSignUpStart } from "../../../redux/actions/auth";

const ipnut_fields = [
    {
        label: "First Name",
        type: "text"
    },
    {
        label: "Last Name",
        type: "text"
    },
    {
        label: "Email",
        type: "email"
    },
    {
        label: "Password",
        type: "password"
    }
];

const SignUp = () => {
    const dispatch = useDispatch();
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
        console.log(userDetails);
        dispatch(requestSignUpStart(userDetails));
    };
    return (
        <Layout isFooterPresent>
            <SignUpContainer>
                <form
                    action=""
                    onSubmit={handleOnsubmit}
                    onChange={handleOnChange}
                    noValidate
                >
                    <h2>Sign Up</h2>
                    {ipnut_fields.map((field, i) => {
                        const { label, type } = field;
                        return <Input key={i} label={label} type={type} />;
                    })}
                    <Button blue_small_text>Sign Up</Button>
                </form>
            </SignUpContainer>
        </Layout>
    );
};

export default SignUp;
