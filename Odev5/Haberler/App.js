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

import NewsItem from './NewsItem.js';

const App: () => React$Node = () => {
  return (
      <SafeAreaView>
        <View><Text style={styles.bas}> Haberler </Text></View>
        <ScrollView>
       
       
        
        <NewsItem type='saglik' title='Asi bulundu!' description='Covid-19 bitiyor.'/>
        <NewsItem type='siyaset' title='Trump koltugu birakmiyor!' description='Beyaz sarayda koltuk krizi!'/>
        <NewsItem type='saglik' title='Doktorlardan uyari!' description='Lahmacun sindirime iyi geliyor'/>
        <NewsItem type='siyaset' title='Kuzey Kore Sok aciklama!' description='Bombalari Amerika veriyor.'/>
        <NewsItem type='saglik' title='1 bobrek insana yeter mi?' description='Uzmanlar acikliyor.'/>
        <NewsItem type='siyaset' title='Istanbulda firtina cikti!' description='Imamoglu tatilde.'/>
       
       
        </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bas:{
    fontSize: 40,
    fontWeight: "bold"
  }
});

export default App;