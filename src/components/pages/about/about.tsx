import React from "react";
import Layout from "../../shared/layout/layout";

import { AboutContainer, AboutHeader } from "./style";

const About: React.FC = () => {
    return (
        <Layout isFooterPresent>
            <AboutContainer>
                <AboutHeader></AboutHeader>
            </AboutContainer>
        </Layout>
    );
};

export default About;
