import React, { useRef, useEffect } from 'react';
import { Animated, TouchableOpacity } from 'react-native';

import * as S from './styles';
import { IndicatorProps } from './types';

const Adornment = ({ hasFocus, hasValue, onPress }: IndicatorProps) => {
  const indicatorIconWrapperAnimatedValue = useRef(
    new Animated.Value(45)
  ).current;

  useEffect(() => {
    const animateIndicatorIcon = () => {
      if (hasFocus && !hasValue) {
        return Animated.timing(indicatorIconWrapperAnimatedValue, {
          toValue: 1,
          duration: 200,
          useNativeDriver: false,
        }).start();
      }

      return Animated.timing(indicatorIconWrapperAnimatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    };

    animateIndicatorIcon();
  }, [indicatorIconWrapperAnimatedValue, hasFocus, hasValue]);

  const indicatorIconRotation = indicatorIconWrapperAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <TouchableOpacity disabled={!hasValue} onPress={onPress}>
      <S.IndicatorIconWrapper
        style={{
          transform: [
            {
              rotate: indicatorIconRotation,
            },
          ],
        }}
      >
        {hasValue ? (
          <S.ClearIcon accessibilityLabel="Clear Option" />
        ) : (
          <S.IndicatorIcon />
        )}
      </S.IndicatorIconWrapper>
    </TouchableOpacity>
  );
};

export default Adornment;
