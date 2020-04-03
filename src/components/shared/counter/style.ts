import styled from "styled-components";

export const CounterContainer = styled.div`
    border: 1px solid ${props => props.theme.primaryColor};
    display: flex;
    width: 60px;

    .counter {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
    }

    .editor {
        flex-basis: 40%;
        background-color: #f7f7f7;
        border-left: 1px solid ${props => props.theme.primaryColor};

        .increase {
            border-bottom: 1px solid ${props => props.theme.primaryColor};
        }

        .btn {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            &:hover {
                background-color: ${props => props.theme.primaryColor};
            }
        }
    }
`;
