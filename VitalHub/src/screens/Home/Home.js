import { useState } from "react"
import { AbsListAppointment } from "../../components/AbsListAppointment/AbsListAppointment"
import Calendar from "../../components/Calendar/Calendar"
import { Container, ContainerScroll } from "../../components/Container/Style"
import { Header } from "../../components/Header/Header"
import { CreateAppointment, FilterAppointment, StethoscopeImage } from "./Style"
import { ListComponent } from "../../components/List/List"
import { CardAppointment } from "../../components/CardAppointment/CardAppointment"
import CancellationModal from "../../components/CancellationModal/CancellationModal"
import AppointmentModal from "../../components/AppointmentModal/AppointmentModal"
import ScheduleModal from "../../components/ScheduleModal/ScheduleModal"

const Consultas = [
    { id: 1, name: "Richk", age:"45", type:"Rotina", time: "14:00", situacao: "pendente" },
    { id: 2, name: "Richk", age:"45", type:"Rotina", time: "14:00", situacao: "realizado" },
    { id: 3, name: "Richk", age:"45", type:"Rotina", time: "14:00", situacao: "pendente" },
    { id: 4, name: "Richk", age:"45", type:"Rotina", time: "14:00", situacao: "cancelado" },
    { id: 5, name: "Richk", age:"45", type:"Rotina", time: "14:00", situacao: "pendente" },
    
]

const AppointmentModalData = [
    { id: 1, name: "Richk", ModalText1:"45 anos", ModalText2:"richk@gmail.com", ButtonProntuary:"Inserir Prontuario" },
]

export const HomeFunc = ({ navigation }) => {

    const [statusLista, setStatusLista] = useState("pendente");
    // Satate para os modais
    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalAppointment, setShowModalAppointment] = useState(false);
    const [showScheduleModal, setShowScheduleModal] = useState(false);


    return (
        <Container>
            {/* Header */}
            <Header 
                navigation={navigation}
            />

            <Calendar />

            <FilterAppointment>

                <AbsListAppointment
                    textButton={"Agendadas"}
                    clickButton={statusLista === "pendente"}
                    onPress={() => setStatusLista("pendente")}
                />
                <AbsListAppointment
                    textButton={"Realizadas"}
                    clickButton={statusLista === "realizado"}
                    onPress={() => setStatusLista("realizado")}
                />
                <AbsListAppointment
                    textButton={"Canceladas"}
                    clickButton={statusLista === "cancelado"}
                    onPress={() => setStatusLista("cancelado")}
                />

            </FilterAppointment>

            <ContainerScroll>
                {/* Lista(Flatlist) */}
                <ListComponent
                    data={Consultas}
                    keyExtractor={(item) => item.id}

                    renderItem={({ item }) =>
                        statusLista == item.situacao && (

                            <CardAppointment
                                situacao={item.situacao}
                                id={item.id}
                                name={item.name}
                                age={item.age}
                                type={item.type}
                                time={item.time}
                                onPressCancel={() => setShowModalCancel(true)}
                                onPressAppointment={() => navigation.navigate('FormRequire')}
                                onPressCard={() => setShowModalAppointment(true)}
                            />

                        )
                    }
                />



                <CancellationModal
                    visible={showModalCancel}
                    setShowModalCancel={setShowModalCancel}
                />
                
                <ListComponent
                data={AppointmentModalData}
                renderItem={({item})  =>
                <AppointmentModal
                    id={item.id}
                    name={item.name}
                    ModalText1={item.ModalText1}
                    ModalText2={item.ModalText2}
                    ButtonProntuary={item.ButtonProntuary}
                    visible={showModalAppointment}
                    setShowModalAppointment={setShowModalAppointment}
                    navigation={navigation}
                />
                }
            />

                <ScheduleModal 
                visible={showScheduleModal}
                setShowScheduleModal={setShowScheduleModal}
                navigation={navigation}
                />

            </ContainerScroll>

            <CreateAppointment onPress={() => {setShowScheduleModal(true)}}>

                <StethoscopeImage

                    source={require("../../assets/Images/stethoscope_medical.png")}
                />
            </CreateAppointment>

        </Container>
    )
}