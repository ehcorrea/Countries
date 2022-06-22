import React, { useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { SearchInput, Dropdown, CountryCard } from '../../components';

import { useGetCountriesQuery } from '../../service/countries';

import * as S from './styles';
import { ProfileScreenNavigation } from '../../routes/types';

const Home = () => {
  const { navigate } = useNavigation<ProfileScreenNavigation>();

  const [searchInputValue, setSearchInputValue] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const { data, isLoading } = useGetCountriesQuery(searchInputValue);

  const handleChangeSearchInputValue = (text: string) => {
    setSearchInputValue(text);
  };

  const handleChangeFilterValue = (text: string) => {
    setFilterValue(text);
  };

  const handleCountryDetail = (alphaCode: string) => {
    navigate('Detail', { code: alphaCode });
  };

  return (
    <S.Wrapper>
      <SearchInput
        onChangeText={handleChangeSearchInputValue}
        debounce={1000}
      />

      <S.DropdownWrapper>
        <Dropdown
          onChangeValue={handleChangeFilterValue}
          placeHolder="Filter by Region"
          options={[
            { label: 'Africa', value: 'Africa' },
            { label: 'Americas', value: 'Americas' },
            { label: 'Asia', value: 'Asia' },
            { label: 'Europe', value: 'Europe' },
            { label: 'Oceania', value: 'Oceania' },
          ]}
        />
      </S.DropdownWrapper>

      <S.ListWrapper>
        {isLoading ? (
          <ActivityIndicator size="large" color="gray" />
        ) : (
          <FlatList
            data={
              filterValue
                ? data?.filter((item) => item.region === filterValue)
                : data
            }
            renderItem={({ item }) => (
              <CountryCard
                {...item}
                onPress={() => handleCountryDetail(item.alpha3Code)}
              />
            )}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.alpha3Code}
            ItemSeparatorComponent={S.ListSeparator}
          />
        )}
      </S.ListWrapper>
    </S.Wrapper>
  );
};

export default Home;
