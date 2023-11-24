import React,{Component} from 'react'
import { StatusBar, Text, View } from 'react-native'
import Styles from './Style'
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signature from '../screen/signature/Signature';

const Stack=createStackNavigator();
interface IProps{
  navigation:{
    navigate:(path:string)=>void
  }
}
class StackNavigation extends Component<IProps> {
  render() {
    return (
      <View style={Styles.container}>
          <Stack.Navigator initialRouteName='Signature'
          screenOptions={{
            headerShown:false
          }}
          >
            <Stack.Screen name="Signature" component={Signature}/>
          </Stack.Navigator>
      </View>
    )
  }
}

export default StackNavigation;

