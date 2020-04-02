import React from "react";
import styled from "styled-components";
import Layout from "../../shared/layout/layout";
import Input from "../../shared/input/input";
import Button from "../../shared/button/button";
import { devices } from "../../../styling/devices";

const ipnut_fields = [
    {
        label: "Email",
        type: "email"
    },
    {
        label: "Password",
        type: "password"
    }
];

const LoginContainer = styled.div`
    margin-top: 50px;
    margin-bottom: 100px;

    form {
        border: 1px solid ${props => props.theme.primaryColor};
        padding: 30px 10px;

        @media ${devices.tablet} {
            max-width: 500px;
            margin: 0 auto;
        }

        h2 {
            font-weight: 400;
            margin-bottom: 20px;
        }

        div {
            @media ${devices.tablet} {
                width: 100%;
            }
        }
    }

    //-------------------------------------------------------------------------
    //resets on some components on this page
    //-------------------------------------------------------------------------

    h6 {
        font-size: 14px;
        margin-bottom: 10px;
        font-weight: 800;
    }
`;

const Login = () => {
    return (
        <Layout isFooterPresent>
            <LoginContainer>
                <form action="">
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
