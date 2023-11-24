import React from "react";
import Signature from "../Signature";
import { fireEvent, render, screen } from "@testing-library/react-native";
import { Platform } from "react-native";

jest.mock('react-native-vector-icons/AntDesign', () => () => <></>);
jest.mock('react-native-vector-icons/FontAwesome', () => () => <></>);
jest.mock('react-native-vector-icons/Octicons', () => () => <></>);
jest.mock('react-native-video', () => () => <></>);
jest.mock('react-native-step-indicator',()=>()=><></>)
jest.mock('react-native-signature-capture',()=>()=><></>)

describe("Signature app",()=>{
    const mockProps={
        navigation:{
            navigate:()=>jest.fn(),
        }
    }
    it("for image thumbnail ",()=>{
      render(
          <Signature {...mockProps}/>
      )

      const imageThumbnail=screen.getByTestId("image-thumbnail");
      // console.log(imageThumbnail,"-----")
      fireEvent.press(imageThumbnail)
  })
  it("for checkbox toggle",()=>{
    render(
      <Signature {...mockProps} />
    )
    const checkbox=screen.getByTestId('checkBox');
    fireEvent.press(checkbox)
  })
  it("for submit button ",()=>{
    render(
      <Signature {...mockProps} />
    )
    const submitBtn=screen.getByTestId('submit-btn');
    fireEvent.press(submitBtn);
  })
  it("for reject button",()=>{
    render(
      <Signature {...mockProps} />
    )
    const rejectBtn=screen.getByTestId('reject-btn');
    fireEvent.press(rejectBtn);
  })
  it("for SignatureCapture component",()=>{
    const resultObj={
      encoded:"",
      pathName:""
    }
    render(
      <Signature {...mockProps} />
    )
    const signature=screen.getByTestId('signature');
  //  console.log(signature.children[0].props.onSaveEvent(resultObj),"--->>")

    expect(signature.children[0].props.onSaveEvent(resultObj))
    expect(signature.children[0].props.onDragEvent())
  })
  
})