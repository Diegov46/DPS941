import { View, Text, Image, Pressable, TextInput, TouchableOpacity, StyleSheet, Button, Alert } from 'react-native'
import React, { useState, Component } from 'react'
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AuthSession from 'expo-auth-session';
import Doctors from './Doctors';


const Login = ({ navigation }) => {
    
    WebBrowser.maybeCompleteAuthSession();

    const [userInfo, setUserInfo] = React.useState(null);
    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: "968404856212-eh8evnvd0gkscloieh0u6fju7jp12a9f.apps.googleusercontent.com",
        iosClientId: "968404856212-sh9ki83j5t3371bmc7d93pulh41ab1fk.apps.googleusercontent.com"
    });

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = (username, password) => {
        Alert.alert(`Iniciando sesion ${username}, ${password}`)
    }

    return (

        <View style={styles.container}>
            <View>
                <Image source={require("../assets/logo_1.png")} style={styles.img_login} />
            </View>
            <View style={styles.loginContainer}>
                <TextInput style={styles.textInputLogin} placeholder='usuario/correo' value={username}
                    onChangeText={(text) => setUsername(text)} />
                <TextInput style={styles.textInputLogin} placeholder='contraseña' value={password} secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)} />
            </View>
            <View>
                <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Tabs')}>
                    <Text style={{ color: "#fff" }}>Iniciar sesión</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 30 }}>
                <View style={styles.orOption}></View>
                <Text> O iniciar sesión con</Text>
                <View style={styles.orOption}></View>
            </View>
            <View>
                <TouchableOpacity style={styles.googleButton} onPress={() => promptAsync()}>
                    <Image source={require("../assets/google.png")} style={styles.googleIcon} />
                    <Text style={{ color: "black" }}> Iniciar con Google</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img_login: {
        height: 150,
        width: 150,
        position: "absolute",
        zIndex: 1,
        bottom: -10,
        right: -75
    },
    loginContainer: {
        backgroundColor: "#C3C3C4",
        width: 300,
        height: 140,
        borderRadius: 6
    },
    textInputLogin: {
        width: 290,
        height: 40,
        margin: 5,
        top: 15,
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 12
    },
    loginButton: {
        width: 170,
        height: 40,
        margin: 5,
        top: 15,
        backgroundColor: "#C3C3C4",
        padding: 10,
        borderRadius: 12,
        alignItems: "center"
    },
    googleButton: {
        flexDirection: 'row',
        width: 170,
        height: 50,
        margin: 5,
        top: 5,
        padding: 10,
        borderRadius: 12,
        alignItems: "center",
        borderWidth: 2,
        borderColor: "black"
    },
    orOption: {
        flex: 1,
        height: 1,
        backgroundColor: "#C3C3C4",
        marginHorizontal: 10
    },
    googleIcon: {
        height: 36,
        width: 36
    }
});

export default Login