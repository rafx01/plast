import { RouteProp, useRoute } from '@react-navigation/native';
import { Text } from 'react-native';
import { HeaderTemplate } from '~/components/HeaderTemplate';
import { RootStackParamList } from '~/navigation';

type InitialScreenRouteProp = RouteProp<RootStackParamList, 'InitialScreen'>;

export function InitialScreen() {
  const router = useRoute<InitialScreenRouteProp>();

  return (
    <HeaderTemplate>
      <Text>Initial Screen</Text>
    </HeaderTemplate>
  );
}
