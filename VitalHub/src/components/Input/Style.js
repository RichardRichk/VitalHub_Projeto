import styled from "styled-components";

export const Input = styled.TextInput.attrs({placeholderTextColor: '#34898f'})`
    width: 88.88%;
    height: 53px;
    padding: 16px;
    margin-top: 15px;

    border: 2px solid #49b3ba;
    border-radius: 5px;
    color: #34898f;
    font-size: 14px;
    font-family: 'MontserratAlternates_600SemiBold';
    
`

export const InputVerify = styled.TextInput.attrs({placeholderTextColor: '#34898f'})`
    height: 62px;
    width: 16%;
    padding: 5px;
    border: 2px solid #77CACF;
    border-radius: 5px;
    font-size: 40px;
    font-family: 'Quicksand_600SemiBold';
    text-align: center;
    margin-right: 5.55%;    
    margin-bottom: 30px;
`

export const InputLabel = styled.Text`
    font-size: 16px;
    font-family: 'Quicksand_600SemiBold';
    color: #000000;
    margin-bottom: 10px;
    align-items: start;
    justify-content: start;
`