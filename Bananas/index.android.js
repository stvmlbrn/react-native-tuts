import React, {Component} from 'react';
import {AppRegistry, Image} from 'react-native';

class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://i.reddituploads.com/bfaff573c6c54533bd8f01d4597382b2?fit=max&h=1536&w=1536&s=f538717261603a7d6bd64a69a5fd0de3'
    };

    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

AppRegistry.registerComponent('Bananas', () => Bananas);