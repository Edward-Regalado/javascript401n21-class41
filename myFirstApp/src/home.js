import React, { useEffect, useState } from 'react';
// components
import { StyleSheet, Text, View, Image, ActivityIndicator, SafeAreaView, ScrollView, FlatList, Alert, RefreshControl, KeyboardAvoidingView, ImageBackground, Platform, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// navigation
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// location
import * as Location from 'expo-location';
// import images and icon
import getImageForWeather from '../utils/getImageForWeather';
import getIconForWeather from '../utils/getIconForWeather';
// api key

import { OPEN_WEATHER_API } from '@env';



function Home(props){

  // const current = props.route.params.forecast.weather[0];
  
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <ImageBackground source={getImageForWeather(props.route.params.weather)} style={styles.imageContainer} imageStyle={styles.image}>
        <StatusBar style={styles.status} animated={true} barStyle='light-content'/>
        <View style={styles.currentContainer}>
          <View style={styles.currentTempContainer}>
            <Text style={styles.title}>Seattle</Text>
            <Text style={[styles.largeIcon, styles.textStyle]}>{getIconForWeather(props.route.params.weather)}</Text>
            <Text style={[styles.currentTemp, styles.textStyle]}>38 F</Text>
            <Text style={[styles.currentTemp, styles.textStyle]}>Rain</Text>
            {/* <Text style={styles.title}>{forecast.name}</Text>
            <Text style={[styles.largeIcon, styles.textStyle]}>{getIconForWeather(weather)}</Text>
            <Text style={[styles.currentTemp, styles.textStyle]}>{Math.round(forecast.main.temp)}F</Text>
            <Text style={[styles.currentTemp, styles.textStyle]}>{current.main}</Text> */}
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Weather Details"
              onPress={() => props.navigation.navigate('Details')}
              />
          </View>
          {/* <Text style={styles.title}>{props.route.params.weather}</Text> */}
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#61dafb',
  },
  status: {
    backgroundColor: '#61dafb',
    // barStyle: hidden,
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 36,
    // color: '#02111B',
    color: 'white',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 24,
    marginVertical: 12,
    marginLeft: 4,
    color: '#02111B',
  },
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentContainer: {
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    width: 300,
  },
  currentTempContainer: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  currentTemp: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  currentCity: {
    fontSize: 24,
    marginTop: 15,
  },
  currentDescription: {
    width: '100%',
    textAlign: 'center',
    fontWeight: '200',
    fontSize: 24,
    marginBottom: 24
  },
  hour: {
    padding: 6,
    alignItems: 'center',
  },
  day: {
    flexDirection: 'row',
  },
  dayDetails: {
    justifyContent: 'center',
  },
  dayTemp: {
    marginLeft: 12,
    alignSelf: 'center',
    fontSize: 20
  },
  largeIcon: {
    fontSize: 50,
    marginBottom: 10,
  },
  smallIcon: {
    width: 100,
    height: 100,
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
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white',
  },
  largeText: {
    fontSize: 44,
  },
  buttonContainer: {
    margin: 20
  },
  go: {
    borderRadius: 30,
  }
});

export default Home;
