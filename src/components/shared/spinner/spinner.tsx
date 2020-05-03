import React from "react";
import { SpinnerContainer, WhiteBackdrop } from "./style";
import Backdrop from '../backdrop/backdrop';

const Spinner = () => {
    return (
        <>
            <Backdrop color='white' showBackdrop={true} />
            {/* <WhiteBackdrop></WhiteBackdrop> */}
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
