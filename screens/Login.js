import { View, Text, Image, Pressable, TextInput, TouchableOpacity, StyleSheet, Button, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import axios from 'axios'; // Importa Axios
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const [usuario, setUsuario] = useState();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    GoogleSignin.configure({
        webClientId: '968404856212-hc24pcd9878vd9mnfqcjih0g33t9sakg.apps.googleusercontent.com',
    });

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    useEffect(() => {

        if (user != null) {
            navigation.navigate("Tabs");
        }

    }, [user]);

    const login = async () => {
        axios.get('http://192.168.0.11:8080/Usuario/FindByCorreo/' + username).then(res => {
            setUsuario(res.data.nombre);
            // Handle Your response here.
            // Likely you may want to set some state
            if (res.data.email == username && res.data.pass == password) {
                navigation.navigate('Tabs');
            } else {
                Alert.alert("Revise las credenciales")
            }

        }).catch(e => {
            Alert.alert("No se pudo iniciar sesión." + e);
            console.log(e)
        });
        if (usuario != null && usuario != undefined) {
            await AsyncStorage.setItem('usuario', usuario);
        }
    };

    const onGoogleButtonPress = async () => {
        // Check if your device supports Google Play
        //await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        try {
            const { idToken } = await GoogleSignin.signIn();
            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            const user_sign_in = auth().signInWithCredential(googleCredential);

            user_sign_in.then((user) => {
                console.log(user.displayName);
            })
                .catch((error) => {
                    console.log(error);
                });
            if (user != null && user != undefined) {
                await AsyncStorage.setItem('usuario', user.displayName);
            }
        } catch (e) {
            Alert.alert("No fue posible iniciar sesión");
            console.log("No fue posible iniciar sesión");
        }

    }

    if (initializing) return null;

    if (user == null) {
        return (
            <View style={styles.container}>
                <View>
                    <Image source={require("../assets/logo_1.png")} style={styles.img_login} />
                </View>
                <View style={styles.loginContainer}>
                    <TextInput style={styles.textInputLogin} placeholder='correo' value={username}
                        onChangeText={(username) => setUsername(username)} autoCapitalize='none' />
                    <TextInput style={styles.textInputLogin} placeholder='contraseña' value={password} secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)} />
                </View>
                <View>
                    <TouchableOpacity style={styles.loginButton} onPress={login}>
                        <Text style={{ color: "#fff" }}>Iniciar sesión</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 30 }}>
                    <View style={styles.orOption}></View>
                    <Text> O iniciar sesión con</Text>
                    <View style={styles.orOption}></View>
                </View>
                <View>
                    <GoogleSigninButton onPress={onGoogleButtonPress} />
                </View>

            </View>
        )
    }

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