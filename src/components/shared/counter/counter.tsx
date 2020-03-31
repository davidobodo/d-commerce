import React from "react";
import styled from "styled-components";

const CounterContainer = styled.div`
    border: 1px solid ${props => props.theme.primaryColor};
    display: flex;
    width: 60px;

    .counter {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .editor {
        flex-basis: 40%;
        background-color: #f7f7f7;
        border-left: 1px solid ${props => props.theme.primaryColor};

        .increase {
            border-bottom: 1px solid ${props => props.theme.primaryColor};
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }

        .decrease {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
    }
`;

const Counter = () => {
    return (
        <CounterContainer>
            <div className="counter">1</div>
            <div className="editor">
                <div className="increase">+</div>
                <div className="decrease">-</div>
            </div>
        </CounterContainer>
    );
};

export default Counter;
