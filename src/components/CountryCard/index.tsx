import React from 'react';

import * as S from './styles';
import { CountryCardProps } from './types';

const CountryCard = ({
  flags,
  name,
  onPress,
  population,
  ...props
}: CountryCardProps) => {
  return (
    <S.Wrapper
      accessibilityLabel={`press for more info about ${name}`}
      onPress={onPress}
    >
      <S.Flag
        source={{ uri: flags.png }}
        accessibilityLabel={`image of ${name} flah`}
      />
      <S.TextsWrapper>
        <S.CountryName>{name}</S.CountryName>
        <S.InfosWrapper>
          <S.Label>Population:</S.Label>
          <S.Info>
            {new Intl.NumberFormat('en-IN').format(Number(population))}
          </S.Info>
        </S.InfosWrapper>
        <S.InfosWrapper>
          <S.Label>Region:</S.Label>
          <S.Info>{props.region}</S.Info>
        </S.InfosWrapper>
        <S.InfosWrapper>
          <S.Label>Capital:</S.Label>
          <S.Info>{props.capital}</S.Info>
        </S.InfosWrapper>
      </S.TextsWrapper>
    </S.Wrapper>
  );
};

export default CountryCard;
