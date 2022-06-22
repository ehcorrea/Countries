import styled, { css } from 'styled-components/native';
import { Animated } from 'react-native';

export const Wrapper = styled.View`
  position: relative;
  width: 60%;
`;

export const Input = styled.TouchableOpacity`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.elements};
    border-radius: ${theme.border.radius.xsmall};
    elevation: 1;
    flex-direction: row;
    padding: ${theme.spacings.medium};
    justify-content: space-between;
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.input};
    font-size: ${theme.font.sizes.small};
  `}
`;

export const OptionsWraper = styled(Animated.View)`
  ${({ theme }) => css`
    background-color: ${theme.colors.elements};
    border-radius: ${theme.border.radius.xsmall};
    color: ${theme.colors.input};
    elevation: 1;
    font-size: ${theme.font.sizes.small};
    left: 0;
    position: absolute;
    right: 0;
    top: 55px;
    z-index: 1;
  `}
`;

export const Option = styled.TouchableOpacity`
  ${({ theme }) => css`
    padding-horizontal: ${theme.spacings.xlarge};
    padding-vertical: ${theme.spacings.xxsmall};
  `}
`;
