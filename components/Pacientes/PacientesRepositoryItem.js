import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import StyledText from './StyledText';

const RespositoryItem = (repo) => (
    <View key={repo.id} style={{ padding: 20, paddingBottom: 5, paddingTop: 5, }}>
        <View style={styles.especialidad}>
            <View>
                <StyledText big blue>{repo.dui} </StyledText>
                <StyledText text >{repo.nombre} </StyledText>
                <StyledText bold>{repo.edad} </StyledText>
                <StyledText bold>{repo.sexo} </StyledText>
                <StyledText bold>{repo.altura} </StyledText>
                <StyledText bold>{repo.peso} </StyledText>
                <StyledText bold>{repo.responsable} </StyledText>
                <StyledText bold>{repo.fecha_Inscripcion} </StyledText>

            </View>

        </View>
    </View>
)

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
})



export default RespositoryItem;