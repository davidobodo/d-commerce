import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import "@testing-library/jest-dom";

import Button from './button';

afterEach(cleanup);

it('Button should render text passed as child', () => {
    const { queryByText } = render(<Button children={'submit'} />)
    expect(queryByText('submit')).toBeTruthy();
})

it('Button should be enabled', () => {
    const props = {
        children: 'submit',
        disabled: false
    }
    const { queryByText } = render(<Button {...props} />)
    expect(queryByText('submit')).toBeEnabled();
})

it('Button should be disabled', () => {
    const props = {
        children: 'submit',
        disabled: true
    }
    const { queryByText } = render(<Button {...props} />)
    expect(queryByText('submit')).toBeDisabled();
})