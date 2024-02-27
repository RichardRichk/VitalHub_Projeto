
import { ContainerCard } from "../Container/Style"
import { ClockCard, ContentCard, DataProfileCard, ImageCard, ProfileDataCard, ProfileName, TextAge, TextBold, TextType, ViewRow } from "./Style"
import { ButtonCard, ButtonTextCard } from "../Button/Style"
import { AntDesign } from "@expo/vector-icons"



export const CardAppointment = ({
    situacao = "pendente",
    onPressCancel,
    onPressAppointment
}) => {

    return (
        <ContainerCard>

            <ImageCard
                source={require("../../assets/Images/ProfilePic.png")}
            />

            <ContentCard>

                <DataProfileCard>

                    <ProfileName>Richk</ProfileName>

                    <ProfileDataCard>

                        <TextAge>19</TextAge>
                        <TextType>Consulta</TextType>

                    </ProfileDataCard>

                </DataProfileCard>

                <ViewRow>

                    <ClockCard situacao={situacao}>
                        <AntDesign name="clockcircle" size={14} color={situacao == "pendente" ? "#49B3BA" : "8C8A97"} />
                        <TextBold situacao={situacao} color={"#49B3BA"}>14:00 </TextBold>
                    </ClockCard>


                    {/* valida e mostra o tipo de botao conforme a situacao */}

                    {
                        situacao == "cancelado" ? (
                            <>
                            </>
                        ) : situacao == "pendente" ? (

                            <ButtonCard onPress={onPressCancel}>
                                <ButtonTextCard situacao={situacao}>Cancelar </ButtonTextCard>
                            </ButtonCard>

                        ) : (
                            <ButtonCard onPress={onPressAppointment}>
                                <ButtonTextCard situacao={situacao}>Ver Prontuario </ButtonTextCard>
                            </ButtonCard>
                        )
                    }



                </ViewRow>

            </ContentCard>

        </ContainerCard>
    )
}