import React, {Component} from 'react';
import { View, Text, Image} from 'react-native';


export default class Splash extends Component{
    render(){

        
        
        
        return (
       <View style = {styles.wrapper}>
        <View style = {styles.titlewrapper}>
         <Image source = {require('./images/logo.png')} style = {styles.logo}/>
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
        fontSize: 16,
       
       
    
    },

    titlewrapper:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo:{
        
    }
}