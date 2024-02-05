import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//instancia do StackNavigator
const Stack = createNativeStackNavigator();

export default function App() {
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
          name ='Navegacao'
          //componente que sera chamado
          component={Navegacao}
          //titulo da tela
          options={{title: 'Navegacao'}}
        />

      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
