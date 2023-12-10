import { View, Text, Image, Pressable, TextInput, TouchableOpacity, StyleSheet, Button, Alert } from 'react-native'
import React, { useState, Component } from 'react'
import SelectDropdown from 'react-native-select-dropdown';
import axios from 'axios'; // Importa Axios

const Register = ({ navigation }) => {

    const [postData, setPostData] = useState({
        // Inicializa tu objeto de datos aquí
        nombre: '',
        email: '',
        pass: '',
        tipoUsuario: '',
        status: ''
    });
    const genders = ["Masculino", "Femenino", "Otros"];

    const login = (username, password) => {
        Alert.alert(`Usuario creado ${username}, ${password}`)
    }

    const handlePostRequest = async () => {
        try {
            postData.tipoUsuario='1';
            postData.status='1';
            console.log(postData)
            const response = await axios.post('http://192.168.0.11:8080/Usuario/Save', postData);

            // Maneja la respuesta exitosa aquí
            Alert.alert('Éxito', 'Solicitud POST exitosa');
            console.log('Respuesta del servidor:', response.data);
        } catch (error) {
            // Maneja errores aquí
            Alert.alert('Error', 'Hubo un error en la solicitud POST');
            console.error('Error de solicitud POST:', error);
        }
    };

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
                <TextInput style={styles.textInputLogin} placeholder='correo' value={postData.email}
                    onChangeText={(text) => setPostData({ ...postData, email: text })} autoCapitalize='none' />
                <TextInput style={styles.textInputLogin} placeholder='contraseña' value={postData.pass} secureTextEntry={true}
                    onChangeText={(text) => setPostData({ ...postData, pass: text })} />
                <TextInput style={styles.textInputLogin} placeholder='nombre' value={postData.nombre}
                    onChangeText={(text) => setPostData({ ...postData, nombre: text })} />
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
                <TouchableOpacity style={styles.loginButton} onPress={handlePostRequest}>
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