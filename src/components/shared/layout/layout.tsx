import React, { useState } from "react";
import styled from "styled-components";

import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import Footer from "../footer/footer";

import Hamburger from "../hamburger/hamburger";
import Backdrop from "../backdrop/backdrop";
import { devices } from "../../../styling/devices";

const LayoutContainer = styled.div`
    height: 100vh;
`;

const Body = styled.div`
    padding: 0 10vw;
    background-color: #ffffff;
    padding: 80px 20px 0px;

    @media ${devices.tablet} {
        max-width: 1440px;
        margin: 0 auto;
        padding-left: ${props => props.theme.padding};
        padding-right: ${props => props.theme.padding};
    }
`;

interface Props {
    children: any;
    isFooterPresent: boolean;
}

const Layout: React.FunctionComponent<Props> = ({
    children,
    isFooterPresent
}) => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleShowNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <LayoutContainer>
            <Backdrop isNavbarOpen={isNavbarOpen} />
            <Hamburger
                handleShowNavbar={handleShowNavbar}
                isNavbarOpen={isNavbarOpen}
            />
            <Navbar />
            <Sidebar isNavbarOpen={isNavbarOpen} />
            <Body>{children}</Body>
            {isFooterPresent && <Footer />}
        </LayoutContainer>
    );
};

export default Layout;
