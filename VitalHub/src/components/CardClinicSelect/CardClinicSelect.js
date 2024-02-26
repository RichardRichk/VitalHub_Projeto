import { ContentCard, ContainerCardClinic, ClinicName, StarContent, StarText, ContentNamePlace, ContentStarStatus, ClinicAdress } from "./Style"
import { AntDesign } from "@expo/vector-icons"

export const CardClinicSelect = ({
    name,
    rating,
}) => {


    return(

        <ContainerCardClinic>

            <ContentCard>

                <ContentNamePlace>

                    <ClinicName>Clinica Villa Lobos</ClinicName>

                    <ClinicAdress>Sao Paulo, SP</ClinicAdress>

                </ContentNamePlace>

                <ContentStarStatus>
                    <StarContent>
                        <AntDesign
                            name="star"
                            size={20}
                            color={"#F9A620"}
                        />
                        <StarText>4.6</StarText>
                    </StarContent>
                </ContentStarStatus>

            </ContentCard>

        </ContainerCardClinic>

    )

}