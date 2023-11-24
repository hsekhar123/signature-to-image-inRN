import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from '../navigation/StackNavigation';

interface IProps{}
class MainNavigation extends Component <IProps>{
  render() {
    return (
        <NavigationContainer>
            <StackNavigation/>
        </NavigationContainer>
    )
  }
}

export default MainNavigation
