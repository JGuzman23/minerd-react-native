import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from 'react-native-vector-icons/MaterialCommunityIcons';



//pantallas

import Home from './vistas/Home';
import Login from './vistas/login';
import Pagos from './vistas/Pagos';
import Register from './vistas/Register';



const HomeStackNavigator = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function MyStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="login"

        >
            <HomeStackNavigator.Screen
                name="register"
                component={Register}
            />

            <HomeStackNavigator.Screen
                name="login"
                component={Login}
            />
            <HomeStackNavigator.Screen
                name="home"
                component={Home}
                options={{
                    
                   headerBackVisible:false,
                   headerTitle:'Documentos',
                   headerTintColor:'red'
                }}
            />
            <HomeStackNavigator.Screen
            name="pagos"
            component={Pagos}
            options={{
                
               headerBackVisible:false,
               headerTitle:'Modulo de Pago',
               headerTintColor:'red'
            }}
        />


        </HomeStackNavigator.Navigator>
    );
}

function MyTap() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: 'purple'
            }} >
            <Tab.Screen
                name='Home'
                component={MyStack}
                options={{
                    headerShown: false,
                    tabBarLabel: 'inicio',

                    tabBarBadge: 1
                }}
            />

            <Tab.Screen name='register' component={register} />

        </Tab.Navigator>

    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}