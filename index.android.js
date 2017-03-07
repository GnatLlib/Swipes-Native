/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import Splash from './components/splash.js';
import Login from './components/login.js';
export default class Project extends Component {
  
  constructor(){
    super()
    this.renderScene = this.renderScene.bind(this)
  }
  
  renderScene(route, navigator){
    if(route.name === 'splash'){
      return <Splash navigator={navigator} />
    }

    else if(route.name==='login'){
      return <Login navigator={navigator}/>
    
    }

  }
  
  
  
  render() {
    return (
      <Navigator
        initialRoute={{name: 'splash'}}
        renderScene={this.renderScene}
        />
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Project', () => Project);
