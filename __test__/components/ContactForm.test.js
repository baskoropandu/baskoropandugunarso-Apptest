import React from "react";
import {render} from '@testing-library/react-native'
import ContactForm from "../../src/components/ContactForm";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import { NavigationContainer } from '@react-navigation/native' 
import {createNativeStackNavigator} from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

describe('<ContactForm />', () => {
  it('has 2 child', () => {
    const {getByPlaceholderText, getByText} = render(
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen name="CreateContact" component={ContactForm} options={{headerShown: false}}/>
          </Stack.Navigator>
        </Provider> 
      </NavigationContainer>
    );
    getByPlaceholderText('First Name');
    getByPlaceholderText('Last Name');
    getByPlaceholderText('Age');
    getByPlaceholderText('Image URL');
    getByText('Submit')
  });
});