/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Youtube from './app/js/Youtube'

export default class youtube extends Component {
  render() {
    return (<Youtube url={'HYMNRiwp3jQ'} />);
  }
}

AppRegistry.registerComponent('youtube', () => youtube);
