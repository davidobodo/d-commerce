import React from "react";
import { BackdropProps } from './IBackdrop';
import { BackdropContainer } from './style';





const Backdrop: React.FC<BackdropProps> = ({ showBackdrop, blackBackdrop, whiteBackdrop, behaviour }) => {
    return <BackdropContainer
        showBackdrop={showBackdrop}
        blackBackdrop={blackBackdrop}
        whiteBackdrop={whiteBackdrop}
        behaviour={behaviour}
    >
    </BackdropContainer>;
};

export default Backdrop;
