import React, { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Redirect } from "react-router-dom";
import Layout from "../../shared/layout/layout";
import Input from "../../shared/input/input";
import Button from "../../shared/button/button";
import Spinner from "../../shared/spinner/spinner";
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

    const { isLoading, firebase } = useSelector(state => {
        return {
            isLoading: state.login.loading,
            firebase: state.firebaseReducer
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

    const handleOnsubmit = e => {
        e.preventDefault();
        dispatch(requestUserLoginStart(userDetails));
    };

    if (firebase.auth.uid) {
        return <Redirect to="/" />;
    }
    return (
        <Layout isFooterPresent>
            {isLoading && <Spinner />}
            <LoginContainer>
                <form
                    action=""
                    onSubmit={handleOnsubmit}
                    onChange={handleOnChange}
                    noValidate
                >
                    <h2>Login</h2>
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
                    <Button blue_small_text>Login</Button>
                </form>
            </LoginContainer>
        </Layout>
    );
};

export default Login;
