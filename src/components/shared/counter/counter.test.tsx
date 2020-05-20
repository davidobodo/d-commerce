import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Counter from './counter';

afterEach(cleanup);

const defaultProps = {
    initialcount: 4,
    maxValue: 10,
    setValue: jest.fn()
}

it('counter should match snapshot', () => {
    const { container } = render(<Counter {...defaultProps} />)
    expect(container.firstChild).toMatchSnapshot();
})

it('counter value should increase when + is clicked', () => {
    const { queryByTestId } = render(<Counter {...defaultProps} />);
    fireEvent.click(queryByTestId('+'))
    expect(queryByTestId('count')).toBe(5)
})

