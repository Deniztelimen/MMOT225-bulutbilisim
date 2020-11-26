/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
          <SafeAreaView>
              <View style={styles.body}>
                  <Text style={styles.Yazi}>AD SOYAD: Deniz Telimen</Text>
                  <Text style={styles.Yazi}>YAS: 22</Text>
                  <Text style={styles.Yazi}>MEMLEKET: Istanbul</Text>
                  <Text style={styles.Yazi}>LISE: KADIKOY MESLEKI VE TEKNIK ANADOLU LISESI</Text>
                  <Text style={styles.Yazi}>UNIVERSITE: OKAN UNIVERSITESI</Text>
                  <Text style={styles.Yazi}>IS DENEYIMI: VAR</Text>
              </View>
          </SafeAreaView>

    </>
  );
};

const styles = StyleSheet.create({
    Yazi: {
        marginTop: 50,
        marginLeft: 5,
        fontSize: 15,
        fontWeight: '200',
        color: 'black',
    },
});

export default App;
