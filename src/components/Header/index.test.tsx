import React from 'react';

import { renderWithTheme } from '../../utils/tests/helper';
import Header from '.';

describe('<header/>', () => {
  it('should render component', () => {
    const { getByText } = renderWithTheme(<Header />);
    const textElement = getByText('Where in the World?');

    expect(textElement).toBeTruthy();
  });
});
