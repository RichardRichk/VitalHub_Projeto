import { React, useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';

//Idioma
LocaleConfig.locales['pt-br'] = {
    monthNames: [
        'Janeiro', 
        'Fevereiro', 
        'Março', 'Abril', 
        'Maio', 
        'Junho', 
        'Julho', 
        'Agosto', 
        'Setembro', 
        'Outubro', 
        'Novembro', 
        'Dezembro'
    ],

    monthNamesShort: [
        'jan.', 
        'fev.', 
        'mar.', 
        'abr.', 
        'maio', 
        'jun.', 
        'jul.', 
        'ago.', 
        'set.', 
        'out.', 
        'nov.', 
        'dez.'
    ],

    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['dom.', 'seg.', 'ter.', 'qua.', 'qui.', 'sex.', 'sáb.'],
    today: "Hoje"
};

//Idioma padrao
LocaleConfig.defaultLocale = 'pt-br';


export const CalendarChoose = () => {

    //Data Selecionada
    const [selected, setSelected] = useState('');

    const isFutureDate = (dateString) => {
        const selectedDate = new Date(dateString);
        const currentDate = new Date();
        return selectedDate > currentDate;
    };

    return (
        <Calendar
            style={{
                width: '100%', // Define a largura do calendário como 100% do contêiner pai
                aspectRatio: 2, // Mantém a proporção do calendário como 2:1 (largura:altura)
                backgroundColor: '#fafafa',
                marginBottom: 130,
                marginTop: 35,
            }}

            //Esconde os dias de outros meses (Não esta sendo utilizado)
            //hideExtraDays

            //Permite a mudança de meses
            enableSwipeMonths

            // Função para atualizar a data selecionada quando um dia é pressionado
            onDayPress={day => {
                if (isFutureDate(day.dateString)) {
                    setSelected(day.dateString);
                } else {
                    alert('Por favor, selecione uma data futura.');
                }
            }}
            
            // Mostra as setas de navegação
            hideArrows={false}


            theme={{
                calendarBackground: '#fafafa', // Define a cor de fundo do calendário
                dayContainerStyle: {
                    backgroundColor: '#fafafa', // Define a cor de fundo dos dias do calendário
                },
                selectedDayBackgroundColor: '#49B3BA',
                selectedDayTextColor: '#FFFFFF',
                dayBackgroundColor: 'transparent'
            }}


            // Marcação de datas selecionadas
            markedDates={{
                [selected]: { selected: true, disableTouchEvent: true }
            }}
        />
    )
}