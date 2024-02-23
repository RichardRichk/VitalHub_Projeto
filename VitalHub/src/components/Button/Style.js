import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    width: 88.88%;
    height: 44px;
    padding: 12px;
    background-color: #496BBA;
    border: 1px solid #496BBA;
    border-radius: 5px;
    align-items: center;
`

export const ButtonCard = styled.TouchableOpacity`

`

export const ButtonWithMargin = styled(Button)`
    margin-top: 30px;
`

export const GoogleButton = styled(Button)`
    margin-top: 15px;
    background-color: #FAFAFA;
    flex-direction: row;
    justify-content: center;
`

export const ButtonSecondary = styled(Button)`
    background-color: transparent;
    border: none;
    margin-top: 30px;
`

export const ButtonTextCard = styled.Text`
    color: ${(props) => props.situacao == "pendente" ? "#c81d25" : "#344f8f"};
    `


export const TextButton = styled.Text`
    text-align: center;
    font-size: 14px;
    font-family: 'MontserratAlternates_700Bold';
    color: #FFFFFF;
    `
    export const ButtonSecondaryTitle = styled(TextButton)`
        text-transform: capitalize;
        text-decoration: underline;
        color: #344f8f;
    `

export const TextGoogleButton = styled(TextButton)`
    color: #496BBA;
    `
    

export const ButtonReturnIcon = styled.TouchableOpacity`
        position: absolute;
        align-self: flex-start;
        margin-top: 5%;
        margin-left: 5%;
    `


export const ButtonModal = styled(Button)`
    width: 80%;  
`

export const ButtonScheduleModal = styled(Button)`
    width: 100%;
    margin-top: 30px;
`

