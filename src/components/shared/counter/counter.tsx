import React, { useState } from "react";
import styled from "styled-components";
import { CounterProps } from "../../../interfaces/ICounter";

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

const Counter: React.FC<CounterProps> = ({ maxValue }) => {
    const [count, setCount] = useState(1);
    maxValue = 10;

    const handleSetCount = e => {
        if (e.target.id === "+") {
            if (count === maxValue) return;
            setCount(count + 1);
        } else if (e.target.id === "-") {
            if (count === 1) return;
            setCount(count - 1);
        }
    };
    return (
        <CounterContainer>
            <div className="counter">{count}</div>
            <div className="editor" onClick={handleSetCount}>
                <div id="+" className="increase btn">
                    +
                </div>
                <div id="-" className="decrease btn">
                    -
                </div>
            </div>
        </CounterContainer>
    );
};

export default Counter;
