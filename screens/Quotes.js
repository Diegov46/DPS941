import React, { useState, useEffect } from 'react';
import { StatusBar, Modal, StyleSheet, View, ScrollView, Text, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Title from '../components/Title';
import SearchBarAdd from '../components/SearchBarAdd';
import CalendarCMP from '../components/Calendar';
import ListItem from '../components/ListItem';
import axios from 'axios'; // Importa Axios

      //fecha
      //hora
      //paciente.altura
      //paciente.responsable
      //paciente.sexo
      //paciente.nombre
      //paciente.dui
      //paciente.edad
      //estadoCita --Evaluar
      
const Quotes = () => {
  const [listaDatos, setListaDatos] = useState([]);
  const [selectedDate, setSelectedDate] = useState(getTodayDateString());
  const [markedDates, setMarkedDates] = useState({});
  const [filteredDatos, setFilteredDatos] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.56.1:8080/Cita/All');
        //console.log('Datos de la API:', response.data);
        const formattedData = response.data.map(item => ({
          ...item,
          fecha: formatDate(item.fecha),
        }));
        
        setListaDatos(formattedData);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
        console.error('Error details:', error.message, error.stack);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    // Creamos un objeto con las fechas marcadas en el formato requerido
    const markedDatesObject = {};
    console.log(listaDatos);
    listaDatos.forEach(item => {
      markedDatesObject[item.fecha] = {
        customStyles: {
          container: {
            backgroundColor: '#fca5b6',
            elevation: 2,
          },
          text: {
            color: 'white',
          },
        },
      };
    });
    setMarkedDates(markedDatesObject);
  }, [listaDatos]);

  useEffect(() => {
    const filtered = listaDatos.filter(item => item.fecha === selectedDate);
    //console.log(filtered);
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };
  

  
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
        <Title>Historial de Citas</Title>
        <SearchBarAdd placeholderText="Encontrar un paciente" showModal={showModal} />
        {/** Buscar por dui o por paciente*/}
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


