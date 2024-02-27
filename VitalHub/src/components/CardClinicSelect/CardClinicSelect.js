import { ContentCard, ClinicName, StarContent, StarText, ContentNamePlace, ContentStarStatus, ClinicAdress, CalendarCard, TextCalendarDays, ContainerCardClinicSelect, ContainerCardClinic, DoctorImage, DoctorContentCard, DoctorDataCard, DoctorName, DoctorSpecialty, ContainerCardDoctorSelect } from "./Style"
import { AntDesign } from "@expo/vector-icons"
import { FontAwesome6 } from '@expo/vector-icons'
import { ContainerCard } from "../Container/Style"


//////////////////////////////// INICIO CLINIC SELECT

export const CardClinicSelect = ({
    id,
    name,
    adress,
    rating,
    days,
    select,
    onPress
}) => {

    if (select === id) {

        return (

            <ContainerCardClinicSelect >

                <ContentCard>

                    <ContentNamePlace>

                        <ClinicName>{name}</ClinicName>

                        <ClinicAdress>{adress}</ClinicAdress>

                    </ContentNamePlace>

                    <ContentStarStatus>
                        <StarContent>
                            <AntDesign
                                name="star"
                                size={20}
                                color={"#F9A620"}
                            />
                            <StarText>{rating}</StarText>
                        </StarContent>

                        <CalendarCard>
                            <FontAwesome6
                                name="calendar-day"
                                size={14}
                                color={"#49B3BA"}
                            />
                            <TextCalendarDays>{days}</TextCalendarDays>
                        </CalendarCard>
                    </ContentStarStatus>


                </ContentCard>


            </ContainerCardClinicSelect>

        )

    } else {
        return (
            <ContainerCardClinic onPress={onPress}>

                <ContentCard>

                    <ContentNamePlace>

                        <ClinicName>{name}</ClinicName>

                        <ClinicAdress>{adress}</ClinicAdress>

                    </ContentNamePlace>

                    <ContentStarStatus>
                        <StarContent>
                            <AntDesign
                                name="star"
                                size={20}
                                color={"#F9A620"}
                            />
                            <StarText>{rating}</StarText>
                        </StarContent>

                        <CalendarCard>
                            <FontAwesome6
                                name="calendar-day"
                                size={14}
                                color={"#49B3BA"}
                            />
                            <TextCalendarDays>{days}</TextCalendarDays>
                        </CalendarCard>
                    </ContentStarStatus>


                </ContentCard>

            </ContainerCardClinic>

        )
    }


}
//////////////////////////////// FIM CLINIC SELECT




//////////////////////////////// INICIO DOCTOR SELECT
export const CardDoctorSelect = ({
    id,
    image,
    name,
    specialty,
    select,
    onPress
}) => {

    if (select === id) {
        <ContainerCard>

            <DoctorImage
                source={image}
            />

            <DoctorContentCard>

                <DoctorDataCard>

                    <DoctorName>{name}</DoctorName>

                    <DoctorSpecialty>{specialty}</DoctorSpecialty>

                </DoctorDataCard>

            </DoctorContentCard>
        </ContainerCard>

    } else {

        <ContainerCardDoctorSelect onPress={onPress}>

            <DoctorImage
                source={image}
            />

            <DoctorContentCard>

                <DoctorDataCard>

                    <DoctorName>{name}</DoctorName>

                    <DoctorSpecialty>{specialty}</DoctorSpecialty>

                </DoctorDataCard>

            </DoctorContentCard>

        </ContainerCardDoctorSelect>

    }

}
//////////////////////////////// FIM DOCTOR SELECT