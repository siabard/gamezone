import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './scenes/Home';
import ReviewDetails from './scenes/ReviewDetails';
import About from './scenes/About';
import Header from './components/Header';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DrawerHome"
          component={DrawNavigation}
          options={{header: () => <Header />}}
        />
        <Stack.Screen
          name="DrawAbout"
          component={DrawNavigation}
          options={{header: () => <Header />}}
        />

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
