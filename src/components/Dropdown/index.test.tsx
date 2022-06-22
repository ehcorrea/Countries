import React from 'react';
import { fireEvent } from '@testing-library/react-native';

import { renderWithTheme } from '../../utils/tests/helper';
import Dropdown from '.';
import { Option } from './types';

const OPTIONS_MOCK: Option[] = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
];

describe('<Dropdown/>', () => {
  it('should render component and change value', () => {
    const mockedOnChangeValue = jest.fn();

    const {
      getAllByLabelText,
      getAllByText,
      getByLabelText,
      getByText,
      queryByLabelText,
      queryByText,
    } = renderWithTheme(
      <Dropdown
        onChangeValue={mockedOnChangeValue}
        placeHolder="Filter by region"
        options={OPTIONS_MOCK}
      />
    );

    const input = getByLabelText('Filter by region');
    const optionsListWrapper = getByLabelText('options list');
    const options = getAllByLabelText(/option /);

    //initial state
    expect(optionsListWrapper.props.accessibilityState).toEqual({
      expanded: false,
    });
    expect(queryByLabelText('Clear Option')).toBeFalsy();
    expect(options.length).toEqual(3);

    //press input flow
    fireEvent.press(input);
    expect(optionsListWrapper.props.accessibilityState).toEqual({
      expanded: true,
    });

    //select option flow
    fireEvent.press(options[0]);
    expect(mockedOnChangeValue).toBeCalledWith(OPTIONS_MOCK[0].value);
    expect(optionsListWrapper.props.accessibilityState).toEqual({
      expanded: false,
    });
    expect(getAllByText(OPTIONS_MOCK[0].label).length).toEqual(2);
    expect(queryByText('Filter by region')).toBeFalsy();

    //clear input flow
    fireEvent.press(getByLabelText('Clear Option'));
    expect(mockedOnChangeValue).toBeCalledWith('');
    expect(getByText('Filter by region')).toBeTruthy();
  });
});
