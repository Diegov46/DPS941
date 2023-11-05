import React, { useState, useEffect } from 'react';
import { StatusBar, Modal, StyleSheet, View, ScrollView, Text, TouchableOpacity, TextInput } from 'react-native';
import RepositoryList from '../components/doct/RepositoryList';
import SearchBarAdd from '../components/SearchBarAdd';
import Title from '../components/Title';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const showModal = () => setModalVisible(true);
const hideModal = () => setModalVisible(false);

const onPressAddButton = () => {
  showModal();
};

const Doctors = () => {

    return (
        <SafeAreaProvider>
            <View style={styles.title}>
            <Title>Doctores</Title>
            <Text> </Text>
            </View>
            <View style={styles.container}>
                <SearchBarAdd placeholderText="Encontrar un Doctor"  showModal={showModal} />
                <StatusBar style="auto" />
                <Text> </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 50 }}>
                    <RepositoryList></RepositoryList>
                </View>
                
            </View>
        </SafeAreaProvider>
    )
}


const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        paddingTop: 20,
    }
})

export default Doctors;
