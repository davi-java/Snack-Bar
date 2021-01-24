import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import ListHamburger from '/home/davi/Documents/React-Native/Projects/Snack_Bar/src/Components/ListHamburger'


export default function Home() {
    const [hamburger, setHamburger] = useState(
        [{ id: 1, nome: "Good Day Cafe", location: "cafe-westem Food", price: 15.50, image: 'https://i.pinimg.com/236x/49/f0/c6/49f0c687caa26d160bd9e7fe9985ac78.jpg' },
        { id: 2, nome: "Cheese Lovers", location: "cafe-westem Food", price: 10.50, image: 'https://i.pinimg.com/236x/51/2b/a3/512ba35ee77def168090b95dabdb0036.jpg' },
        { id: 3, nome: "Really Cool Pizza", location: "cafe-westem Food", price: 10.50, image: 'https://i.pinimg.com/236x/89/eb/5a/89eb5afbd91b687b4acf09e77d9201b2.jpg' },
        { id: 4, nome: "Beachside Cafe", location: "cafe-westem Food", price: 10.50, image: 'https://i.pinimg.com/236x/4f/76/9b/4f769badf41c6abb8613fef766c832db.jpg' },
        { id: 5, nome: "Sydney Pizza", location: "cafe-westem Food", price: 10.50, image: 'https://i.pinimg.com/236x/72/2f/20/722f20bac70c2ed94765563130002ad1.jpg' },
        { id: 6, nome: "Good Day Cafe", location: "cafe-westem Food", price: 10.50, image: 'https://i.pinimg.com/236x/32/d7/77/32d7771c18feba1a8bda8baade613103.jpg' },
        { id: 7, nome: "Beachside Cafe", location: "cafe-westem Food", price: 35.50, image: 'https://i.pinimg.com/236x/46/5c/0b/465c0b4119dfd4392aed5ff78464a1a0.jpg' },
        { id: 8, nome: "Sydney Pizza", location: "cafe-westem Food", price: 35.50, image: 'https://i.pinimg.com/564x/8c/3d/6a/8c3d6afa0b055983401bc0d97a17d613.jpg' },]
    );
    const navigation = useNavigation();
    const img = { uri: 'https://i.pinimg.com/564x/8c/3d/6a/8c3d6afa0b055983401bc0d97a17d613.jpg' }
    return (
        <View style={styles.container}>

            <View style={styles.viewCapa}>
                <ImageBackground
                    source={img}
                    style={styles.containerImage}
                    imageStyle={styles.image}
                >
                    <TouchableOpacity
                        style={styles.btnBack}
                        onPress={() => navigation.goBack()}
                    >
                        <Icon
                            name="ios-chevron-back"
                            size={25}
                            color='#FFF'
                        />
                    </TouchableOpacity>

                    <Text style={styles.textHamburger}>
                        Hamburger
                    </Text>

                    <View style={styles.viewLocation}>
                        <Icon
                            name="ios-location"
                            size={25}
                            color='#FFF'
                        />
                        <Text style={styles.textLocation}>
                            18 Restaurants nearby
                        </Text>
                    </View>

                </ImageBackground>
            </View>

            <FlatList
                data={hamburger}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <ListHamburger data={item} />}
                showsVerticalScrollIndicator={false}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewCapa: {
        height: 280
    },
    containerImage: {
        flex: 1
    },
    image: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: 'cover'
    },
    btnBack: {
        margin: 10,
        width: 20,
        flex: 1
    },

    viewLocation: {
        flexDirection: 'row',
        margin: 10
    },

    textHamburger: {
        color: '#FFF',
        fontSize: 45,
        fontWeight: 'bold',
        margin: 10
    },
    textLocation: {
        color: '#FFF',
        fontSize: 17,
        marginLeft: 5
    }
})