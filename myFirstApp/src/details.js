import React, { useEffect, useState } from 'react';

import { StyleSheet, View, Button, Text, KeyboardAvoidingView, ImageBackground, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import getImageForWeather from '../utils/getImageForWeather';

import getImage from '../utils/getImageForWeather';
import getIcon from '../utils/getIconForWeather';

function Details(props) {

    return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <ImageBackground source={getImage(props.route.params.weather)} style={styles.imageContainer} imageStyle={styles.image}>
            <StatusBar style={styles.status} animated={true} barStyle='light-content' />
            <View style={styles.container}>
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{props.route.params.forecast.name}</Text>
                    <Text style={[styles.largeIcon, styles.textStyle]}>{getIcon(props.route.params.weather)}</Text>

                    <Text style={[styles.currentTemp, styles.textStyle]}>{Math.round(props.route.params.forecast.main.temp)}&deg;F</Text>
                    <View style={styles.minMaxContainer}>
                        <Text style={[styles.minMaxText, styles.textStyle]}>Min {Math.round(props.route.params.forecast.main.temp_min)}&deg;F</Text>
                        <Text style={[styles.minMaxText, styles.textStyle]}>Max {Math.round(props.route.params.forecast.main.temp_max)}&deg;F</Text>
                    </View>
                    <Text style={[styles.minMaxText, styles.textStyle]}>Feels Like {Math.round(props.route.params.forecast.main.feels_like)}&deg;F</Text>
                    <Text style={[styles.minMaxText, styles.textStyle]}>Humidity {props.route.params.forecast.main.humidity}</Text>
                    <Text style={[styles.minMaxText, styles.textStyle]}>Wind Speed {props.route.params.forecast.wind.speed}</Text>
                    <Text style={[styles.minMaxText, styles.textStyle]}>Direction Deg {props.route.params.forecast.wind.deg}</Text>
                    <Button
                    title="Home"
                    onPress={() => props.navigation.navigate('Home')}
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
        // flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
        width: '100%',
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
        fontSize: 30,
        // fontWeight: 'bold',
        textAlign: 'center',
    },
    textStyle: {
        textAlign: 'center',
        fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
        color: 'white',
    },
    minMaxContainer: {
        width: '70%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 20,
        // border: '2px solid red',

    },
    minMaxText: {
        fontSize: 18,
    },
    largeIcon: {
        fontSize: 50,
        marginBottom: 10,
    }
});

export default Details;