import React from "react";
import { SpinnerContainer, WhiteBackdrop } from "./style";

const Spinner = () => {
    return (
        <>
            <WhiteBackdrop></WhiteBackdrop>
            <SpinnerContainer>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </SpinnerContainer>
        </>
    );
};

export default Spinner;
