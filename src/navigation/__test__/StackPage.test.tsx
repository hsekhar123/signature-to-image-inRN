import React from "react";
import StackNavigation from "../StackNavigation";
import { fireEvent, render, screen } from "@testing-library/react-native";

jest.mock('@react-navigation/stack', () => ({
    createStackNavigator: jest.fn(() => ({
      Navigator: ({children}: {children: React.ReactElement}) => <>{children}</>,
      Screen: ({children}: {children: React.ReactElement}) => <>{children}</>,
    })),
}));
jest.mock('react-native-vector-icons/Octicons', () => () => <></>);
jest.mock('react-native-vector-icons/AntDesign', () => () => <></>);
jest.mock('react-native-vector-icons/FontAwesome', () => () => <></>);
jest.mock("react-native-signature-capture",()=>{
    return{
      default:{
        SignatureCapture:()=><></>
      }
    }
})
// jest.mock("react-native-signature-capture", () => () => <></>)
jest.mock("react-native-video",()=>{
    return{
      default:{
        Video:()=><></>
      }
    }
})
describe("Stack Navigation",()=>{
    const mockProps={
        navigation:{
            navigate:(name:string)=>jest.fn()
        }
    }
    it("render stack page",()=>{
        render(
            <StackNavigation {...mockProps}/>
        )
    })
   

})