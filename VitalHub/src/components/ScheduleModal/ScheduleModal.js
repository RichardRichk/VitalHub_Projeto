import { Modal } from "react-native";
import { Title } from "../Title/Style"
import { ButtonScheduleModal, ButtonSecondary, ButtonSecondaryTitle, TextButton } from "../Button/Style";
import { InputAppointmentLevel, InputLabel, InputScheduleModal } from "../Input/Style";
import { ModalContainer, ModalContent } from "./Style";
import { ScheduleModalView } from "../Container/Style";

const ScheduleModal = ({navigation, visible, setShowScheduleModal, ...rest}) => {
    return(
        <Modal {...rest} visible={visible} transparent={true}>
            <ModalContainer>
                <ModalContent>
                    
                    <Title>Agendar Consulta</Title>

                    <InputLabel>Qual o nível da consulta:</InputLabel>
                    <ScheduleModalView>
                    <InputAppointmentLevel
                        placeholder="Rotina"
                    />
                    <InputAppointmentLevel
                        placeholder="Exame"
                    />
                    <InputAppointmentLevel
                        placeholder="Urgência"
                    />
                    </ScheduleModalView>

                    <InputLabel>Informe a localização desejada</InputLabel>
                    <InputScheduleModal
                        placeholder="Informe a localização"
                    />

                    <ButtonScheduleModal>
                        <TextButton>Continuar</TextButton>
                    </ButtonScheduleModal>

                    <ButtonSecondary onPress={() => setShowScheduleModal(false)}>
                        <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
                    </ButtonSecondary>

                </ModalContent>
            </ModalContainer>
        </Modal>
    );
};

export default ScheduleModal;