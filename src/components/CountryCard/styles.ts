import styled, { css } from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.colors.elements};
    border-radius: ${theme.border.radius.xsmall};
    elevation: 2;
    max-width: 320px;
  `}
`;

export const Flag = styled.Image`
  ${({ theme }) => css`
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    border-radius: ${theme.border.radius.xsmall};
    height: 160px;
  `}
`;

export const TextsWrapper = styled.View`
  ${({ theme }) => css`
    padding-horizontal: ${theme.spacings.large};
    padding-vertical: ${theme.spacings.xlarge};
  `}
`;

export const CountryName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.wight.xbold};
    margin-bottom: ${theme.spacings.small};
  `}
`;

export const InfosWrapper = styled.View`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.wight.bold};
    color: ${theme.colors.text};
    margin-right: ${theme.spacings.xsmall};
  `}
`;

export const Info = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.wight.light};
    color: ${theme.colors.text};
  `}
`;
