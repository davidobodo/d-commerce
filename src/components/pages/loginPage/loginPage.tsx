import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../shared/layout/layout";
import Input from "../../shared/input/input";
import Button from "../../shared/button/button";
import { requestUserLoginStart } from "../../../redux/actions/auth";
import { LoginContainer } from "./style";

const ipnut_fields = [
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

const Login = () => {
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
        dispatch(requestUserLoginStart(userDetails));
    };
    return (
        <Layout isFooterPresent>
            <LoginContainer>
                <form
                    action=""
                    onSubmit={handleOnsubmit}
                    onChange={handleOnChange}
                    noValidate
                >
                    <h2>Login</h2>
                    {ipnut_fields.map((field, i) => {
                        const { label, type } = field;
                        return <Input key={i} label={label} type={type} />;
                    })}
                    <Button blue_small_text>Login</Button>
                </form>
            </LoginContainer>
        </Layout>
    );
};

export default Login;
