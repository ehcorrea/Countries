import { RootStackParamList } from '../routes/types';

declare global {
  namespace ReactNavigation {
    type RootParamList = RootStackParamList;
  }
}
