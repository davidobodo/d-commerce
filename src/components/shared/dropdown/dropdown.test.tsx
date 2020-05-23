import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Dropdown from './dropdown';


afterEach(cleanup);

const defaultProps = {
    options: [],
    selectedOption: jest.fn()
}

it('dropdown should match snapshot', () => {
    const { container } = render(<Dropdown {...defaultProps} />)
    expect(container.firstChild).toMatchSnapshot()
})

it('dropdown should render initially with a default value of Choose an option', () => {
    const { getByLabelText } = render(<Dropdown {...defaultProps} />);
    const input = getByLabelText('input-field') as HTMLInputElement;
    expect(input.value).toBe('Choose an option')
})