import React, {Component} from 'react';
import { View, Text, Image, TouchableHighlight} from 'react-native';


export default class Splash extends Component{
    
    constructor(){
        super()
        
        this.navigate = this.navigate.bind(this)
    }
    
    navigate(name){
        this.props.navigator.push({
            name
        })
    }
    
    render(){

        return (
            
            <View style = {styles.wrapper}>
            
                <View style = {styles.titlewrapper}>
                    
                    <Image source = {require('./images/logo.png')} style = {styles.logo}/>
                    <TouchableHighlight onPress = {()=>this.navigate('login')} activeOpacity={99} underlayColor={'#16a085'}>
                    <Text style = {styles.subtitle}>
                        Enter
                    </Text>
                    </TouchableHighlight>
                    
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
        marginLeft:10
    },

    titlewrapper:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo:{
        
    }
}