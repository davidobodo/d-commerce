import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #000000;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    i {
        color: #ffffff;
        font-size: 40px;
        margin-right: 40px;
        cursor: pointer;
    }
`;

const Footer = () => {
    return <FooterContainer></FooterContainer>;
};

export default Footer;
