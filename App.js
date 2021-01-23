import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  const img = require('./src/Images/Hamburger.jpg');
  return (
    <View style={styles.container}>
      <ImageBackground
        source={img}
        style={styles.imageContainer}
        imageStyle={styles.image}>

        <View style={styles.areaLogin}>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.textBtnLogin}>
              Log in
          </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.textBtnLogin}>
              Sing up
          </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <Icon
            name="ios-restaurant"
            size={60}
            color='#FFF'
            style={{marginBottom: 15}}
          />
          <Text style={styles.textHeader}>
            Discover the best foods from over 2,000 restaruants.
          </Text>
        </View>

        <View style={styles.areaBtn}>
          <TouchableOpacity style={styles.BtnFace}>
            <Icon
              name="ios-logo-facebook"
              size={30}
            />
            <Text style={styles.textBtnFace}>
              Continue with Facebook
          </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Btn}>
            <Text style={styles.textBtn}>
              Sign up with email
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.textFooter}>
            By signing up you agree to our terms of Use and Privacy Policy
          </Text>
        </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer: {
    flex: 1
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover'
  },

  areaLogin:{    
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent:'flex-end'
  },
  loginBtn: {
    marginTop:5,
    marginEnd: 10
  },
  header: {
    flex: 1,    
    alignItems: 'center'
  },
  footer: {  
    marginBottom: 5  
  },
  areaBtn: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  Btn: {
    width: 330,
    height: 50,
    borderColor: '#FFF',
    borderWidth: 1.5,
    marginBottom: 15,
    borderRadius: 10,
    justifyContent: 'center',
  },
  BtnFace: {
    width: 330,
    height: 50,
    borderColor: '#FFF',
    borderWidth: 1.5,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBtnLogin: {
    color: '#FFF',
    fontSize:20,
    
  },
  textBtn: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textBtnFace: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingLeft: 15
  },
  textHeader: {
    color: '#FFF',
    fontSize: 22,
    textAlign: 'center',
    marginLeft: 40,
    marginEnd: 40,
    fontWeight: 'bold'
  },
  textFooter: {
    color: '#FFF',
    fontSize: 15,
    textAlign: 'center',
    paddingLeft: 50,
    paddingEnd: 50
  },
})


