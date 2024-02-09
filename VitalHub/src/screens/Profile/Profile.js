import { Container } from "../../components/Container/Style"
import { Input, InputLabel } from "../../components/Input/Style"
import { ProfilePic } from "../../components/ProfilePics/Style"

export const ProfileFunc = ({navigation}) => {
    <Container>

            {/* 
                <Image>

                <Modal>
            
            */}

            <InputLabel>Data de nascimento:</InputLabel>
            <Input
                placeholder= "04/05/1990"
            />

            <InputLabel>CPF:</InputLabel>
            <Input
                placeholder= "859********"
            />

            <InputLabel>Endereço</InputLabel>
            <Input
                placeholder= "Rua Vicenso Silva, 987"
            />

    </Container> 
}