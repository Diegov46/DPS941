import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import StyledText from './StyledText';

const RespositoryItem = (repo) => {
    // Formatear la fecha
    const formattedFecha = repo.fecha_Inscripcion ? new Date(repo.fecha_Inscripcion).toISOString().split('T')[0] : '';

    return (
        <View key={repo.id} style={{ padding: 20, paddingBottom: 5, paddingTop: 5 }}>
            <View style={styles.especialidad}>
                <View>
                    <StyledText bold>Dui: {repo.dui} </StyledText>
                    <StyledText bold>Nombre: {repo.nombre} </StyledText>
                    <StyledText bold>Edad: {repo.edad} </StyledText>
                    <StyledText bold>Sexo: {repo.sexo} </StyledText>
                    <StyledText bold>Altura: {repo.altura} </StyledText>
                    <StyledText bold>Peso: {repo.peso} </StyledText>
                    <StyledText bold>Responsable: {repo.responsable} </StyledText>
                    <StyledText bold>Fecha Ingreso: {formattedFecha} </StyledText>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    especialidad: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#B4B8BB',
        borderRadius: 20,
        padding: 20,
        overflow: 'hidden',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    }
});

export default RespositoryItem;
