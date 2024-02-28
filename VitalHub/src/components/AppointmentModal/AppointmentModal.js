import { Modal } from "react-native"
import { Title } from "../Title/Style"
import { ModalContent, ModalText, PatientModal } from "../CancellationModal/Style"
import { ButtonModal, ButtonSecondary, ButtonSecondaryTitle, TextButton } from "../Button/Style"
import { ContainerModalText, ImageModalAppointment } from "./Style";

const AppointmentModal = ({ navigation ,visible, setShowModalAppointment, ...rest }) => {

    const image = require("../../assets/Images/Picture_Modal.png")

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">

            <PatientModal>

                {/* Imagem */}


                <ModalContent>

                    <ImageModalAppointment
                        source={image}
                    />
                    
                    <Title>Niccole Sarga</Title>

                    <ContainerModalText>
                        <ModalText>22 anos</ModalText>

                        <ModalText>niccole.sarga@gmail.com </ModalText>
                    </ContainerModalText>

                    <ButtonModal onPress={() => navigation.navigate("FormRequire")}>
                        <TextButton>Inserir Prontuario</TextButton>
                    </ButtonModal>

                    <ButtonSecondary onPress={() => setShowModalAppointment(false)}>
                        <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
                    </ButtonSecondary>

                </ModalContent>
            </PatientModal>


        </Modal>
    );

};

export default AppointmentModal;


export const AppointmentDoctorModal = ({ navigation ,visible, setShowModalAppointment, id, name, specialty, crm,...rest }) => {

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">

            <PatientModal>

                {/* Imagem */}


                <ModalContent>

                    <ImageModalAppointment
                        source={image}
                    />
                    
                    <Title>{name}</Title>

                    <ContainerModalText>
                        <ModalText>{specialty}</ModalText>

                        <ModalText>{crm}</ModalText>
                    </ContainerModalText>

                    <ButtonModal onPress={() => navigation.navigate("")}>
                        <TextButton>Ver Local da consulta</TextButton>
                    </ButtonModal>

                    <ButtonSecondary onPress={() => setShowModalDoctorAppointment(false)}>
                        <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
                    </ButtonSecondary>

                </ModalContent>
            </PatientModal>


        </Modal>
    );

};