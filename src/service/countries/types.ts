type Languages = {
  name: string;
  nativeName: string;
};

type Currencies = {
  name: string;
  symbol: string;
};

export type Country = {
  alpha2Code: string;
  alpha3Code: string;
  borders: string[];
  capital: string;
  currencies: Currencies[];
  flags: { png: string };
  languages: Languages[];
  name: string;
  nativeName: string;
  region: string;
  topLevelDomain: string[];
  population: number;
  continent: string;
  subregion: string;
};
