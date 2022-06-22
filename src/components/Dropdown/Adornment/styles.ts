import styled from 'styled-components/native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Animated } from 'react-native';

export const IndicatorIconWrapper = styled(Animated.View)``;

export const IndicatorIcon = styled(Ionicon).attrs(({ theme }) => ({
  color: theme.colors.input,
  name: 'chevron-down-outline',
  size: 16,
}))``;

export const ClearIcon = styled(Ionicon).attrs(({ theme }) => ({
  color: theme.colors.input,
  name: 'close-outline',
  size: 16,
}))``;
