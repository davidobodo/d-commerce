import styled from 'styled-components';
import { devices } from '../../../styling/devices';


export const LayoutContainer = styled.div`
    height: 100vh;
`;

export const Body = styled.div`
    padding: 0 10vw;
    background-color: #ffffff;
    padding: 80px 20px 0px;

    @media ${devices.tablet} {
        max-width: 1440px;
        min-height: 80vh;
        margin: 0 auto;
        padding-left: ${props => props.theme.padding};
        padding-right: ${props => props.theme.padding};
    }
`;