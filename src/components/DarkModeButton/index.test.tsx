import React from 'react';
import { fireEvent } from '@testing-library/react-native';

import { renderWithTheme } from '../../utils/tests/helper';
import DarkMode from '.';

describe('<DarkMode/>', () => {
  it('should render component', () => {
    const { getByLabelText } = renderWithTheme(<DarkMode />);
    let textElement = getByLabelText('change theme to dark');

    fireEvent.press(textElement);

    textElement = getByLabelText('change theme to default');
    expect(textElement).toBeTruthy();
  });
});
