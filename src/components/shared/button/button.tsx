import React, { memo } from "react";
import { ButtonContainer } from "./style";
import { ButtonProps } from "./IButton";

const Button: React.FC<ButtonProps> = ({
    children,
    blue_small_text,
    ash_small_text,
    form,
    disabled
}) => {
    return (
        <ButtonContainer
            blue_small_text={blue_small_text}
            ash_small_text={ash_small_text}
            form={form}
            disabled={disabled}
            data-testid='button'
        >
            {children}
        </ButtonContainer>
    );
};

export default memo(Button);
