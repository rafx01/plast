import './global.css';

import 'react-native-gesture-handler';

import RootStack from './src/navigation';

if (__DEV__) {
  require('./ReactotronConfig');
}

export default function App() {
  return <RootStack />;
}
