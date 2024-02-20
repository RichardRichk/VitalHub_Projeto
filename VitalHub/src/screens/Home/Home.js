import { useState } from "react"
import { AbsListAppointment } from "../../components/AbsListAppointment/AbsListAppointment"
import Calendar from "../../components/Calendar/Calendar"
import { Container } from "../../components/Container/Style"
import { Header } from "../../components/Header/Header"
import { FilterAppointment } from "./Style"
import { ListComponent } from "../../components/List/List"
import { CardAppointment } from "../../components/CardAppointment/CardAppointment"

const Consultas = [
    {id: 1, nome: "Richk", situacao: "pendente"},
    {id: 2, nome: "Richk", situacao: "realizado"},
    {id: 3, nome: "Richk", situacao: "cancelado"},
    {id: 4, nome: "Richk", situacao: "pendente"},
    {id: 5, nome: "Richk", situacao: "realizado"}
]

export const HomeFunc = (navigation) =>{
    
    const[statusLista, setStatusLista] = useState("Pendente")

    return (
        <Container>
            {/* Header */}
            <Header/>

            <Calendar/>

            <FilterAppointment>

                <AbsListAppointment
                    textButton={"Agendadas"}
                    clickButton={statusLista==="pendente"}
                    onPress={() => setStatusLista("pendente")}
                />
                <AbsListAppointment
                    textButton={"Realizadas"}
                    clickButton={statusLista==="realizado"}
                    onPress={() => setStatusLista("realizado")}
                />
                <AbsListAppointment
                    textButton={"Canceladas"}
                    clickButton={statusLista==="cancelado"}
                    onPress={() => setStatusLista("cancelado")}
                />

            </FilterAppointment>
                

            {/* Lista(Flatlist) */}
            <ListComponent
                data={Consultas}
                keyExtractor={(item) => item.id}

                renderItem={({item}) =>
                    statusLista == item.situacao && (

                        <CardAppointment
                            situacao={item.situacao}
                        />
                        
                        )     
                    }
            />
            
        </Container>
    )
}