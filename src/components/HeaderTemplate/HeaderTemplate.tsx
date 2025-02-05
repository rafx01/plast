import { View } from 'react-native';

type Props = {
  children: React.ReactNode;
};

export function HeaderTemplate({ children }: Props) {
  return <View className="h-1/4 w-full bg-red-100">{children}</View>;
}
