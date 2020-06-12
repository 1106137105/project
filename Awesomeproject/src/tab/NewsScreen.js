import React,{Component} from 'react';
import { Text, View ,SafeAreaView,TouchableOpacity,StyleSheet,FlatList,ActivityIndicator} from 'react-native';
import {CustomHeader} from '../index';

export class NewsScreen extends Component{
  constructor(props){
    super(props);

    this.state={
      isLoading : true,
      dataSource:[]
    }
  }

    componentDidMount(){
    
      return fetch("http://34.80.85.166:3000/")
      .then((response) => response.json())
      .then((responseJson) => {
        // set state value
        this.setState({
          isLoading: false, // already loading
          dataSource: responseJson
        });
      })
      .catch((error) => {
        ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
      });  
    
    }
    render(){
      if(this.state.isLoading) {
        return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        )
      }
        return (
          <View style={{flex: 1, paddingTop:50}}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => {
              return (
                <View>
                  <Text style={styles.info}>{item.Title} </Text>
                </View>
              )
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
          );
    }
}

const styles = StyleSheet.create({
  info: {
    fontSize: 20,
    justifyContent:"center",
    alignItems:'center',
    flex:1
  }
});