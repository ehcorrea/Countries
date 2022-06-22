import styled, { css } from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    flex: 1;
    padding-horizontal: ${theme.spacings.medium};
    padding-top: ${theme.spacings.large};
    align-items: center;
  `}
`;

export const DropdownWrapper = styled.View`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xxlarge};
    padding-bottom: ${theme.spacings.large};
    width: 100%;
  `}
`;

export const ListWrapper = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding-horizontal: ${theme.spacings.xxlarge};
    width: 100%;
    justify-content: center;
  `}
`;

export const ListSeparator = styled.View`
  ${({ theme }) => css`
    height: ${theme.spacings.xlarge};
  `}
`;
