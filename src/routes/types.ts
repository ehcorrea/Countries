import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Detail: { code: string };
};

export type ProfileScreenNavigation = StackNavigationProp<RootStackParamList>;

export type ViewDetailProps = RouteProp<RootStackParamList, 'Detail'>;
