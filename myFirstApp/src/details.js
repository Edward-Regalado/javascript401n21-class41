import React, { useEffect, useState } from 'react';

import { StyleSheet, View, Button, Text, KeyboardAvoidingView, ImageBackground, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import getImageForWeather from '../utils/getImageForWeather';

import image from '../utils/getImageForWeather';
import getIconForWeather from '../utils/getIconForWeather';
import getIcon from '../utils/getIconForWeather';

function Details(props) {

    return (
    <KeyboardAvoidingView styles={styles.container} behavior='padding'>
        <ImageBackground source={image(props.route.params.weather)} style={styles.imageContainer} imageStyle={styles.image}>
            <StatusBar style={styles.status} animated={true} barStyle='light-content' />
            <View style={styles.container}>
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>Seattle</Text>
                    <Text style={[styles.largeIcon, styles.textStyle]}>{getIcon(props.route.params.weather)}</Text>
                    <Text style={[styles.currentTemp, styles.textStyle]}>38 F</Text>
                    <Text style={[styles.currentTemp, styles.textStyle]}>Feels like: 36</Text>
                    <Text styles={[styles.currentTemp, styles.textStyle]}>Humidity</Text>
                    <Text styles={[styles.currentTemp, styles.textStyle]}>Wind Speed</Text>
                    <Text styles={[styles.currentTemp, styles.textStyle]}>Direction Deg</Text>
                    <Button
                    title="Home"
                    onPress={() => navigation.props.navigate('Home')}
                    />
                </View>
            </View>
        </ImageBackground>
    </KeyboardAvoidingView>
    );
  }

  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    detailsContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.4)',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        borderWidth: 2,
        borderRadius: 10,
        width: 300,
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    status: {
        backgroundColor: '#61dafb',
    },
    title: {
        width: '100%',
        textAlign: 'center',
        fontSize: 36,
        // color: '#02111B',
        color: 'white',
        marginTop: 20, 
    },
    currentTemp: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textStyle: {
        textAlign: 'center',
        fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
        color: 'white',
    },
    largeIcon: {
        fontSize: 50,
        marginBottom: 10,
    }
});

export default Details;