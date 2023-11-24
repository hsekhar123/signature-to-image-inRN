import { Text, View } from 'react-native'
import React, { Component, createRef } from 'react'
import Styles from './style';
import Video from 'react-native-video';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf 
} from "react-native-responsive-dimensions"

interface IProps{}
interface IState{
  Data:string,
  paused:boolean
}
// const Data="'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',"
class VideoScreen extends Component <IProps,IState>{
  videoRef: React.RefObject<unknown>;
  constructor(props:IProps){
    super(props);
    this.state={
      Data:'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      paused:false
    }
    this.videoRef=createRef()
  }
  render() {
    const {Data,paused}=this.state
    return (
      <View style={Styles.container}>
        <Video 
          source={{uri:Data}}
          paused={!paused}
          // resizeMode='contain'
          controls={true}
          ref={this.videoRef}
          // style={{
          //   width:rw(100),
          //   height:rh(40),
        
          // }}
        />
      </View>
    )
  }
}

export default VideoScreen ;
