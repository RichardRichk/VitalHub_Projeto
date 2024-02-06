import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationFunc } from './src/screens/Navigation/Navigation';
import { LoginFunc } from './src/screens/Login/Login';
import { ForgotPasswordFunc } from './src/screens/ForgotPassword/ForgotPassword';

//import das fonts
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium } from 'expo-font';

//instancia do StackNavigator
const Stack = createNativeStackNavigator();

export default function App() {

  const[fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium
  })

  if(!fontsLoaded && !fontsError){
    return null;
  }

  return (
    // Navegacao

    //Container
    //StackNavigation
    //StaclScreen

    // envolve a estrutura da navegacao
    <NavigationContainer>

      {/* componente paranavegacao */}
      <Stack.Navigator>

        <Stack.Screen
          //nome da tela
          name ='Navigation'
          //componente que sera chamado
          component={NavigationFunc}
          //titulo da tela
          options={{title: 'Navigation'}}
        />

        <Stack.Screen
          name='Login'
          component={LoginFunc}
          options={{title: 'Login'}}
        />

        <Stack.Screen
          name='Forgot Password'
          component={ForgotPasswordFunc}
          options={{title: 'Forgot Password'}}
        />

      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
