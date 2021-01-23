import React from 'react';
import {
    View, Text, TextInput, TouchableOpacity, StyleSheet
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Login() {
    const navigation = useNavigation();
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
                    Welcome Back
                </Text>
            </View>

            <View style={styles.viewTextInput}>
                <View style={styles.viewInputIcon}>
                    <Icon
                        name="ios-mail" size={20}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Email" />
                </View>
                <View style={styles.viewInputIcon}>
                    <FontAwesome
                        name="lock" size={20}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Password" />
                </View>
            </View>

            <View style={styles.viewBtn}>
                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.textBtnLogin}>
                        Log in
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSingUp}>
                    <Text style={styles.textBtnSingUp}>
                        Sing up
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
        flex: 2,
        backgroundColor: '#994700',
        borderBottomLeftRadius: 100,
        borderTopEndRadius: 100
    },
    viewTextInput: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewInputIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        borderBottomColor:'#000',
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
        marginTop: 50
    },

    input: {
        width: 290,
        height: 45,
        padding: 10,
        fontSize: 15,
        marginLeft: 10,
        color:'#000'
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
        borderColor:'#994700'
    },
    textBtnSingUp: {
        color: '#994700',
        fontSize: 20,
        fontWeight: 'bold'
    }


})