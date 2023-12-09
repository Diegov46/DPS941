import React from "react";
import { View, Text , StyleSheet, Image} from "react-native";
import StyledText from './StyledText';

const RespositoryItem = (repo) =>(
    <View key={repo.id} style={{padding:20, paddingBottom:5, paddingTop:5, }}>
        <View style={styles.especialidad}>
            <Image style={styles.image} source={{uri: repo.img}}></Image>
            <View>
            <StyledText big blue>{repo.nombre} </StyledText>
                <StyledText text >{repo.tipoUsuario.nombre_Tipo_Usuario} </StyledText>
                <StyledText bold>{repo.email} </StyledText>
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
    image:{
        width: 100,
        height: 100,
        borderRadius: 50
    }
})



export default RespositoryItem;