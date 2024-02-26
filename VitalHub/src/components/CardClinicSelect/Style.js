import styled from "styled-components";
import { ContainerCard } from "../Container/Style";
import { Title } from "../Title/Style";

export const ContainerCardClinic = styled(ContainerCard)`
    height: 82px;
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.25);
    margin-bottom: 12px;
`

export const ContentCard = styled.View`
    width: 95%;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
`

export const ContentNamePlace = styled.View`
    flex-direction: column;
    gap: 10px;
    padding: 5px 5px;
`

export const ContentStarStatus = styled(ContentNamePlace)`
`

export const AllContentCard = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const StarContent  = styled.View`
    justify-content: space-evenly;
    flex-direction: row;
`

export const ClinicName = styled(Title)`
    font-size: 16px;
`

export const ClinicAdress = styled(Title)`
    font-size: 14px
`

export const StarText = styled.Text`
    font-family: "Quicksand_600SemiBold";
    font-size: 14px;
    color: #F9A620;
`