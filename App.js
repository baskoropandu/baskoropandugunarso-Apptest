import React from 'react';
import { NavigationContainer } from '@react-navigation/native' 
import { Provider } from 'react-redux';
import Home from './src/pages/Home';
import store from './src/store/store';
import ContactForm from './src/components/ContactForm';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="CreateContact" component={ContactForm} options={{headerShown: false}}/>
          <Stack.Screen name="EditContact" component={ContactForm} options={{headerShown: false}}/>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
