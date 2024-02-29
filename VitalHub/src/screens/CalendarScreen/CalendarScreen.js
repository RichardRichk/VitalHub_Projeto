import { CalendarChoose } from "../../components/CalendarChoose/CalendarChoose";
import { Container, ContainerWithMargin } from "../../components/Container/Style";
import { InputLabel, InputSelect } from "../../components/Input/Style";
import { Title } from "../../components/Title/Style";

export const CalendarScreen = ({ navigation }) => {

    return (
        <Container>

            <ContainerWithMargin>
                <Title>Selecionar Data</Title>
            </ContainerWithMargin>

            <CalendarChoose/>

            <InputLabel>Selecione um horário disponível:</InputLabel>
            
        </Container>
    )
}