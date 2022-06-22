import styled, { css } from 'styled-components/native';
import Ionicon from 'react-native-vector-icons/Ionicons';

export const Wrapper = styled.SafeAreaView`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.background};
    flex: 1;
    justify-content: center;
  `}
`;

export const Flag = styled.Image`
  ${({ theme }) => css`
    height: 160px;
    margin-top: ${theme.spacings.xlarge};
  `}
`;

export const ContentWrapper = styled.View`
  ${({ theme }) => css`
    padding: ${theme.spacings.large};
    align-self: stretch;
  `}
`;

export const TextsWrapper = styled.View`
  ${({ theme }) => css`
    padding-horizontal: ${theme.spacings.large};
    padding-vertical: ${theme.spacings.xlarge};
  `}
`;

export const Container = styled.View`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.wight.xbold};
    margin-vertical: ${theme.spacings.xlarge};
    font-family: ${theme.font.family.nunitoSans};
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

export const BordersWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.colors.elements};
    elevation: 1;
    max-width: 100px;
    padding-horizontal: ${theme.spacings.large};
    padding-vertical: ${theme.spacings.xsmall};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const ButtonLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
  `}
`;

export const Separator = styled.View`
  margin: 5px;
`;

export const BackIcon = styled(Ionicon).attrs(({ theme }) => ({
  color: theme.colors.input,
  name: 'arrow-back',
  size: 16,
}))``;
