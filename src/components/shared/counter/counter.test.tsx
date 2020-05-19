import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Counter from './counter';

afterEach(cleanup);

const defaultProps = {
    initialcount: 1,
    maxValue: 10,
    setValue: jest.fn()
}

it('counter should match snapshot', () => {
    const { container } = render(<Counter {...defaultProps} />)
    expect(container).toMatchSnapshot();
})

