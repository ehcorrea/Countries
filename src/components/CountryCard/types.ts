import { Country } from '../../service/countries/types';

export type CountryCardProps = {
  onPress: () => void;
} & Country;
