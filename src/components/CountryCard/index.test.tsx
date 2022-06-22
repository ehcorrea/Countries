import React from 'react';
import { fireEvent } from '@testing-library/react-native';

import { renderWithTheme } from '../../utils/tests/helper';
import countryMock from '../../service/countries/mock';

import CountryCard from '.';

describe('<CountryCard/>', () => {
  it('should render component and change value', () => {
    const mockedOnPress = jest.fn();

    const { getByLabelText, getByText } = renderWithTheme(
      <CountryCard onPress={mockedOnPress} {...countryMock} />
    );

    const toucheableElement = getByLabelText(
      `press for more info about ${countryMock.name}`
    );

    fireEvent.press(toucheableElement);
    expect(mockedOnPress).toBeCalled();

    expect(getByText(countryMock.name)).toBeTruthy();
    expect(getByText(countryMock.region)).toBeTruthy();
    expect(getByText(countryMock.capital)).toBeTruthy();
    expect(
      getByText(
        new Intl.NumberFormat('en-IN').format(Number(countryMock.population))
      )
    ).toBeTruthy();
  });
});
