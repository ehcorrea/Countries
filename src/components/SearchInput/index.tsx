import React, { useState, useRef, useEffect } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';

import { useDebounce } from '../../hooks';

import * as S from './styles';
import { SearchInputProps } from './types';

const SearchInput = ({ onChangeText, debounce }: SearchInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, debounce);
  const inputRef = useRef<TextInput>(null);

  const handleChangeValue = (text: string) => {
    setInputValue(text);
    if (!debounce) {
      onChangeText?.(text);
    }
  };

  const handleFocusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (debounce) {
      onChangeText?.(debouncedValue);
    }
  }, [debounce, debouncedValue, onChangeText]);

  return (
    <S.Wrapper>
      <TouchableOpacity
        accessibilityLabel="input to search for a country"
        onPress={handleFocusInput}
      >
        <S.Icon />
      </TouchableOpacity>
      <S.Input
        onChangeText={handleChangeValue}
        placeholder="Search for a country..."
        ref={inputRef}
        value={inputValue}
      />
    </S.Wrapper>
  );
};

export default SearchInput;
