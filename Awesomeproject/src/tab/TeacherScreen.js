import React,{Component} from 'react';
import {Image ,View,Text,StyleSheet, ScrollView,Animated,Dimensions} from 'react-native';
import {CustomHeader} from '../index';

const {width,height} = Dimensions.get('window');

const teacher_list=[{
  uri:'https://ic.nkust.edu.tw/var/file/75/1075/pictures/688/m/mczh-tw800x800_large5330_248994362501.jpg',
  id:'teacher-1',
  title:'天香',
  work:'教授兼系主任',
  tel:'燕巢 17566(教研室) 或 17550(主任室)',
  education:'國立台灣科技大學 工業管理系 博士',
  professtion:'多變量分析、統計、電子商務、資訊管理量化研究、可靠度'
},{
  uri:'https://ic.nkust.edu.tw/var/file/75/1075/pictures/379/m/mczh-tw800x800_large5335_384158863661.jpg',
  id:'teacher-2',
  title:'伯昌',
  work:'教授兼副校長',
  tel:'燕巢 17570 (教研室) / 建工 12220(柯副校長室)',
  education:'國立中央大學 資訊管理系 博士',
  professtion:'雲端商務技術與應用、企業電子化、財務資料探勘、計算智慧'
},{
  uri:'https://ic.nkust.edu.tw/var/file/75/1075/pictures/789/m/mczh-tw400x400_small12386_751027408844.jpg',
  id:'teacher-3',
  title:'侯易佑',
  work:'副教授',
  tel:'燕巢 17577',
  education:'國立成功大學 工程科學系 博士',
  professtion:'系統分析與控制'
},{
  uri:'https://ic.nkust.edu.tw/var/file/75/1075/pictures/200/m/mczh-tw400x400_small12381_366323008728.jpg',
  id:'teacher-4',
  title:'謝文川',
  work:'助理教授',
  tel:'燕巢 17568 / 建工 17502',
  education:'國立交通大學 資訊管理系 博士',
  professtion:'行動與無線通訊、行動電子商務、網路安全、物件導向系統分析與設計'
},
{
  uri:'https://ic.nkust.edu.tw/var/file/75/1075/pictures/87/m/mczh-tw400x400_small12376_852196863277.jpg',
  id:'teacher-5',
  title:'張俊陽',
  work:'副教授',
  tel:'燕巢 17590',
  education:'國立中山大學 資訊管理系 博士',
  professtion:'雲端運算，商業智慧，企業電子化，電子商務，網路社群，數位學習，資訊安全，創造性問題解決，績效評估，行動應用'
}]

export class TeacherScreen extends Component{
  _scrollX = new Animated.Value(0);
  render(){
  console.disableYellowBox = true;
  return (
    <View style={styles.container}>
      <CustomHeader title="師資陣容" isHome={true} navigation={this.props.navigation}/>
      <Animated.ScrollView
      pagingEnabled
      scrollEventThrottle={16}
      horizontal
      onScroll={Animated.event(
        [{ nativeEvent:{contentOffset:{x:this._scrollX}}}],
        { useNativeDriver: true }
      )}
      contentContainerStyle={styles.scrollviewcontainer} >
        {teacher_list.map((item,i) => this._renderItem(item,i))}
      </Animated.ScrollView>
    </View>
  )
  }

  _renderItem = (item,i) => {
    return(
      <View key={item.id} style={[styles.container,styles.item]}>
        <Image 
          source={{uri:item.uri}}
          style={styles.image}
          resizeMode = 'contain'
        />
        <View style={styles.metacontainer}>
        <Text style={styles.textstyle}>姓名:{item.title}</Text>
        <Text style={styles.textstyle}>分機:{item.tel}</Text>
        <Text style={styles.textstyle}>職稱:{item.work}</Text>
        <Text style={styles.textstyle}>學歷:{item.education}</Text>
        <Text style={styles.textstyle}>專業:{item.professtion}</Text>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#455a64',
    alignItems:'center',
    justifyContent:'center',
    marginTop:50
  },
  scrollviewcontainer:{
    alignItems:'center',
    justifyContent:'center'
  ,
},
item:{
  width,
  height,
  alignItems:'center'
},
metacontainer:{
  alignItems:'center',
  justifyContent:'flex-end',
  backgroundColor:'transparent',
  padding:15,
},
image:{
  width : width*.85,
  height : width*.85,
},
textstyle:{
  color:'#fff'
}
})