import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Counter from './counter';

afterEach(cleanup);

const defaultProps = {
    initialCount: 4,
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
    expect(queryByTestId('count')).toHaveTextContent('5')
})

it('counter value should decrease when - is clicked', () => {
    const { queryByTestId } = render(<Counter {...defaultProps} />);
    fireEvent.click(queryByTestId('-'))
    expect(queryByTestId('count')).toHaveTextContent('3')
})

it('counter value should not increase above maxValue', () => {
    const _defaultProps = {
        initialCount: 22,
        maxValue: 22,
        setValue: jest.fn()
    }
    const { queryByTestId } = render(<Counter {..._defaultProps} />);
    fireEvent.click(queryByTestId('+'))
    expect(queryByTestId('count')).toHaveTextContent('22')
})

it('counter value should never be zero', () => {
    const _defaultProps = {
        initialCount: 1,
        setValue: jest.fn()
    }
    const { queryByTestId } = render(<Counter {..._defaultProps} />);
    fireEvent.click(queryByTestId('-'))
    expect(queryByTestId('count')).toHaveTextContent('1')
})



