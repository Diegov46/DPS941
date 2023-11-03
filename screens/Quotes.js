import React, { useState, useEffect } from 'react';
import { StatusBar, Modal, StyleSheet, View, ScrollView, Text, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Title from '../components/Title';
import SearchBarAdd from '../components/SearchBarAdd';
import CalendarCMP from '../components/Calendar';
import ListItem from '../components/ListItem';

const Quotes = () => {
    const listaDatos = [
        { nombre: 'Juan', dui: '123456789', sexo: 'Masculino', hora: '09:00-09:30', fecha: '2023-11-02' },
        { nombre: 'Maria', dui: '987654321', sexo: 'Femenino', hora: '11:30-12:00', fecha: '2023-11-03' },
        { nombre: 'Carlos', dui: '567890123', sexo: 'Masculino', hora: '14:45-15:15', fecha: '2023-11-04' },
        { nombre: 'Ana', dui: '345678901', sexo: 'Femenino', hora: '16:20-16:50', fecha: '2023-11-05' },
        { nombre: 'Pedro', dui: '012345678', sexo: 'Masculino', hora: '18:00-18:30', fecha: '2023-11-06' },
        { nombre: 'Laura', dui: '789012345', sexo: 'Femenino', hora: '20:30-21:00', fecha: '2023-11-07' },
        { nombre: 'Gabriel', dui: '234567890', sexo: 'Masculino', hora: '09:45-10:15', fecha: '2023-11-08' },
        { nombre: 'Sofía', dui: '890123456', sexo: 'Femenino', hora: '12:15-12:45', fecha: '2023-11-09' },
        { nombre: 'Luis', dui: '456789012', sexo: 'Masculino', hora: '15:30-16:00', fecha: '2023-11-10' },
        { nombre: 'Elena', dui: '678901234', sexo: 'Femenino', hora: '17:10-17:40', fecha: '2023-11-11' },
      ];

  const [selectedDate, setSelectedDate] = useState(getTodayDateString());
  const [markedDates, setMarkedDates] = useState({});
  const [filteredDatos, setFilteredDatos] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Creamos un objeto con las fechas marcadas en el formato requerido
    const markedDatesObject = {};
    listaDatos.forEach(item => {
      markedDatesObject[item.fecha] = {
        customStyles: {
          container: {
            backgroundColor: '#fca5b6',
            elevation: 2
          },
          text: {
            color: 'white'
          }
        }
      }
    });
    setMarkedDates(markedDatesObject);
  }, []);

  useEffect(() => {
    const filtered = listaDatos.filter(item => item.fecha === selectedDate);
    setFilteredDatos(filtered);
  }, [selectedDate]);
  
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const onPressAddButton = () => {
    showModal();
  };

  const onDayPress = day => {
    setSelectedDate(day.dateString);
  };

  return (
    <SafeAreaProvider>
    <View style={styles.container}>
        <Title>Historial de Citas</Title>
        <SearchBarAdd placeholderText="Encontrar un paciente" showModal={showModal} />
        <StatusBar style="auto" />
      <CalendarCMP onDayPress={onDayPress} markedDates={markedDates} />
      <Text style={styles.fecha}>{`Fecha: ${selectedDate}`}</Text>
      <ScrollView style={styles.scrollView}>
        {filteredDatos.map((item, index) => (
          <ListItem key={index} {...item} />
        ))}
      </ScrollView>
      <Modal
  visible={isModalVisible}
  animationType="slide"
  transparent={true}
  onRequestClose={hideModal}
>
  <View style={styles.modalContainer}>
    <Text>Agendar Nueva Cita</Text>
    <TextInput
      style={styles.input}
      placeholder="Paciente"
    />
    <TextInput
      style={styles.input}
      placeholder="Fecha"
    />
    <TextInput
      style={styles.input}
      placeholder="Detalles"
    />
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={hideModal}>
        <Text style={styles.closeButton}>Cerrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={hideModal}>
        <Text style={styles.sendButton}>Enviar</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>
    </View>
    </SafeAreaProvider>
  );
};

const getTodayDateString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollView: {
      height: 200,
      width: '100%',
      padding: 10,
    },
    fecha: {
      marginTop: 10,
      fontSize: 14,
      marginBottom: 10,
      marginRight: '75%',
      textAlign: 'left'
    },
    calendar: {
      width: '80%',
    },
    modalContainer: {
      flex: 1,
      backgroundColor: 'white',
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingLeft: 10,
      width: '100%',
    },
    closeButton: {
      marginTop: 20,
      color: 'blue',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    sendButton: {
      marginTop: 20,
      color: 'green',
    },
  });
  

export default Quotes;


