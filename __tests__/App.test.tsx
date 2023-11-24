/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: jest.fn(() => ({
    Navigator: ({children}: {children: React.ReactElement}) => <>{children}</>,
    Screen: ({children}: {children: React.ReactElement}) => <>{children}</>,
  })),
}));
jest.mock('@react-navigation/native', () => {
  const actualNavigation = jest.requireActual('@react-navigation/native');
  const {View: MockView} = require('react-native');
  return {
    ...actualNavigation,
    NavigationContainer: () => <MockView />,
  };
});

jest.mock('react-native-vector-icons/AntDesign', () => () => <></>);
jest.mock('react-native-vector-icons/FontAwesome', () => () => <></>);
jest.mock('react-native-vector-icons/Octicons', () => () => <></>);

jest.mock("react-native-signature-capture",()=>{
    return{
      default:{
        SignatureCapture:()=><></>
      }
    }
})

jest.mock("react-native-video",()=>{
  return{
    default:{
      Video:()=><></>
    }
  }
})