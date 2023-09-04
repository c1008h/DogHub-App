import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, DetailsScreen, ProfileScreen } from './screens';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="/">
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="Details" component={DetailsScreen} /> 
        <Stack.Screen name="Profile" component={ProfileScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>

      // {/* <StatusBar style="auto" /> */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
