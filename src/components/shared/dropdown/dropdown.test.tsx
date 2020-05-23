import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
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

it('should not display dropdown initially', () => {
    const { queryByTestId } = render(<Dropdown {...defaultProps} />);
    const dropdown = queryByTestId('options');
    expect(dropdown).toHaveStyle('display : none')
})

it('should display dropdown on click', () => {
    const { queryByTestId } = render(<Dropdown {...defaultProps} />);
    fireEvent.click(queryByTestId('dropdown'))
    expect(queryByTestId('options')).toHaveStyle('display : block')
})