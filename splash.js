import React, {Component} from 'react';
import { View, Text } from 'react-native';


export default class Splash extends Component{
    render(){
        return (
      <View style = {styles.wrapper}>
        <View style = {styles.titlewrapper}>
         <Text style = {styles.title}>
           Swipes
          </Text>
          <Text style = {styles.subtitle}>
            UCLA
            </Text>
        </View>
      
     
          <Text> Powered by React Native </Text>
      
      </View>

    );
        
    }
}

const styles = {
    wrapper: {
        backgroundColor: '#1abc9c',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
    },

    title: {
        color: 'white',
        fontSize:45,
        fontWeight: 'bold'
    },

    subtitle:{
        color:'white',
        fontSize: 20,
        marginLeft: 90,
    
    },

    titlewrapper:{
        flex:1,
        justifyContent: 'center',
    }
}