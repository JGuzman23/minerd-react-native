import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, TextInput, Modal, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Hr from 'react-native-hr-component';
import Icon from 'react-native-vector-icons/FontAwesome';
import Navigation from '../Navigation';



const Home = () => {

    const navigation = useNavigation();
    const [rne, onChangeRne] = React.useState("");
    const [modal, SetModal] = useState(false);

    const IrPagos =()=>{
        SetModal(false)
        navigation.navigate("pagos")
    }

    const Imprimir =()=>{
        alert("Imprimir")
    }

    return (
        <View style={styles.container}>


            <View style={styles.containers}>
                <Text style={styles.title}>Buscar Documentos</Text>

              
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeRne}
                    value={rne}
                    placeholder="¿Que buscas?"
                />
            </View>


            <ScrollView style={{ backgroundColor: 'rgb(250, 250, 250)' }}>

                <View style={styles.encabezado}>

                    <TouchableOpacity
                        onPress={() => SetModal(true)}
                    >
                        <View style={{ paddingRight: 10 }}>
                            <Text style={styles.info}  >Certificado De Bachiller</Text>
                            <Text  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor </Text>

                        </View>
                    </TouchableOpacity>

                    <View>
                        <Text  onPress={()=>Imprimir()} style={styles.opciones}  > Imprimir</Text>
                        <Text style={styles.opciones} > Descargar</Text>
                        <Text style={styles.opciones} > Legalzar</Text>
                    </View>

                </View>

                <Hr fontSize={5} lineColor="red" hrStyles={{ paddingRight: 50, paddingLeft: 50, marginTop: 20, }} />


                <View style={styles.encabezado}>

                    <TouchableOpacity
                        onPress={() => SetModal(true)}
                    >
                        <View style={{ paddingRight: 10 }}>

                            <Text style={styles.info}  >Record de Notas</Text>
                            <Text  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor </Text>

                        </View>

                    </TouchableOpacity>

                    <View>
                        <Text style={styles.opciones}  > Imprimir</Text>
                        <Text style={styles.opciones} > Descargar</Text>
                        <Text style={styles.opciones} > Legalzar</Text>
                    </View>

                </View>

                <Hr fontSize={5} lineColor="red" hrStyles={{ paddingRight: 50, paddingLeft: 50, marginTop: 20, }} />

                <View style={styles.encabezado}>
                    <TouchableOpacity
                        onPress={() => SetModal(true)}
                    >
                        <View style={{ paddingRight: 10 }}>
                            <Text style={styles.info}  >Certificado De Basica</Text>
                            <Text  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor </Text>

                        </View>

                    </TouchableOpacity>

                    <View>
                        <Text style={styles.opciones}  > Imprimir</Text>
                        <Text style={styles.opciones} > Descargar</Text>
                        <Text style={styles.opciones} > Legalzar</Text>
                    </View>

                </View>

                <Hr fontSize={5} lineColor="red" hrStyles={{ paddingRight: 50, paddingLeft: 50, marginTop: 20, }} />

                <View style={styles.encabezado}>

                    <TouchableOpacity
                        onPress={() => SetModal(true)}
                    >
                        <View style={{ paddingRight: 10 }}>
                            <Text style={styles.info}  >Certificado De Bachiller</Text>
                            <Text  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor </Text>

                        </View>
                    </TouchableOpacity>

                    <View>
                        <Text style={styles.opciones}  > Imprimir</Text>
                        <Text style={styles.opciones} > Descargar</Text>
                        <Text style={styles.opciones} > Legalzar</Text>
                    </View>

                </View>

                <Hr fontSize={5} lineColor="red" hrStyles={{ paddingRight: 50, paddingLeft: 50, marginTop: 20, }} />


                <View style={styles.encabezado}>

                    <TouchableOpacity
                        onPress={() => SetModal(true)}
                    >
                        <View style={{ paddingRight: 10 }}>

                            <Text style={styles.info}  >Record de Notas</Text>
                            <Text  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor </Text>

                        </View>

                    </TouchableOpacity>

                    <View>
                        <Text style={styles.opciones}  > Imprimir</Text>
                        <Text style={styles.opciones} > Descargar</Text>
                        <Text style={styles.opciones} > Legalzar</Text>
                    </View>

                </View>

                <Hr fontSize={5} lineColor="red" hrStyles={{ paddingRight: 50, paddingLeft: 50, marginTop: 20, }} />

                <View style={styles.encabezado}>
                    <TouchableOpacity
                        onPress={() => SetModal(true)}
                    >
                        <View style={{ paddingRight: 10 }}>
                            <Text style={styles.info}  >Certificado De Basica</Text>
                            <Text  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor </Text>

                        </View>

                    </TouchableOpacity>

                    <View>
                        <Text style={styles.opciones}  > Imprimir</Text>
                        <Text style={styles.opciones} > Descargar</Text>
                        <Text style={styles.opciones} > Legalzar</Text>
                    </View>

                </View>

                <Hr fontSize={5} lineColor="red" hrStyles={{ paddingRight: 50, paddingLeft: 50, marginTop: 20, }} />


            </ScrollView>

            <Modal
                visible={modal}
                transparent
                onRequestClose={() =>
                    SetModal(false)}
            >

                <View style={styles.container_modal}>
                    <View style={styles.modal}>
                        <View style={styles.modal_title}>
                            <Text style={styles.modal_title_text} >
                            Certificado de Bachiller 
                            </Text>
                          
                            <Icon onPress={() =>
                                SetModal(false)}  name="close" size={30} color="black" />
                        </View>

                        <View style={styles.modal_info}>
                            <Text onPress={()=> alert('Tienes que pagar')} style={{ color: 'gray' }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Text>

                            <Text style={{ marginTop: 10,  fontWeight: 'bold' }}>Estado de legalizacion</Text>
                            <Text style={{ color: 'green' }}>Disponible</Text>

                            <Text style={{ marginTop: 10, fontWeight: 'bold' }} >Precio</Text>
                            <Text style={{ color: 'blue' }} >500.00</Text>
                        </View>

                        <TouchableOpacity

                            onPress={() => IrPagos() }
                            style={styles.boton_modal_pagar}
                        >
                            <Text style={styles.boton_modal_text}>Pagar</Text>
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

    },containers: {
      
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    },
    photo: {
        height: 200,
        width: 200,
        borderRadius: 100,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 20,
        marginTop: 20

    },
    subTitle: {
        display: 'flex',
        marginTop: 20,
        color: 'blue',
        fontWeight: 'bold',
        marginLeft: -250


    },
    opciones: {
        color: 'gray',
        margin: 3,
        textDecorationColor:'gray',
        textDecorationLine:'underline'
        


    },
    encabezado: {

        marginTop: 20,
        flexDirection: "row",
        alignContent: 'space-between',

        marginRight: 70,
        marginLeft: 40
    },
    info: {
        color: 'blue',

        marginBottom: 5,
        fontSize: 15

    },
    boton: {
        backgroundColor: 'red',
        borderRadius: 18

    },
    boton_text: {
        color: 'white',
        fontSize: 40,
        padding: 10
    },
    container_modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000044'
    },
    modal: {
        marginTop: 50,
        width: 300,
        height: 300,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5

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
        ,marginRight:40
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
export default Home;