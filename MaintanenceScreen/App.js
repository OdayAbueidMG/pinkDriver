/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, TouchableOpacity, Linking } from 'react-native';
import * as axios from 'axios';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


class App extends Component {

  state = {
    lunchingSoon: false
  }

  componentDidMount = () => {

    axios.get('https://api.ride-int.com/api/isRideAvailable')
      .then(response => {
        this.setState({
          lunchingSoon: response.data.data.isAvailable
        })
      })
      .catch(error => {
        console.log(error);
      });

  }
  openFacebook = () => {
    Linking.openURL('https://www.facebook.com/ride.int/');
  }

  openGooglePlay = () => {

    Linking.openURL('https://play.google.com/store/apps/details?id=com.core_ride.driver');
  }

  render() {
    return (
      <View style={styles.screen}>
        <Image style={{ width: 130, height: 100, marginBottom: 25, resizeMode: 'stretch' }} source={require('./pinklogo.png')} />
        <View style={styles.textContent}>
          <Text style={{ fontSize: 21, textAlign: 'center', color: '#F41BED' }}>تم دمج برنامج Pink مع تطبيق Ride وسوف تكون خدمات Pink متوفرة من خلال تطبيق Ride</Text>
        </View>
        <View style={styles.textContent}>
          <Text style={{ fontSize: 21, textAlign: 'center', color: '#F41BED' }}>We are Migrating Pink Services to Ride App</Text>
        </View>
        {this.state.lunchingSoon ?
          <View style={styles.lunSoon}>
            <View style={styles.textContent}>
              <Text style={{ fontSize: 21, textAlign: 'center', color: '#F41BED' }}>ترقبوا اطلاق البرنامج قريبا ً</Text>
            </View>
            <View style={styles.textContent}>
              <Text style={{ fontSize: 21, textAlign: 'center', color: '#F41BED' }}>Lunching soon</Text>
            </View>
            <TouchableOpacity onPress={this.openFacebook}>
              <Image style={{ width: 50, height: 50, marginBottom: 25, resizeMode: 'stretch' }} source={require('./facebook.png')} />
            </TouchableOpacity>
          </View>
          : <View style={styles.lunSoon}>
            <View style={styles.textContent}>
              <Text style={{ fontSize: 21, textAlign: 'center', color: '#F41BED' }}>حمل التطبيق الان</Text>
            </View>
            <View style={styles.textContent}>
              <Text style={{ fontSize: 21, textAlign: 'center', color: '#F41BED' }}>Download Now</Text>
            </View>
            <TouchableOpacity onPress={this.openGooglePlay}>
              <Image style={{ width: 150, height: 65, marginBottom: 25, resizeMode: 'stretch' }} source={require('./googleplay.png')} />
            </TouchableOpacity>
          </View>
        }
      </View>
    )
  }
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    paddingTop: 35

  },
  lunSoon: {
    flex: 1,
    alignItems: "center",
    paddingTop: 15,
  },
  textContent: {
    width: "62%",
    marginBottom: 30,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
