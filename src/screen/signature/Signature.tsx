import {
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component, LegacyRef, createRef} from 'react';
import Styles from './Style';

import {
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Colors from '../../config/Theme';
import StepIndicator from 'react-native-step-indicator';
import {StepIndicatorStyles} from 'react-native-step-indicator/lib/typescript/src/types';
import SignatureCapture from 'react-native-signature-capture';
import ModalComponent from '../../component/ModalComponent';
interface IProps {
  navigation: {
    navigate: (path: string) => void;
  };
}

interface IState {
  lableSteps: string[];
  currentPosition: number;
  signatureImg: string | undefined | null;
  isImgVisible: boolean;
  videoData: {
    sources: string;
    thumb: string;
  };
  isModaOpen: boolean;
  isChecked: boolean;
}
interface SignRef {
  signature: {
    saveImage?: () => void;
    resetImage?: () => void;
  };
}
class Signature extends Component<IProps, IState> {
  signature:  React.LegacyRef<SignatureCapture> | undefined;
  constructor(props: IProps) {
    super(props);
    this.signature = createRef();
    this.state = {
      lableSteps: ['STEP 1', 'STEP 2'],
      currentPosition: 1,
      signatureImg: null,
      isImgVisible: false,
      videoData: {
        sources:
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        thumb:
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
      },
      isModaOpen: false,
      isChecked: false,
    };
  }
  // componentDidMount = async () => {
  //   const devicePermissions =
  //     Platform.OS === 'ios'
  //       ? await request(PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY)
  //       : await check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
  //   console.log(devicePermissions, '==devicePermissions');
  //   //   this.setState({permission:PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY})
  //   // }else{
  //   //   this.setState({permission:PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE})
  //   // }
  //   // this.checkingPermission()
  // };

  onSaveEvent = (result: {encoded: string; pathName: string}) => {
    // const str = result.encoded.replace(/\.\w*$/ig,"");
    this.setState({
      signatureImg: result.encoded,
    });
  };
  onDragEvent = () => {
    console.log('dragged');
  };
  handleSave = () => {
    this.signature?.current?.saveImage();
  };
  handleReset = () => {
    this.signature?.current?.resetImage();
    this.setState({signatureImg: ''});
  };
  goToVideo = () => {
    this.setState({isModaOpen: true});
    // this.props.navigation.navigate("Video")
  };
  handleClose = () => {
    this.setState({isModaOpen: false});
  };
  handleCheckBox = () => {
    this.setState(prev => ({
      isChecked: !prev.isChecked,
    }));
  };

  render() {
    const customStyles: StepIndicatorStyles = {
      stepIndicatorSize: rf(1.8),
      stepIndicatorLabelFinishedColor: Colors.Blue,
      currentStepIndicatorSize: rf(2.2),
      stepStrokeCurrentColor: Colors.Blue,
      stepStrokeWidth: 2,
      stepStrokeUnFinishedColor: Colors.Black,
      separatorFinishedColor: Colors.Blue,
      separatorUnFinishedColor: Colors.Blue,
      stepIndicatorFinishedColor: Colors.Blue,
      stepIndicatorUnFinishedColor: Colors.Blue,
      stepIndicatorCurrentColor: Colors.Blue,
      labelColor: Colors.Blue,
      labelSize: rf(1.8),
      currentStepLabelColor: Colors.TextColor,
      labelAlign: 'center',
      separatorStrokeWidth: 2,
      currentStepIndicatorLabelFontSize: rf(5),
      // currentStepStrokeWidth:1
    };
    const {isModaOpen, isChecked,signatureImg} = this.state;
    return (
      <View style={{flex: 1}}>
        <View style={Styles.container}>
          <View style={Styles.header}>
            <View style={Styles.profileSect}>
              <TouchableOpacity>
                <FontAwesome name="user-circle" color={'white'} size={rf(3)} />
              </TouchableOpacity>
            </View>
            <View style={Styles.headingSect}>
              <TouchableOpacity style={Styles.backbtn}>
                <AntDesign name="left" size={rf(2.8)} color={'white'} />
              </TouchableOpacity>
              <View style={Styles.headingTextSect}>
                <Text style={[Styles.headingtext]}>Visitor Check in</Text>
              </View>
            </View>
          </View>
          <View style={Styles.section_1}>
            <View style={Styles.stepSection}>
              <StepIndicator
                customStyles={customStyles}
                currentPosition={this.state.currentPosition}
                labels={this.state.lableSteps}
                direction="horizontal"
                stepCount={this.state.lableSteps.length}
              />
            </View>
            <View style={Styles.videoSect}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  testID="image-thumbnail"
                  onPress={this.goToVideo}
                  style={Styles.imageBtn}>
                  <Image
                    source={{uri: this.state.videoData.thumb}}
                    style={Styles.image}
                  />
                </TouchableOpacity>
                <View style={Styles.right}>
                  <Text style={Styles.introductionText}>
                    Introduction Video
                  </Text>
                  <TouchableOpacity style={Styles.shareBtn}>
                    <Octicons
                      name="share"
                      color={Colors.Black}
                      size={rf(2.5)}
                    />
                    <Text style={Styles.sharetext}>Share Video</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={Styles.checkBoxSect}>
              <TouchableOpacity
                testID="checkBox"
                onPress={this.handleCheckBox}
                style={[Styles.checkBox]}>
                {isChecked && (
                  <FontAwesome size={rf(2)} name="check" color={Colors.Black} />
                )}
              </TouchableOpacity>
              <Text style={Styles.text2}>I have watched and understood</Text>
            </View>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={Styles.section_2}>
            <View style={Styles.signMainContainer}>
              <Text style={Styles.signText}>SIGN HERE</Text>
              <View testID='signature'
              style={Styles.signContainer}>
                <SignatureCapture 
                  style={Styles.signature}
                  ref={this.signature}
                  onSaveEvent={result => this.onSaveEvent(result)}
                  onDragEvent={() => this.onDragEvent}
                  showNativeButtons={false}
                  showTitleLabel={false}
                  showBorder={false}
                  saveImageFileInExtStorage={true}
                  // viewMode={'portrait'}
                  minStrokeWidth={4}
                  maxStrokeWidth={4}
                />
              </View>
            </View>
            {signatureImg&& (
              <View style={Styles.displayImage}>
                <Image
                  source={{uri:`data:image/png;base64,${signatureImg}`}}
                  style={Styles.signImage_2}
                />
              </View>
            )}
            <View style={Styles.buttonSection}>
              <TouchableOpacity
                testID="submit-btn"
                onPress={() => this.handleSave()}
                style={[Styles.actionButton, Styles.submitBtn]}>
                <Text style={[Styles.btnText, Styles.submitText]}>SUBMIT</Text>
              </TouchableOpacity>
              <TouchableOpacity
                testID="reject-btn"
                onPress={() => this.handleReset()}
                style={[Styles.actionButton]}>
                <Text style={[Styles.btnText, Styles.rejectText]}>Reject</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          {this.state.isModaOpen && (
            <ModalComponent
              modalOpen={isModaOpen}
              modalClose={this.handleClose}
            />
          )}
        </View>
      </View>
    );
  }
}

export default Signature;
