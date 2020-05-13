import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import "@testing-library/jest-dom";

import Button from './button';

afterEach(cleanup);

it('Button should render text passed as child', () => {
    const { queryByText } = render(<Button children={'submit'} />)
    expect(queryByText('submit')).toBeTruthy();
})