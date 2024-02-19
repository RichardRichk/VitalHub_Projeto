import { ContainerHeader } from "../Container/Style"
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./Style"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Header = () => {
    return (
        <ContainerHeader>
            

            <BoxUser>

                <ImageUser
                    source={require("../../assets/Images/DoctorPhoto.png")}
                />

                <DataUser>

                    <TextDefault>Bem Vindo</TextDefault>
                    <NameUser>Dr.Richk</NameUser>

                </DataUser>

            </BoxUser>

            <MaterialIcons
                name="notifications"
                size={30}
                color="#FBFBFB" 
                style={{ marginTop: 20, marginRight: 20 }}
            />

        </ContainerHeader>
    )
}