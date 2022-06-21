import styled, { css } from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
  `}
`;
