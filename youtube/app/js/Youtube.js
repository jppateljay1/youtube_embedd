'use strict';

import React, { Component } from 'react';
import { WebView } from 'react-native';

class Youtube extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const url = 'https://www.youtube.com/embed/' + this.props.url + '?rel=0&autoplay=0&showinfo=0&controls=0';
    return(
      <WebView
        style={{flex:1}}
        javaScriptEnabled={true}
        source={{uri: url}}
      />
    );
  }
}

export default Youtube
