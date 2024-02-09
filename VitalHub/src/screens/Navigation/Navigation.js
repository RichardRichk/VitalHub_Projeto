import { Button, View } from "react-native"

export const NavigationFunc = ({navigation}) => {
    return(
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Button 
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button 
                title="Forgot Password"
                onPress={() => navigation.navigate("Forgot_Password")}
            />
            <Button 
                title="Email Verify"
                onPress={() => navigation.navigate("Email_Verify")}
            />
            <Button 
                title="Change Password"
                onPress={() => navigation.navigate("Change_Password")}
            />
            <Button 
                title="Create Account"
                onPress={() => navigation.navigate("Create_Account")}
            />
            <Button 
                title="Profile"
                onPress={() => navigation.navigate("Profile")}
            />

        </View>
    )
}