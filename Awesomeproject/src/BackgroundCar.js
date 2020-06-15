import * as React from 'react';
import {StyleSheet,View,ScrollView,Dimensions,Image} from 'react-native';
import { IMAGE } from './constants/Image';

const DEVICE_WIDTH = Dimensions.get("window").width;


export class BackgroundCar extends React.Component{
    
    scrollRef = React.createRef();
    constructor(props){
        super(props);

        this.state={
            selectedIndex:0
        }
    }

    render(){
        const {images} = this.props
        const {selectedIndex} = this.state
        return(
            <View>
                <ScrollView horizontal pagingEnabled>
                    {images.map( image => (
                        <Image 
                            key = {image}
                            source={{uri:image}}
                            style={styles.backgroundimage}
                        />
                    ))}
                </ScrollView>
                <View style={styles.circleDiv}>
                    {images.map((image,i) => {
                        <View 
                            key={image}
                            style={[styles.whitecircle]}
                        />
                    })}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundimage:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:300,
        width: DEVICE_WIDTH

    },
    circleDiv:{
        position:'absolute',
        bottom:15,
        height:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',

    },
    whitecircle:{
        width:6,
        height:6,
        borderRadius:3,
        margin:5,
        backgroundColor:'#fff'
    }
})