import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, TextInput,Text} from 'react-native';

export default class HomePage extends Component{

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
            <View style= {styles.container}>
                <Text> Header Here </Text>
            </View>
        )


    }
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: '#1abc9c'
    },


    

})