import { Title } from "../../components/Title/Style"
import { CardDoctorSelect } from "../../components/CardClinicSelect/CardClinicSelect"
import { Container, ContainerWithMargin } from "../../components/Container/Style"
import { ContainerScrollWithMargin } from "./Style"
import { ListComponent } from "../../components/List/List"
import { ButtonSecondary, ButtonSecondaryTitle, ButtonWithMargin, TextButton } from "../../components/Button/Style"
import { useState } from "react"

export const DoctorSelect = ({navigation}) => {

    const [selected, setSelected] = useState('');

    const image1 = require("../../assets/Images/SelectDoctor1.png");
    const image2 = require("../../assets/Images/SelectDoctor2.png");
    const image3 = require("../../assets/Images/SelectDoctor3.png");

    const doctorData = [
        {id: 1, name: "Dra Alessandra", image: {image1}, specialty: "Demartologa, Esteticista"},
        {id: 2, name: "Dra Alessandra", image: {image2}, specialty: "Demartologa, Esteticista"},
        {id: 3, name: "Dra Alessandra", image: {image3}, specialty: "Demartologa, Esteticista"},
        {id: 4, name: "Dra Alessandra", image: {image1}, specialty: "Demartologa, Esteticista"},
        {id: 5, name: "Dra Alessandra", image: {image3}, specialty: "Demartologa, Esteticista"},
        {id: 6, name: "Dra Alessandra", image: {image1}, specialty: "Demartologa, Esteticista"},
        {id: 7, name: "Dra Alessandra", image: {image2}, specialty: "Demartologa, Esteticista"},
        {id: 8, name: "Dra Alessandra", image: {image3}, specialty: "Demartologa, Esteticista"},
        {id: 9, name: "Dra Alessandra", image: {image1}, specialty: "Demartologa, Esteticista"},
    ]

    return(
        <Container>

            <ContainerWithMargin>

                <Title>Selecionar médico</Title>

            </ContainerWithMargin>
            

        <ContainerScrollWithMargin>

            {/* <ListComponent
                data={doctorData}
                renderItem={({item})  =>
                <CardDoctorSelect
                    onPress={() => setSelected(item.id)}
                    select={selected}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    specialty={item.specialty}
                />}
            /> */}

          <CardDoctorSelect/>


            <ButtonWithMargin>
                <TextButton>Continuar </TextButton>
            </ButtonWithMargin>

            <ButtonSecondary onPress={() => navigation.navigate("ClinicSelect")}>
                <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
            </ButtonSecondary>

        </ContainerScrollWithMargin>


        </Container>

    )

}