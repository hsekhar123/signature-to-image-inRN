import { Platform, StyleSheet } from 'react-native';
import {
    responsiveWidth as rw,
    responsiveHeight as rh,
    responsiveFontSize as rf,
  } from 'react-native-responsive-dimensions';
import Colors from '../config/Theme';
const Styles = StyleSheet.create({
    container: {
      // flex: 1,
      backgroundColor:Platform.OS==="android"?Colors.Black: Colors.Blue,
      height: rh(100),
      // borderWidth: 1,
      paddingTop: Platform.OS === 'ios' ? rh(5.7) : rh(2),
      position:"relative"
    },
    text: {
      fontSize: 20,
      fontWeight: '400',
    },
    backbtn: {
      width: rw(15),
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: rh(2),
      position:"absolute",
      top:Platform.OS==="ios"?rh(7):rh(4),
      zIndex:1
    },
    videoContainer:{
      flex:1,
      width: rw(100),
      alignItems:"center",
      justifyContent:"center"
    },
    video:{
      width:rw(100),
      // height:rh(40),
      flex:1
    }
  });
  export default Styles;
  