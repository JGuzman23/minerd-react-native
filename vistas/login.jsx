import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from "react";


const Login = () => {

    const navigation = useNavigation();

    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const login = () => {

        const _email = '1234';
        const _pass = '1234';

        if (_email == email && _pass == password) {
            navigation.navigate("home");
        } else {
            alert("usuario Incorrecto");
        }

    }
    return (
        <View style={styles.container}>

            <Image
                source={{
                    uri: "http://apps.minerd.gob.do/Resources/Images/logo-header-aplicaciones-transparente.png"
                }}

                style={styles.photo}>
            </Image>

            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                secureTextEntry={true}
                placeholder="Contrasena"
            />


            <TouchableOpacity
                onPress={login}
                style={styles.boton}
                
            >
                <Text style={styles.boton_text}>Iniciar Sesion</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("register")}
                style={styles.boton_R}
            >
                <Text style={styles.boton_text}>Registrarme</Text>
            </TouchableOpacity>


        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',

    },
    photo: {
        height: 200,
        width: 200,
        borderRadius: 100,
        resizeMode: 'contain',
        marginTop: -1
    },
    title: {
        fontSize: 30
    },
    boton: {
        backgroundColor: 'red',
        borderRadius: 5,
        width: 300

    },
    boton_R: {
        backgroundColor: 'rgb(4, 32, 74)',
        borderRadius: 5,
        width: 300,
        marginTop: 5

    },
    boton_text: {
        color: 'white',
        fontSize: 20,
        padding: 10,
        textAlign: 'center'
    },
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    },
});

export default Login;