import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.elements};
    display: flex;
    elevation: 2;
    flex-direction: row;
    height: 80px;
    justify-content: space-between;
    padding: ${theme.spacings.medium};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.wight.bold};
  `}
`;
