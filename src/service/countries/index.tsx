import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Country } from './types';

export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://restcountries.com/v2/',
  }),
  endpoints: (builder) => ({
    getCountries: builder.query<Country[], null>({
      query: () => {
        return `/all`;
      },
    }),
    getCountryByCode: builder.query<Country, string>({
      query: (code) => {
        return `alpha/${code}`;
      },
    }),
  }),
});

export const { useGetCountriesQuery, useGetCountryByCodeQuery } = countriesApi;
