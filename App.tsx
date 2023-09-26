import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Home, Profile, ChatRoom, OtherProfiles, Matches, List } from './screens';
import Header from './components/Header';

// type RootStackParamList = {
//   Home: undefined;
//   Profile: { userId: string };
//   Chat: {userId: string};
//   OtherProfiles: {userId: string};
//   Matches: {userId: string};
// };

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="/"
        screenOptions={{
          header: ({ navigation }) => <Header navigationProps={navigation} />
        }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ChatRoom" component={ChatRoom} />
        <Stack.Screen name="ChatList" component={List} />
        <Stack.Screen name="OtherProfiles" component={OtherProfiles} />
        <Stack.Screen name="Matches" component={Matches} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

