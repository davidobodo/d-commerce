export interface InputProps {
    label?: string;
    placeholder?: string;
    type?: string;
    required?: boolean;
    name?: string;
    hasError?: boolean;
    errorMessage?: string;
    pattern?: any;
    value?: any;
    handleOnChange?: any;
    handleOnBlur?: any;
    readOnly?: boolean;
}
