import { Country } from './types';

const countryMock: Country = {
  name: 'Colombia',
  topLevelDomain: ['.co'],
  alpha2Code: 'CO',
  alpha3Code: 'COL',
  capital: 'Bogotá',
  region: 'South America',
  continent: 'Americas',
  population: 48759958,
  borders: ['BRA', 'ECU', 'PAN', 'PER', 'VEN'],
  nativeName: 'Colombia',
  currencies: [
    {
      name: 'Colombian peso',
      symbol: '$',
    },
  ],
  languages: [
    {
      name: 'Spanish',
      nativeName: 'Español',
    },
  ],
  flags: {
    png: 'https://restcountries.com/data/png/col.png',
  },
};

export default countryMock;
