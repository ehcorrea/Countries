import React from 'react';

import { renderWithTheme } from '../../utils/tests/helper';
import DarkMode from '.';

describe('<header/>', () => {
  it('should render component', () => {
    const { getByText } = renderWithTheme(<DarkMode />);
    const textElement = getByText('Where in the World?');

    expect(textElement).toBeTruthy();
  });
});
