import React from 'react';
import Layout from '../../shared/layout/layout';
import styled from 'styled-components';

const ErrorPageContainer = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`

const ErrorPageUrl = () => {
    return (
        <Layout isFooterPresent={true}>
            <ErrorPageContainer>
                <h1>404: PAGE NOT FOUND</h1>
                <h2>Page doesnt exist</h2>
            </ErrorPageContainer>
        </Layout>
    )
}

export default ErrorPageUrl;