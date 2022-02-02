import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './src/pages/Home';
import { TodoList } from './src/pages/TodoList';

import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

const Stack = createStackNavigator();

export default function App() {
  
  let [fontsLoaded] = useFonts ({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_700Bold,
  })

  if(fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='TodoList' component={TodoList} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    );
  } else {
    return <></>
  }
}

