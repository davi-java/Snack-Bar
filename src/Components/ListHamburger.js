import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class ListHamburger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ListHamburger: props.data
        }
    }
    render() {
        let hamburger = this.state.ListHamburger
        return (
            <View style={styles.container}>

                <View style={styles.viewHamburger}>

                    <Image
                        source={{ uri: hamburger.image }}
                        style={styles.image}
                    />

                    <View style={styles.viewInformation}>
                        <View style={styles.nomeIcon}>
                            <Text style={styles.nome}>
                                {hamburger.nome}
                            </Text>
                            <FontAwesome
                                name="heart"
                                size={20}
                            />
                        </View>
                        <View style={styles.viewLocation}>
                            <Text style={styles.textLocation}>
                                {hamburger.location}
                            </Text>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewHamburger:{
        flexDirection:'row',
        borderBottomWidth:0.2,
        borderBottomColor:'#000',
        margin: 15,
        height: 110
    },
    viewInformation:{
        marginLeft: 15,
        flex: 1
    },
    nomeIcon:{
        flexDirection:'row'
    },
    image: {
        height: 95,
        width: 95,
        borderRadius: 8
    },
    nome:{
        fontSize: 22,
        fontWeight:'bold',
        flex: 1
    },
    viewLocation:{

    },
    textLocation:{
        fontSize: 15
    }
})