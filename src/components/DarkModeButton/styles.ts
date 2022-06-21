import styled, { css } from 'styled-components/native';
import Ionicon from 'react-native-vector-icons/Ionicons';

export const Wrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-weight: ${theme.font.wight.bold};
    padding-left: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.medium};
  `}
`;

export const Icon = styled(Ionicon).attrs(({ theme }) => ({
  color: theme.colors.text,
  name: 'moon-outline',
  size: 16,
}))``;
