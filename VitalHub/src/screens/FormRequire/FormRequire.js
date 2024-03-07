import { Button, ButtonPhoto, ButtonSecondary, ButtonSecondaryTitle, ButtonWithMargin, TextButton } from "../../components/Button/Style"
import { Container, ContainerScroll, DoubleView } from "../../components/Container/Style"
import { HeaderPhoto, HeaderPhotoContainer } from "../../components/HeaderPhoto/Style"
import { Input, InputFormNotEditable, InputFormRequire, InputLabel } from "../../components/Input/Style"
import { ModalFormRequire } from "../../components/Modal/Style"
import { SubTitle, Title } from "../../components/Title/Style"
import { AntDesign } from "@expo/vector-icons"
import { ButtonSecondaryForm, ButtonSecondaryFormTitle, HR } from "./Style"
import { useState } from "react"

export const FormRequire = ({ navigation }) => {

    const [userType, setuserType] = useState("Paciente");
    const image = require("../../assets/Images/ProfilePic.png")

    return (
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

                <ButtonWithMargin>
                    <TextButton>Editar </TextButton>
                </ButtonWithMargin>

                <ButtonSecondary onPress={() => navigation.navigate("Home")}>
                    <ButtonSecondaryTitle>Cancelar </ButtonSecondaryTitle>
                </ButtonSecondary>


                {/* Conteudo Da Consultas Doutor */}

                {
                    userType == "Paciente" ? (
                        <>
                        </>
                    ) : (
                        <>

                            <InputLabel>Exames médicos</InputLabel>
                            <InputFormNotEditable
                                placeholder="               Nenhuma foto informada"
                            />

                            <DoubleView>

                                <ButtonPhoto>
                                    <TextButton>
                                        <AntDesign
                                            name="camera"
                                            size={24}
                                        />
                                    </TextButton>
                                    <TextButton>Enviar</TextButton>
                                </ButtonPhoto>

                                <ButtonSecondaryForm onPress={() => navigation.replace("Home")}>
                                    <ButtonSecondaryFormTitle>Cancelar</ButtonSecondaryFormTitle>
                                </ButtonSecondaryForm>

                            </DoubleView>

                            <HR />

                            <InputFormNotEditable
                                placeholder="Resultado do exame de sangue: tudo normal "
                            />

                            <ButtonSecondary onPress={() => navigation.replace("Main")}>
                                <ButtonSecondaryTitle>Voltar</ButtonSecondaryTitle>
                            </ButtonSecondary>
                        </>

                    )
                }

            </ContainerScroll>

        </Container>
    );

};