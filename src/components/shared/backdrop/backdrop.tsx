import React from "react";
import { BackdropProps } from './IBackdrop';
import { BackdropContainer } from './style';





const Backdrop: React.FC<BackdropProps> = ({ showBackdrop, behaviour, color }) => {
    return <BackdropContainer
        showBackdrop={showBackdrop}
        behaviour={behaviour}
        color={color}
    >
    </BackdropContainer>;
};

export default Backdrop;
