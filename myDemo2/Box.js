import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
let Dimensions = require('Dimensions');
let ScreenWidth = Dimensions.get('window').width;

class Box extends Component {
    click(){
        alert('hello')
    }
    render(){
        return (
            <View>
                {
                    React.Children.map(this.props.children,(text) => {
                        return (<Text onPress={()=>this.click()}>{text}</Text>)
                    } )
                }
            </View>
        )
    }
}
export default Box;