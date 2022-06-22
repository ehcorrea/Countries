import React, { useState, useRef, useEffect } from 'react';
import { Animated, ScrollView } from 'react-native';

import Adornment from './Adornment';
import * as S from './styles';
import { DropdownProps, Option } from './types';

const CLEAR_OPTION: Option = {
  label: 'Clear option',
  value: '',
};

const Dropdown = ({
  options,
  onChangeValue,
  placeHolder = 'Select a option',
}: DropdownProps) => {
  const [inputValue, setInputValue] = useState<Option>(CLEAR_OPTION);
  const [hasFocus, setHasFocus] = useState(false);
  const optionsWrapperAnimatedValue = useRef(new Animated.Value(0)).current;
  const hasValue = !!inputValue.value;

  const handleOnChangeValue = (value: Option) => {
    handleFocus();
    setInputValue(value);
    onChangeValue?.(value.value);
  };

  const handleFocus = () => {
    setHasFocus((prevState) => !prevState);
  };

  const handleClear = () => {
    setInputValue(CLEAR_OPTION);
    onChangeValue?.('');
  };

  useEffect(() => {
    const animateOptionsWraper = () => {
      if (hasFocus) {
        return Animated.timing(optionsWrapperAnimatedValue, {
          toValue: 350,
          duration: 300,
          useNativeDriver: false,
        }).start();
      }

      return Animated.timing(optionsWrapperAnimatedValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    };

    animateOptionsWraper();
  }, [optionsWrapperAnimatedValue, hasFocus]);

  return (
    <S.Wrapper>
      <S.Input onPress={handleFocus} accessibilityLabel={placeHolder}>
        <S.Label>{hasValue ? inputValue.label : placeHolder}</S.Label>
        <Adornment
          hasFocus={hasFocus}
          hasValue={!!inputValue.value}
          onPress={handleClear}
        />
      </S.Input>
      <S.OptionsWraper
        accessibilityLabel="options list"
        accessibilityState={{ expanded: hasFocus }}
        style={{
          maxHeight: optionsWrapperAnimatedValue,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {options.map((option) => (
            <S.Option
              key={option.value}
              onPress={() => handleOnChangeValue(option)}
              accessibilityLabel={`option ${option.label}`}
            >
              <S.Label>{option.label}</S.Label>
            </S.Option>
          ))}
        </ScrollView>
      </S.OptionsWraper>
    </S.Wrapper>
  );
};

export default Dropdown;
