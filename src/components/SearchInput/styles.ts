import styled, { css } from 'styled-components/native';
import Ionicon from 'react-native-vector-icons/Ionicons';

import { TextInput } from 'react-native';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.elements};
    border-radius: ${theme.border.radius.xsmall};
    display: flex;
    elevation: 1;
    flex-direction: row;
    height: ${theme.spacings.huge};
    padding-horizontal: ${theme.spacings.large};
    width: 100%;
  `}
`;

export const Input = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.input,
}))`
  ${({ theme }) => css`
    color: ${theme.colors.input};
    flex: 1;
    margin-left: ${theme.spacings.medium};
  `}
`;

export const Icon = styled(Ionicon).attrs(({ theme }) => ({
  color: theme.colors.input,
  name: 'search',
  size: 16,
}))``;
