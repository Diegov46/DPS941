import { View, Text, Image, Pressable, TextInput, TouchableOpacity, StyleSheet, Button, Alert } from 'react-native'
import React, { useState, Component } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown'

const Register = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const genders = ["Masculino", "Femenino", "Otros"];

    const login = (username, password) => {
        Alert.alert(`Usuario creado ${username}, ${password}`)
    }

    return (

        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                <View style={styles.orOption}></View>
                <Text style={styles.tittle}>Crear Cuenta</Text>
                <View style={styles.orOption}></View>
            </View>

            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Image source={require("../assets/createAccount.png")} style={styles.img_login} />
            </View>
            <View style={styles.loginContainer}>
                <TextInput style={styles.textInputLogin} placeholder='correo' value={email}
                    onChangeText={(text) => setEmail(text)} autoCapitalize='none' />
                <TextInput style={styles.textInputLogin} placeholder='contraseña' value={password} secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)} />
                <TextInput style={styles.textInputLogin} placeholder='nombre' value={firstName}
                    onChangeText={(text) => setFirstName(text)} />
                <TextInput style={styles.textInputLogin} placeholder='apellido' value={lastName}
                    onChangeText={(text) => setLastName(text)} />
                <SelectDropdown data={genders} buttonStyle={styles.textInputLogin}
                    defaultButtonText='Genero' buttonTextStyle={{ fontSize: 12, textAlign: 'left' }}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }} />
            </View>
            <View style={styles.containerRegister}>
                <TouchableOpacity style={styles.loginButton} onPress={() => login(email, password)}>
                    <Text style={{ color: "#fff" }}>Registrarse</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text>¿Ya posees una cuenta? prueba </Text>
                <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
                    <Text style={{ color: "#fff" }}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#D2E0FF   "
    },
    tittle: {
        bottom: 80,
        fontSize: 30,
        fontWeight: 'bold'
    },
    img_login: {
        height: 70,
        width: 70,
        position: "absolute",
        zIndex: 1,
        bottom: -10,
    },
    loginContainer: {
        width: 305,
        height: 280,
        borderRadius: 6,
        //backgroundColor: "#61707D"
    },
    textInputLogin: {
        width: 290,
        height: 40,
        margin: 5,
        top: 15,
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 12,
        borderWidth: 1
    },
    loginButton: {
        width: 290,
        height: 40,
        margin: 5,
        backgroundColor: "#2C56B0",
        padding: 10,
        borderRadius: 12,
        alignItems: "center"
    },
    orOption: {
        flex: 1,
        height: 1,
        backgroundColor: "#C3C3C4",
        marginHorizontal: -30
    },

});

export default Register