import React, { useState, useEffect } from 'react';
import Layout from '../../shared/layout/layout';
import { Link } from 'react-router-dom';

import { AboutContainer, AboutHeader } from './style';


const About: React.FC = () => {
    return (
        <Layout isFooterPresent>
            <AboutContainer>
                <AboutHeader></AboutHeader>
            </AboutContainer>
        </Layout>
    )
};

export default About