import {Modal, TouchableOpacity, View} from 'react-native';
import React, {Component, createRef} from 'react';
import {
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Video from 'react-native-video';
import Styles from './ModalStyle';
interface IProps {
  modalOpen: boolean;
  modalClose: () => void;
}
interface IState {
  Data: string;
  paused: boolean;
}
class ModalComponent extends Component<IProps, IState> {
  videoRef: any;
  constructor(props: IProps) {
    super(props);
    this.state = {
      Data: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      paused: false,
    };
    this.videoRef = createRef();
  }
  goBack = () => {
    this.props.modalClose();
  };
  render() {
    const {Data, paused} = this.state;
    const {modalOpen} = this.props;
    return (
      <Modal
        testID="modal"
        //   transparent={true}
        visible={modalOpen}>
        <View style={Styles.container}>
          <TouchableOpacity
            testID="back-btn"
            onPress={this.goBack}
            style={Styles.backbtn}>
            <AntDesign name="left" size={rf(3)} color={'white'} />
          </TouchableOpacity>
          <View style={Styles.videoContainer}>
            <Video
              source={{
                uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
              }}
              paused={paused}
              //   resizeMode='contain'
              controls={true}
              ref={this.videoRef}
              style={Styles.video}
            />
          </View>
        </View>
      </Modal>
      //   </View>
    );
  }
}

export default ModalComponent;
