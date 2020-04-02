import React from "react";
import styled from "styled-components";
import Layout from "../../shared/layout/layout";
import Input from "../../shared/input/input";
import Button from "../../shared/button/button";

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

const SignUpContainer = styled.div`
    margin-top: 50px;
    margin-bottom: 100px;

    form {
        border: 1px solid ${props => props.theme.primaryColor};
        padding: 30px 10px;

        h2 {
            font-weight: 400;
            margin-bottom: 20px;
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

const SignUp = () => {
    return (
        <Layout isFooterPresent>
            <SignUpContainer>
                <form action="">
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
