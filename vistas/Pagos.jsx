import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, TextInput, Modal } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';



const Pagos = () => {

    const navigation = useNavigation();

    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [rne, onChangeRne] = React.useState("");

    const [modal, SetModal] = useState(false);

    const IrHome = () => {
        SetModal(false)
        
        navigation.navigate("pagos")
    }

    return (
        <View style={styles.container}>



            <Image
                source={{
                    uri: "https://enjoyespanol.com/wp-content/uploads/2019/05/pago-paypal-seguro.png"
                }}

                style={styles.photo}>
            </Image>
            <Text >Numero de Tarjeta</Text>
            <TextInput

                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                keyboardType="number-pad"
                placeholder="124-1234-1234-1234"
            />
            <Text>Fecha de Expiracion</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeRne}
                keyboardType="number-pad"
                value={rne}
                placeholder="01/22"
            />
            <Text>Codigo de Seguridad</Text>
            <TextInput
                style={styles.input}
                keyboardType="number-pad"
                onChangeText={onChangePassword}
                value={password}
                placeholder="123"
            />
            <TouchableOpacity

                onPress={() => SetModal(true)}
                style={styles.boton}
            >
                <Text style={styles.boton_text}>Pagar</Text>
            </TouchableOpacity>


            <Modal
                visible={modal}

                onRequestClose={() =>
                    SetModal(false)}
            >

                <View style={styles.container_modal}>
                    <Icon  name="check" size={60} color="green" />
                    <View style={styles.modal}>


                        <View style={styles.modal_info}>

                            <Text style={{ color: 'blue', fontSize: 25 }}>Pago Realizado con Exito!</Text>


                        </View>

                        <TouchableOpacity

                            onPress={() =>IrHome()}
                            style={styles.boton_modal_pagar}
                        >
                            <Text style={styles.boton_modal_text}>Acepta</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>


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
        backgroundColor: 'green',
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
        marginTop: 20

    },
    boton_text: {
        color: 'white',
        fontSize: 30,
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
    container_modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    modal: {

        backgroundColor: 'white',


    },
    modal_title: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",



    },
    modal_title_text: {
        fontSize: 20,
        color: 'blue'
        , marginRight: 40
    },
    boton_modal_pagar: {
        backgroundColor: 'green',
        marginBottom: 20,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 5,
        height: 50
    },
    boton_modal_text: {
        color: 'white',
        fontSize: 30,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'

    },
    modal_info: {
        padding: 20
    }
});


export default Pagos;