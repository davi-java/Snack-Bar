import React,{useState} from 'react';
import {
    View, Text, TextInput, TouchableOpacity, StyleSheet
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import firebase from '/home/davi/Documents/React-Native/Projects/Snack_Bar/src/FirebaseConnection/firebaseConnection'

export default function Login() {
    const navigation = useNavigation();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    async function signUp(){
        await firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((value) => {
            alert('Welcome: ' + value.user.email);
            setPassword('');
            setEmail('');
            setName('');
            navigation.navigate('Home')
        })
        .catch((error) => {
            alert('Error: ' + error.code);
        });
    }

    return (
        <View style={styles.container}>

            <View style={styles.viewWelcome}>
                <TouchableOpacity
                    style={styles.btnBack}
                    onPress={() => { navigation.goBack() }}>
                    <Icon
                        name="ios-chevron-back"
                        size={25}
                        color='#FFF'
                    />
                </TouchableOpacity>
                <Text style={styles.textWelcome}>
                    Creat Account
                </Text>
            </View>

            <View style={styles.viewTextInput}>
                <View style={styles.viewInputIcon}>
                    <Icon
                        name="ios-person" size={20}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Name"
                        onChangeText={(text => setName(text))}
                        value={name} />
                </View>
                <View style={styles.viewInputIcon}>
                    <Icon
                        name="ios-mail" size={20}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Email"
                        onChangeText={(text) => setEmail(text)}
                        value={email} />
                </View>
                <View style={styles.viewInputIcon}>
                    <FontAwesome
                        name="lock" size={20}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Password"
                        onChangeText={(text) => setPassword(text)}
                        value={password} />
                </View>
            </View>

            <View style={styles.viewBtn}>
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => signUp() } >
                    <Text style={styles.textBtnLogin}>
                        Sing up
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnSingUp}
                    onPress={() => { navigation.navigate('Login') }} >
                    <Text style={styles.textBtnSingUp}>
                        Log in
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewWelcome: {
        flex: 1,
        backgroundColor: '#994700',
        borderBottomLeftRadius: 100,
        borderTopEndRadius: 100,
        zIndex:1
    },
    viewTextInput: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9
    },
    viewBtn: {
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    },
    viewInputIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        borderBottomColor: '#000',
        borderBottomWidth: 1
    },

    btnBack: {
        margin: 10,
        width: 20
    },
    textWelcome: {
        marginLeft: 20,
        color: '#FFF',
        fontSize: 35,
        marginTop: 25
    },

    input: {
        width: 290,
        height: 45,
        padding: 10,
        fontSize: 15,
        marginLeft: 10,
        color: '#000'
    },

    btnLogin: {
        backgroundColor: '#994700',
        width: 320,
        height: 45,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15
    },
    textBtnLogin: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    btnSingUp: {
        width: 320,
        height: 45,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#994700'
    },
    textBtnSingUp: {
        color: '#994700',
        fontSize: 20,
        fontWeight: 'bold'
    }


})