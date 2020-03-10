import React, { useState } from "react";
import styled from "styled-components";

import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import Footer from "../footer/footer";

import Hamburger from "../hamburger/hamburger";
import Backdrop from "../backdrop/backdrop";

const LayoutContainer = styled.div`
    height: 100vh;
`;

const Body = styled.div`
    height: calc(100vh - 140px);
    padding: 0 10vw;
    background-color: #ffffff;

    @media (max-width: 765px) {
        padding: 80px 20px 0px;
        height: auto;
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
            <Sidebar />
            <Body>{children}</Body>
            {isFooterPresent && <Footer />}
        </LayoutContainer>
    );
};

export default Layout;
