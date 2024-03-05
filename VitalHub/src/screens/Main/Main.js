
//Importarno recurso do bottom tabs

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeFunc } from "../Home/Home";
import { ProfileFunc } from "../Profile/Profile";
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'

const BottomTab = createBottomTabNavigator();

export const Main = () => {
    return(
        <BottomTab.Navigator
            screenOptions={({route}) => ({
                tabBarStyle: { backgroundColor: "#FFFFFF", height: 80, paddingTop: 10,},
                tabBarActiveBackgroundColor: "transparent",
                tabBarShowLabel: false,
                headerShown: false,


                tabBarIcon: ({focused}) => {
                    if ( route.name === Home) {
                        return (
                            <></>
                        )
                    } else {
                        
                    }
                }

            })}
            //Define a rota inicial
            initialRouteName="Home"
        >
            {/* Criando a rota da home */}
            <BottomTab.Screen
                name="Home"
                component={HomeFunc}
            />


            {/* Criando a rota do perfil */}
            <BottomTab.Screen
                name="Perfil"
                component={ProfileFunc}
            />
        </BottomTab.Navigator>
    )
}