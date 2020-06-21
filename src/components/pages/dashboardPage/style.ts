import styled from "styled-components";

export const DashboardPageContainer = styled.div`
    .header {
        border-bottom: 1px solid ${(props) => props.theme.primaryColor};
        margin-bottom: 60px;
        padding-bottom: 20px;
        h1 {
            font-weight: 400;
            font-size: 38px;
        }
    }

    .section {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-bottom: 1px solid ${(props) => props.theme.primaryColor};
        margin-bottom: 40px;
        padding-bottom: 40px;

        div {
            span {
                margin-right: 20px;
            }
        }

        .msg {
            font-style: italic;
            margin-top: 10px;

            &.fail {
                color: #ff0000;
            }

            &.success {
                color: #2e5c87;
            }
        }
    }
`;
