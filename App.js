import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Splash from './src/components/splash.js';

export default class App extends Component<{}> {
  render() {
    return (
      <Splash/>
    );
  }
}
