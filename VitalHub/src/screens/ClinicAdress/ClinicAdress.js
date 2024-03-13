import { BoxInput, Container, ContainerScroll, ContainerWithMargin, DoubleView } from "../../components/Container/Style"
import { InputDouble, InputLabel, InputNotEditable } from "../../components/Input/Style"
import { Map } from "../../components/Map/Map"
import { SubTitle, Title } from "../../components/Title/Style"
import { MapImage } from "./Style"

export const ClinicAdress = ({ navigation }) => {

    return (
        <>
        
                <Map/>

        <Container>

            <Title>Clínica Natureh</Title>
            <SubTitle>São Paulo, SP</SubTitle>

            <ContainerScroll>

                <InputLabel>Endereço</InputLabel>
                <InputNotEditable
                    placeholder="Rua Vicenso Silva, 987"
                />

                <DoubleView>


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
                </DoubleView>

            </ContainerScroll>
        </Container>
        </>
    )
}
