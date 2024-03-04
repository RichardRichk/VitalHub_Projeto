import { BoxInput, Container, ContainerScroll, ContainerWithMargin, DoubleView } from "../../components/Container/Style"
import { ContentAccount, ContentInput } from "../../components/ContentAccount/Style"
import { InputDouble, InputLabel, InputNotEditable } from "../../components/Input/Style"
import { SubTitle, Title } from "../../components/Title/Style"
import { MapImage } from "./Style"

export const ClinicAdress = ({ navigation }) => {

    const image = require("../../assets/Images/MapAdress.png")

    return (
        <Container>
            <MapImage
                source={image}
            />

            <Title>Clínica Natureh</Title>
            <SubTitle>São Paulo, SP</SubTitle>

            <ContainerScroll>

                <InputLabel>Endereço</InputLabel>
                <InputNotEditable
                    placeholder="Rua Vicenso Silva, 987"
                />

                <ContentInput>


                    <BoxInput>
                        <InputLabel>Número</InputLabel>
                        <InputDouble
                            placeholder="578"
                        />
                    </BoxInput>

                    <BoxInput>
                        <InputLabel>Bairro</InputLabel>
                        <InputDouble
                            placeholder="Moema-SP"
                        />
                    </BoxInput>
                </ContentInput>

            </ContainerScroll>
        </Container>
    )
}