import React,{Component} from 'react';
import { Text, View ,SafeAreaView,TouchableOpacity,Image,ScrollView,Dimensions} from 'react-native';
import {CustomHeader} from '../index';
import {IMAGE} from '../constants/Image';


const {width,height} = Dimensions.get('window');

export class FeatureScreen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1,backgroundColor:'#455a64' }}>
              <CustomHeader title="特別課程" isHome={true} navigation={this.props.navigation}/>
              <ScrollView style={{flex:3,marginLeft:1, }}>
                <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('Feature_1')
                }}
                style={{flex:3, paddingTop:10, marginLeft:90}}>
                  <Image source={IMAGE.ICON_FEATURE_1} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('Feature_2')
                }}
                
                style={{flex:3,marginLeft:90}}>
                  <Image source={IMAGE.ICON_FEATURE_2} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('Feature_3')
                }}
                style={{flex:3,marginLeft:90}}
                >
                  <Image source={IMAGE.ICON_FEATURE_3} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('Feature_4')
                }}
                style={{flex:3,marginLeft:90}}
                >
                  <Image source={IMAGE.ICON_FEATURE_4} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('Feature_5')
                }}
                style={{flex:3,marginLeft:90}}
                >
                  <Image source={IMAGE.ICON_FEATURE_5} />
                </TouchableOpacity>
              </ScrollView>
            </SafeAreaView>

          );
    }
}