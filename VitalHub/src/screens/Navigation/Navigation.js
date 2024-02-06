import { Button, View } from "react-native"

export const NavigationFunc = ({navigation}) => {
    return(
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Button 
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    )
}