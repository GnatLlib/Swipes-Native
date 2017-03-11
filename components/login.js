import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, TextInput,Text} from 'react-native';

export default class Login extends Component{
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
        return(
            <View style = {styles.container}>
                <View style= {styles.logoContainer}>
                    <Image source={require('./images/logo.png')} style={styles.logo}/>
                </View>
                <View style = {styles.formContainer}>
                    <Text style = {styles.label}> Enter your name: </Text>
                    <TextInput returnKeyType = 'next' underlineColorAndroid='transparent'style= {styles.input}/>
                    <Text  style = {styles.label}> Enter your phone number: </Text>
                    <TextInput keyboardType = 'numeric' style= {styles.input}/>
                    <TouchableOpacity style={styles.buttonContainer}  onPress = { () =>this.navigate('homepage')}>
                        <Text style = {styles.buttonText}> JOIN</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    };
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#1abc9c',

    },

    logoContainer:{
        
        alignSelf: 'center',
        alignItems:'center',
       
    },

    logo:{
       marginTop:58,
        
    },

    label:{
        color:'white',
        marginTop:-14,
    },

    formContainer:{
        marginTop: 25,
        padding:20,
        alignItems:'center',
    },

    input:{
        height:40,
        width:250,
        backgroundColor:'rgba(255,255,255,0.2)',
        marginBottom:20,
        color:'white',
        paddingHorizontal:10,
        
    },

    buttonContainer:{
        backgroundColor : "#16a085",
        paddingVertical: 13,

    },

    buttonText:{
        textAlign: "center",
        width:250,
        fontSize: 16,
        color: 'white',
        

    }


})