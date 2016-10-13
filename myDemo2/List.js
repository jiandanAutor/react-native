import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';


let Dimensions = require('Dimensions');
let ScreenWidth = Dimensions.get('window').width;

class List extends Component {
    render(){
        return (
            <View style={listStyle.list}>
                <Text style={listStyle.listFont}>{this.props.content}</Text>
                <View style={{width:ScreenWidth-20,height:1,backgroundColor:'#acacac',marginLeft:10,position:'absolute',bottom:0}}></View>
            </View>


        )
    }
}
const listStyle = StyleSheet.create({
    list:{
        width:ScreenWidth,
        height:35,
        justifyContent:'center',
    },
    listFont:{
        marginLeft:10,

        fontSize:14,
        alignItems:'center',
}
})

export default List ;