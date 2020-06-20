import styled from "styled-components";

export const DashboardPageContainer = styled.div`
    .header {
        border-bottom: 1px solid ${(props) => props.theme.primaryColor};
        margin-bottom: 20px;
        padding-bottom: 20px;
        h1 {
            font-weight: 400;
            font-size: 38px;
        }
    }

    .section {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid ${(props) => props.theme.primaryColor};
        margin-bottom: 20px;
        padding-bottom: 20px;
    }
`;
