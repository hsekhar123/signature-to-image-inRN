import { Platform, StyleSheet } from "react-native";
import {responsiveWidth as rw,
    responsiveHeight as rh,
    responsiveFontSize as rf 
} from "react-native-responsive-dimensions"
import Colors from "../../config/Theme";

const Styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.White,
        paddingTop:Platform.OS==="ios"?rh(5):rh(0.5),
    },
    profileSect:{
        alignItems:"flex-end",
    },
    header:{
        backgroundColor:Colors.Blue,
        height:rh(12),
        paddingHorizontal:rw(3),
        justifyContent:"center",
        // paddingVertical:rh(2)
    },
    headingSect:{
        flexDirection:"row",
    },
    backbtn:{
        width:rw(12),

        alignItems:"center",
        justifyContent:"center",

    },
    headingTextSect:{
        width:rw(75),
        // borderWidth:1,
        alignItems:'center'
    },
    headingtext:{
        fontSize:rf(2.5),
        fontWeight:"500",
        color:Colors.White
    },
    section_1:{
        // borderWidth:1,
        height:rh(25),
        paddingHorizontal:rw(4)
    },
    stepSection:{
        marginVertical:rh(1.5),
        // borderWidth:1,
        // alignItems:"center"
        justifyContent:"center",
        width:rw(100)
        // height:rh(4)
    },
    videoSect:{
        // borderWidth:1,
        height:rh(10),
        // paddingVertical:rh(1.5),
        // flexDirection:"row",
        justifyContent:"center",
        // borderWidth:1
    },
    imageBtn:{
        width:rw(18),
        height:rh(8),
        // borderWidth:1,
        paddingHorizontal:rw(2),
        // marginHorizontal:rw(2),
        // paddingVertical:rh(2),
        marginRight:rw(2.5),
        alignItems:"center",
        // justifyContent:"flex-start",
        borderRadius:5
    },
    image:{
      width:rw(18),
      height:rh(8),
      resizeMode:"cover",
      borderRadius:10
    },
    right:{
      justifyContent:"space-between"
    },
    introductionText:{
        fontSize:rf(2),
        fontWeight:"600",
        color:Colors.TextColor
    },
    shareBtn:{
        flexDirection:"row",
        // justifyContent:"flex-start",
        // borderWidth:1
        justifyContent:"space-between",
        width:rw(30)
    },
    sharetext:{
        fontSize:rf(2),
        fontWeight:"600",
        color:Colors.TextColor
    },
    checkBoxSect:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:'center',
        marginVertical:rh(1.5),
    },
    checkBox: {
        width: rw(6.5),
        height: rh(3.5),
        borderWidth: 1,
        borderColor: Colors.Blue,
        marginRight: rw(3),
        alignItems:"center",
        justifyContent:'center',
        borderRadius:5
      },
      text2:{
        color:Colors.TextColor,
        fontSize:rf(2.2),
        fontWeight:"500"
      },
      section_2:{
        marginHorizontal:rh(2.5),
      },
      signMainContainer:{
        height:rh(41),
        borderWidth:1,
        borderStyle:"dashed",
        borderColor:Colors.Blue,
        marginVertical:rh(2),
        borderRadius:5,
        backgroundColor:Colors.Background,
        paddingVertical:rh(1),
        // paddingHorizontal:rw(1.5)
      },
      signText:{
        textAlign:"center",
        fontSize:rf(2),
        color:Colors.Blue,
        fontWeight:"700"
      },
      signContainer:{
        // backgroundColor:Colors.SignSectBG,
        height:rh(34),
        borderRadius:10,
        paddingVertical:rh(1.5),
        paddingHorizontal:rw(2),
        marginHorizontal:rw(2.5),
        marginVertical:rh(1)
      },
      displayImage:{
        alignItems:"center",
        justifyContent:"center",
        // borderWidth:1,
        marginVertical:rh(2),
        height:rh(30)
      },
      signImage:{
        height: '100%',
        width: rw(80),
        resizeMode: 'contain',

      },
      signImage_2:{
        height: rh(27),
        width: rw(80),
        resizeMode: 'contain',
      },
      buttonSection:{
        marginBottom:rh(2)
      },
      actionButton:{
        // paddingVertical:rh(1.3),
        height:rh(5),
        alignItems:'center',
        justifyContent:"center",
      },
      submitBtn:{
        backgroundColor:Colors.Blue,
        borderRadius:8
      },
      btnText:{
        fontWeight:"600",
        fontSize:rf(2),
      },
      submitText:{
        color:Colors.White,
      },
      rejectText:{
        color:Colors.Red
      },
      signature:{
         flex: 1,
    // borderColor: '#000033',
    // borderWidth: 1,
      }
   


})
export default Styles;