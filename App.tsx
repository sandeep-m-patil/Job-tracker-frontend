import './global.css';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Platform } from 'react-native';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerShown: false,
          animation: Platform.OS === 'web' ? "slide_from_left" : 'slide_from_right',
          gestureEnabled: Platform.OS !== 'web',
          animationTypeForReplace: 'push'
        }}
      >
        <Stack.Screen 
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen 
          name="SignUp"
          component={SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
