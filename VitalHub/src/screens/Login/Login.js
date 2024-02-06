import { Button, View } from "react-native"
import { Container } from "../../components/Container/Style"
import { Logo } from "../../components/Logo/Style"
import { Title } from "../../components/Title/Style"
import { Input } from "../../components/Input/Style"
import { LinkMedium } from "../../components/Links/Style"

export const LoginFunc = () => {
    return(
        <Container>

            <Logo
                source={require('../../assets/Images/VitalHub_Logo4.png')}
            />

            <Title>Entrar ou criar conta</Title>
 
            <Input
                placeholder="Usuario ou Email"
                place
            />
            <Input
                placeholder="Senha"
                secureTextEntry={true}
            />

            

            <LinkMedium>Esqueceu sua senha?</LinkMedium>

            {/*
            <Button>
                <ButtonTitle></ButtonTitle>
            </Button>

            <ButtonGoogle>
                <ButtonTitleGoogle></ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount></TextAccount>
            </ContentAccount> */}

        </Container>
    )
} 