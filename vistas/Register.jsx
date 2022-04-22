import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const Register = () => {

    const navigation = useNavigation();

    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [rne, onChangeRne] = React.useState("");

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
                onChangeText={onChangeRne}
                value={rne}
                placeholder="RNE"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Contrasena"
            />


            <TouchableOpacity

                onPress={() => navigation.navigate("home")}
                style={styles.boton}
            >
                <Text style={styles.boton_text}>Registrarme</Text>
            </TouchableOpacity>

            <Button
            style={styles.boton_L}
                color="black"
                title="¿Ya tienes cuenta ?"
                onPress={() => navigation.navigate("login")} />
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
    boton_L: {
        marginTop:20

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


export default Register;