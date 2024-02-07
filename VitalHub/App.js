import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationFunc } from './src/screens/Navigation/Navigation';
import { LoginFunc } from './src/screens/Login/Login';
import { ForgotPasswordFunc } from './src/screens/ForgotPassword/ForgotPassword';
import { StatusBar } from 'react-native';

//import das fonts
import { useFonts } from 'expo-font';
import {MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates'
import {Quicksand_500Medium, Quicksand_600SemiBold} from '@expo-google-fonts/quicksand'
import { EmailVerify } from './src/screens/EmailVerify/EmailVerify';

//instancia do StackNavigator
const Stack = createNativeStackNavigator();

export default function App() {

  const[fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_600SemiBold,
    Quicksand_500Medium
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
      <Stack.Navigator
        screenOptions={{headerShown: false}}
      >

        {/* <Stack.Screen
          //nome da tela
          name ='Navigation'
          //componente que sera chamado
          component={NavigationFunc}
          //titulo da tela
          options={{title: 'Navigation'}}
        /> */}

        <Stack.Screen
          name='Login'
          component={LoginFunc}
          options={{title: 'Login'}}
        />

        <Stack.Screen
          name='Forgot_Password'
          component={ForgotPasswordFunc}
          options={{title: 'Forgot_Password'}}
        />

        <Stack.Screen
          name='Email_Verify'
          component={EmailVerify}
          options={{title: 'Email_Verify'}}
        />

      </Stack.Navigator>

      <StatusBar
      style="auto" 
      backgroundColor="#FAFAFA"
      />
      
    </NavigationContainer>
  );
}
