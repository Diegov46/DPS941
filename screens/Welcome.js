import { View, Text, Image, Pressable, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Button } from 'react-native'
import React, { useState, Component } from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from '@expo/vector-icons';


const Welcome = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/anciano.jpg')} style={styles.imgBackground}>
                <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}
                    start={[0.1, 0.1]}
                    style={styles.linearGradient}>
                    <View style={styles.textContainer}>
                        <Text style={styles.welcomeText}>Vamos a</Text>
                        <Text style={styles.welcomeText}>comenzar</Text>
                        <Text style={styles.welcomeText2}>Recordar tus citas ya no será ningun problema,{"\n"}ahora es mas fácil organizarte.</Text>
                    </View>
                    <TouchableOpacity style={styles.signUpButton}
                        title="Registrarse ahora"
                        onPress={() => navigation.navigate("Register")}>
                            <Text style={{margin:3}}>Registrarse ahora</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </ImageBackground>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    linearGradient: {
        width: '100%',
        height: '100%',
        opacity: 0.75,
        justifyContent: 'center',
        alignItems: 'center'
    }, imgBackground: {
        flex: 1,
        width: "100%",
        alignItems: "center",
    },
    imgBackground: {
        flex: 1,
        width: "100%",
        alignItems: "center",
    },
    welcomeText: {
        fontSize: 50,
        color: "#fff",
        fontWeight: 'bold'
    },
    welcomeText2: {
        fontSize: 14,
        color: "#fff",
        marginTop: '5%'
    },
    textContainer: {
        alignItems: 'flex-start'
    },
    signUpButton:{
        marginTop:'5%',
        backgroundColor:"#FFFFFF",
        borderRadius: 6,
        width: 300,
        height:24,
        alignItems:'center'
    }

});

export default Welcome