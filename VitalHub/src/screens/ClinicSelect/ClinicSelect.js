import { Title } from "../../components/Title/Style"
import { CardClinicSelect } from "../../components/CardClinicSelect/CardClinicSelect"
import { Container, ContainerWithMargin } from "../../components/Container/Style"
import { ContainerScrollWithMargin } from "./Style"

export const ClinicSelect = ({navigation}) => {

    return(
        <Container>

            <ContainerWithMargin>

                <Title>Selecionar clínica</Title>

            </ContainerWithMargin>
            

        <ContainerScrollWithMargin>

            <CardClinicSelect/>
            <CardClinicSelect/>
            <CardClinicSelect/>
            <CardClinicSelect/>
            <CardClinicSelect/>
            <CardClinicSelect/>
            <CardClinicSelect/>
            <CardClinicSelect/>
            <CardClinicSelect/>
            <CardClinicSelect/>
            <CardClinicSelect/>
            <CardClinicSelect/>
            <CardClinicSelect/>
            <CardClinicSelect/>
            <CardClinicSelect/>

        </ContainerScrollWithMargin>

        </Container>

    )

}