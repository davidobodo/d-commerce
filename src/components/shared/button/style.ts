import styled from "styled-components";

export const ButtonContainer = styled.button`
    background-color: #2e5c87;
    border-bottom: 1px solid ${props => props.theme.primaryColor};
    color: #ffffff;
    border: none;
    font-size: 12px;
    padding: 12px 25px;
`;
