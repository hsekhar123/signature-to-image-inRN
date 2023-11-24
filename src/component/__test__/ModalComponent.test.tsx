/* eslint-disable prettier/prettier */
import React from 'react';
import ModalComponent from '../ModalComponent';
import {fireEvent, render, screen} from '@testing-library/react-native';

jest.mock('react-native-vector-icons/AntDesign', () => () => <></>);
jest.mock('react-native-video', () => {
  return {
    default: {
      Video: () => <></>,
    },
  };
});
describe('Modal component', () => {
  const mockProps = {
    modalOpen: false,
    modalClose: () => jest.fn(),
  };
  it('render modal component', () => {
    render(<ModalComponent {...mockProps} />);
  });
  it('for clicking goback button', () => {
    const mock = {
      modalOpen: true,
      modalClose: () => jest.fn(),
    };
    render(<ModalComponent {...mockProps} />);
    const mockRef={
        current:{}
    }
    jest.spyOn(React,'createRef').mockReturnValue(mockRef)
    const modal = screen.getByTestId('modal');
    // console.log(modal.children,"----");
    // const backBtn=screen.getByTestId("back-btn");
    // // console.log(backBtn,"-----")
    // fireEvent.press(backBtn)
  });
});
