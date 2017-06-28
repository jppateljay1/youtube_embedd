import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  PixelRatio,
  Dimensions,
  Platform,
} from 'react-native';
import YouTube from 'react-native-youtube';

const initialState = {
  isReady: false,
  status: null,
  quality: null,
  error: null,
  isPlaying: true,
  isLooping: true,
  duration: 0,
  currentTime: 0,
  fullscreen: false,
};

class Youtube extends Component {
  constructor(props) {
    super(props)
    this.state = initialState;
  }

  render() {
    return (
      <YouTube
        videoId="5V9_OJW7iRQ" // The YouTube video ID
        play={true}           // control playback of video with true/false
        hidden={false}        // control visiblity of the entire view
        fullscreen={true}    // control whether the video should play inline

        onReady={(e)=>{
          this.setState({isReady: true})
          console.log("ready")
        }}
        onChangeState={(e)=>{this.setState({status: e.state})}}
        onChangeQuality={(e)=>{this.setState({quality: e.quality})}}
        onError={(e)=>{this.setState({error: e.error})}}

        style={{alignSelf: 'stretch', height: 300, backgroundColor: 'black', marginVertical: 30}}
      />
    )
  }
}


export default Youtube
