import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Home, Profile, ChatRoom, OtherProfiles, Matches, List, Landing } from './screens';
import Header from './components/Header';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import {app, firestore} from './firebase/firebaseConfig'

// type RootStackParamList = {
//   Home: undefined;
//   Profile: { userId: string };
//   Chat: {userId: string};
//   OtherProfiles: {userId: string};
//   Matches: {userId: string};
// };

const Stack = createNativeStackNavigator();

export default function App() {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  
  function onAuthStateChanged(authUser: FirebaseAuthTypes.User | null) { 
    setUser(authUser);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);
  
  if (initializing) return null;

  console.log(user)

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="/"
        screenOptions={({ route }) => ({
          header: ({ navigation }) => {
            if (!user && route.name !== 'Login') {
              return null;
            }
            return <Header navigationProps={navigation} />;
          },
        })}
      >
        <Stack.Screen name='/' component={user ? Home : Landing} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ChatRoom" component={ChatRoom} />
        <Stack.Screen name="ChatList" component={List} />
        <Stack.Screen name="OtherProfiles" component={OtherProfiles} />
        <Stack.Screen name="Matches" component={Matches} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

