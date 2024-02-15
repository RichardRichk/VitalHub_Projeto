import { ContainerHeader } from "../Container/Style"
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./Style"

export const Header = () => {
    return (
        <ContainerHeader>
            

            <BoxUser>

                <ImageUser
                />

                <DataUser>

                    <TextDefault>Bem Vindo</TextDefault>
                    <NameUser>Dr.Richk</NameUser>

                </DataUser>

            </BoxUser>

            {/* material icons */}

        </ContainerHeader>
    )
}