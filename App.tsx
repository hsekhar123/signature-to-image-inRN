/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MainNavigation from './src/component/MainNavigation';

interface IProps{}
class App extends React.Component<IProps>{
 
 render(){
  return (
    <View style={{flex:1}}>
      <MainNavigation/>
    </View>
  )
 }
}

export default App;
