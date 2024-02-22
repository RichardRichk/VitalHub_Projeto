import { ButtonSecondary, ButtonSecondaryTitle, ButtonWithMargin, TextButton } from "../../components/Button/Style"
import { Container, ContainerScroll } from "../../components/Container/Style"
import { HeaderPhoto, HeaderPhotoContainer } from "../../components/HeaderPhoto/Style"
import { Input, InputFormRequire, InputLabel } from "../../components/Input/Style"
import { ModalFormRequire } from "../../components/Modal/Style"
import { SubTitle, Title } from "../../components/Title/Style"

export const FormRequire = ({navigation}) => {

    const image = require("../../assets/Images/ProfilePic.png")

    return(
        <Container>
            
            <HeaderPhotoContainer>
                <HeaderPhoto
                    source={image}
                />
            </HeaderPhotoContainer>

            <ModalFormRequire >
                <Title>Richard Kosta</Title>
                <SubTitle>richard.kosta@gmail.com</SubTitle>
            </ModalFormRequire>

            <ContainerScroll>

                <InputLabel>Descrição da consulta</InputLabel>
                <InputFormRequire
                    placeholder="Descrição"
                />


                <InputLabel>Diagnóstico do paciente</InputLabel>
                <Input
                    placeholder="Diagnóstico"
                />


                <InputLabel>Prescrição médica</InputLabel>
                <InputFormRequire
                    placeholder="Prescrição medica"
                />

                <ButtonWithMargin>
                    <TextButton>Salvar</TextButton>
                </ButtonWithMargin>

                <ButtonSecondary onPress={() => navigation.navigate("Home")}>
                    <ButtonSecondaryTitle>Cancelar </ButtonSecondaryTitle>
                </ButtonSecondary>

            </ContainerScroll>

        </Container>
    );

};