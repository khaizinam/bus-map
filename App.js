
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
//Screens
import ChooseLocation from './src/Screens/ChooseLocation';
import Home from './src/Screens/Home';
import Welcome from './src/Screens/Welcome';
import Onboarding1 from './src/Screens/Onboarding1';
import Onboarding2 from './src/Screens/Onboarding2';
import Onboarding3 from './src/Screens/Onboarding3';
import Login from './src/Screens/Login';
import Register from './src/Screens/Register';
import AreaSelection from './src/Screens/AreaSelection';
import TraCuu from './src/Screens/TraCuu';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
const App = () => {
  const Stack = createNativeStackNavigator ();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}} />
        <Stack.Screen name="Onboarding1" component={Onboarding1} options={{headerShown:false}}/>
        <Stack.Screen name="Onboarding2" component={Onboarding2} options={{headerShown:false}}/>
        <Stack.Screen name="Onboarding3" component={Onboarding3} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
        <Stack.Screen name="AreaSelection" component={AreaSelection} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="ChooseLocation" component={ChooseLocation} options={{headerShown:false}}/>
        <Stack.Screen name="TraCuu" component={TraCuu} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;