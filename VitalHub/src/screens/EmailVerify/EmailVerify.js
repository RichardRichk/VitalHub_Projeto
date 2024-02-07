import { ButtonReturnIcon } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { ContentVerify } from "../../components/ContentAccount/Style"
import { InputVerify } from "../../components/Input/Style"
import { Logo } from "../../components/Logo/Style"
import { SubTitle, Title } from "../../components/Title/Style"

export const EmailVerify = ({navigation}) => {
    return(
        <Container>
            
            {/* Criar componente para agilizar */}
            <ButtonReturnIcon>

            </ButtonReturnIcon>

            <Logo
                source={require('../../assets/Images/VitalHub_Logo4.png')}
            />

            <Title>VERIFIQUE SEU E-MAIL</Title>

            <SubTitle>Digite o código de 4 dígitos enviado para username@email.com</SubTitle>

            <ContentVerify>
                <InputVerify
                    placeholder= "0"
                />
                <InputVerify
                    placeholder= "0"
                />
                <InputVerify
                    placeholder= "0"
                />
                <InputVerify
                    placeholder= "0"
                />
            </ContentVerify>

            

        </Container>
    )
}