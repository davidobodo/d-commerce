import React from "react";
import { SpinnerContainer } from "./style";
import Backdrop from '../backdrop/backdrop';

const Spinner = () => {
    return (
        <>
            <Backdrop color='white' showBackdrop={true} />
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
