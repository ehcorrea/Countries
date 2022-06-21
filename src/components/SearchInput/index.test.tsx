import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react-native';

import { renderWithTheme } from '../../utils/tests/helper';
import SearchInput from '.';

describe('<SearchInput/>', () => {
  it('should render component and change value', () => {
    const mockedOnChangeText = jest.fn();

    const { getByLabelText, getByPlaceholderText } = renderWithTheme(
      <SearchInput onChangeText={mockedOnChangeText} />
    );

    const touchableIcon = getByLabelText('input to search for a country');
    const input = getByPlaceholderText('Search for a country...');

    fireEvent.press(touchableIcon);
    fireEvent.changeText(input, 'new text');

    expect(mockedOnChangeText).toBeCalledWith('new text');
    expect(input.props.value).toEqual('new text');
  });

  it('await to return value', async () => {
    const mockedOnChangeText = jest.fn();

    const { getByPlaceholderText } = renderWithTheme(
      <SearchInput onChangeText={mockedOnChangeText} debounce={300} />
    );

    const input = getByPlaceholderText('Search for a country...');
    fireEvent.changeText(input, 'new text');

    await waitFor(() => {
      expect(mockedOnChangeText).toBeCalledWith('new text');
    });
  });
});
