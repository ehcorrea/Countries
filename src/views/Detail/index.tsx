import React, { useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { useGetCountryByCodeQuery } from '../../service/countries';
import { ViewDetailProps } from '../../routes/types';

import * as S from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const Detail = () => {
  const { goBack } = useNavigation();
  const {
    params: { code },
  } = useRoute<ViewDetailProps>();

  const [nextCountry, setNextCountry] = useState('');
  const { data, isLoading } = useGetCountryByCodeQuery(nextCountry || code);

  const handleNextCountry = (alphaCode: string) => {
    setNextCountry(alphaCode);
  };

  const handleGoBack = () => {
    goBack();
  };

  return (
    <S.Wrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <S.ContentWrapper>
            <S.Button onPress={handleGoBack}>
              <S.BackIcon />
              <S.ButtonLabel>Back</S.ButtonLabel>
            </S.Button>

            <S.Flag
              source={{
                uri: data?.flags.png,
              }}
            />

            <S.Title>{data?.name}</S.Title>
            <S.Container>
              <S.InfosWrapper>
                <S.Label>Native Name:</S.Label>
                <S.Info>{data?.nativeName}</S.Info>
              </S.InfosWrapper>
              <S.InfosWrapper>
                <S.Label>Population:</S.Label>
                <S.Info>
                  {new Intl.NumberFormat('en-IN').format(
                    Number(data?.population)
                  )}
                </S.Info>
              </S.InfosWrapper>
              <S.InfosWrapper>
                <S.Label>Region:</S.Label>
                <S.Info>{data?.region}</S.Info>
              </S.InfosWrapper>
              <S.InfosWrapper>
                <S.Label>Sub Region:</S.Label>
                <S.Info>{data?.subregion}</S.Info>
              </S.InfosWrapper>
              <S.InfosWrapper>
                <S.Label>Capital:</S.Label>
                <S.Info>{data?.capital}</S.Info>
              </S.InfosWrapper>
            </S.Container>

            <S.Container>
              <S.InfosWrapper>
                <S.Label>Top Level Domain:</S.Label>
                <S.Info>{data?.topLevelDomain}</S.Info>
              </S.InfosWrapper>
              <S.InfosWrapper>
                <S.Label>Currencies:</S.Label>
                <S.Info>
                  {data?.currencies.map((currency) => currency.name).join(', ')}
                </S.Info>
              </S.InfosWrapper>
              <S.InfosWrapper>
                <S.Label>Languages:</S.Label>
                <S.Info>
                  {data?.languages.map((language) => language.name).join(', ')}
                </S.Info>
              </S.InfosWrapper>
            </S.Container>

            <S.Container>
              <S.Title>Border Countries</S.Title>
              <S.BordersWrapper>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={data?.borders}
                  ItemSeparatorComponent={S.Separator}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <S.Button
                      key={item}
                      onPress={() => handleNextCountry(item)}
                    >
                      <S.ButtonLabel>{item}</S.ButtonLabel>
                    </S.Button>
                  )}
                />
              </S.BordersWrapper>
            </S.Container>
          </S.ContentWrapper>
        )}
      </ScrollView>
    </S.Wrapper>
  );
};

export default Detail;
