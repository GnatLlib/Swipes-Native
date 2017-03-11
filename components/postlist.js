import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, TextInput,Text} from 'react-native';
import {getAllPosts} from './utils/apiutils.js'


export default class PostList extends Component{
    constructor(){

        super();
        this.state={
            posts: [],
            sellerName: []
        }

        this.navigate = this.navigate.bind(this)
    }

    navigate(name){
        this.props.navigator.push({
            name
        })
    }

    componentWillMount(){
        
        getAllPosts().then((res) =>{
            this.setState({
                posts: res,
                sellerName: res[0].seller_name + ' ' + res[0].id
            })
        });
    }

   


    render(){
        console.log("Posts: ", this.state.posts);
        return(
            <View>
                <Text>
                    Posts : {this.state.sellerName}
                </Text>
            </View>


        )
    };
}