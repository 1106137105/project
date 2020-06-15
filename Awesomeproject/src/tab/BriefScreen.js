import React,{Component} from 'react';
import { Text, View ,SafeAreaView,TouchableOpacity,StyleSheet,ScrollView} from 'react-native';
import {CustomHeader} from '../index';

export class BriefScreen extends Component{
  render(){
    return (
        <SafeAreaView style={{ flex: 1 ,backgroundColor:'#455a64'}}>
          <CustomHeader title="章程" isHome={true} navigation={this.props.navigation}/>
          <ScrollView style={{flex:1,marginLeft:15,marginRight:15}}>
            <Text style={styles.titlestyle}>第一章 總則</Text>
            <Text style={styles.textstyle}>第一條  本學會名稱「國立高雄科技大學資訊管理學系學會（建工校區）」，英文名稱「Department of Information Management」以下簡稱（「本學會」）成立於中華民國九十年。</Text>             
            <Text style={styles.textstyle}>第二條  本學會以「國立高雄科技大學學務處課外活動組」訂定「學生社團設置及輔導辦法」訂定之。</Text> 
            <Text style={styles.textstyle}>第三條  本章程為本學會會務運作之最高依據。</Text>
            <Text style={styles.textstyle}>第四條  以服務全系之同學，維持本系應有之特色，監督本系之運作以及建立同學與本系之溝通管道，聯絡系上師生感情，以促進同學和學長姊、學弟妹之間的情誼，研究學術，進而擴展全系同學之活動範圍，展現大學生應有的朝氣，發揚系譽為宗旨。</Text>
            <Text style={styles.textstyle}>第五條  本學會，對內對外代表本系學生。</Text>
            <Text style={styles.textstyle}>第六條  凡本校資訊管理系日間部四技學生，均為本學會之當然會員。</Text>
            <Text style={styles.textstyle}>第七條  凡本校資訊管理系日間部四技學生，有繳交會費之當然義務。</Text>
            <Text style={styles.textstyle}>第八條  本學會繳費會員應享之權利，參與本學會所舉辦之各項活動，享有被選舉權，列席代表會，對本學會會務提供意見。</Text>
            <Text style={styles.textstyle}>第九條  本學會繳費會員應盡之義務遵守本學會之規章及系代表會決議之事項，協助本學會辦理各項活動。</Text>
            <Text style={styles.textstyle}>第十條  會員大會為本會最高權力機構，由全體會員組成，由會長擔任主席。會員大會之職權如下：</Text>
            <Text style={{color:'#fff',marginTop:15,textAlign:'center',fontSize:15}}>1.選舉及罷免會長</Text>
            <Text style={{color:'#fff',marginTop:15,textAlign:'center',fontSize:15}}>2.通過及修訂本會章程</Text>
            <Text style={{color:'#fff',marginTop:15,textAlign:'center',fontSize:15}}>3.決議各項重大議案</Text>
            <Text style={styles.textstyle}>第十一條  會員大會於每一學期召開一次，由會長召集。</Text>
            <Text style={styles.textstyle}>第十二條  臨時會議由會員二分之一以上同意得以召開或會長提議幹部三分之二以上同意得以召開。</Text>
            <Text style={styles.textstyle}>第十三條  重要提案得以不計名方式表決，表決門檻出席率須在三分之二，同意大於不同意方可通過。</Text>
            <Text style={styles.textstyle}>第十四條  若需修改組織章程得在會員大會時提出，並得半數以上之出席，三分之二以上同意始得以修改。</Text>
            <Text style={styles.titlestyle}>第二章 組職與職權</Text>
            <Text style={styles.textstyle}>第十五條  系學會設會長一人，副會長一人，由選舉產生，顧問一人為上任之會長。會長職責如下：</Text>
            <Text style={{color:'#fff',marginTop:15,textAlign:'center',fontSize:15}}>1.會長對外代表本學會，對內領導本學會、總理業務，並得代表本系參加系務等重大會議。</Text>
            <Text style={{color:'#fff',marginTop:15,textAlign:'center',fontSize:15}}>2.召開並主持本學會之各種會議。</Text>
            <Text style={{color:'#fff',marginTop:15,textAlign:'center',fontSize:15}}>3.代表本學會向學校反應意見。</Text>
            <Text style={{color:'#fff',marginTop:15,textAlign:'center',fontSize:15}}>4.活動的籌劃及審核預算。</Text>
            <Text style={{color:'#fff',marginTop:15,textAlign:'center',fontSize:15}}>5.協調及指派各級幹部。</Text>
            <Text style={styles.textstyle}>副會長職責如下：協助會長處理事務，會長不在時之第一順位代理者。</Text>
            <Text style={styles.textstyle}>顧問職責如下：提供意見及經驗協助系學會。</Text>
            <Text style={styles.textstyle}>公關組：負責接待、信函往來及對外系、外校及有關單位之聯繫、合作等事宜及經費來源之籌措。</Text>
            <Text style={styles.textstyle}>美宣組：負責活動海報的設計製作及活動宣傳，通告的發送，美宣用品的保管，系學會辦公室的佈置。</Text>
            <Text style={styles.textstyle}>文書組：每次會議的紀錄整理，建檔並儲存管理。</Text>
            <Text style={styles.textstyle}>家族組：負責掌握各子家族之動態，適時給予協助並建議，並不定期舉辦家族相關活動。</Text>
            <Text style={styles.textstyle}>總務組：1.負責預算、決算、財務保管，且應於每一次活動結束後一週內，對系上公佈活動的收支帳目並於系學會網站公佈收支明細表。</Text>
            <Text style={{color:'#fff',marginTop:15,textAlign:'left',fontSize:15,marginLeft:60}}>2.活動經費預算由會長及總務組擬定，於幹部會議審核通過。</Text>
            <Text style={{color:'#fff',marginTop:15,textAlign:'left',fontSize:15,marginLeft:60}}>3.向有關單位申請各項活動經費並結報。</Text>
            <Text style={styles.textstyle}>出納組：專戶帳本與印章的保管，活動經費的核銷。</Text>
            <Text style={styles.textstyle}>活動組：負責各項活動的執行。</Text>
            <Text style={styles.textstyle}>服務組：負責採購、活動佈置整理，活動所需場地、器材、住宿、車輛租借與膳食等，並支援其他各組</Text>
            <Text style={styles.textstyle}>資訊組：系學會網站的管理，最新消息的公布，活動攝影、錄影等，及負責沖洗的工作。</Text>
            <Text style={styles.titlestyle}>第三章 任期與選舉辦法</Text>
            <Text style={styles.textstyle}>第十六條  本學會正、副會長任期為一年，連選得連任，登記資格為：會長須為大一、大二或大三生，幹部則不限。</Text>
            <Text style={styles.textstyle}>第十七條  正、副會長在當選後不得擔任其他社團幹部。</Text>
            <Text style={styles.textstyle}>第十八條  前學期成績平均65分以上，操行甲等以上，並無任何記過之處份者。</Text>
            <Text style={styles.textstyle}>第十九條  有願競選者須得全系十分之一以上連署。</Text>
            <Text style={styles.textstyle}>第二十條  本學會正、副會長由全體會員投票選之，採不計名投票，票高者宣佈當選。若無法在本校三合一選舉時選出會長時，視同選舉無效，並在選舉過後兩週內擇期進行重新補選。</Text>
            <Text style={styles.titlestyle}>第四章 經費</Text>
            <Text style={styles.textstyle}>第二十一條  系會費為新生入學時一次收取四年之費用，共計一千八百元整。如未繳系會費之會員於在學期間系學會有權取消活動參與、班級活動及系隊經費等相關參與及補助申請。</Text>      
            <Text style={styles.textstyle}>第二十二條  本會經費來源如下：</Text>
            <Text style={{color:'#ffffff',marginTop:15,textAlign:'center',fontSize:15}}>1.全體會員繳納之會費。</Text>
            <Text style={{color:'#ffffff',marginTop:15,textAlign:'center',fontSize:15}}>2.學校補助經費。</Text>
            <Text style={{color:'#ffffff',marginTop:15,textAlign:'center',fontSize:15}}>3.學生會補助經費。</Text>
            <Text style={{color:'#ffffff',marginTop:15,textAlign:'center',fontSize:15}}>4.廠商贊助費。</Text>
            <Text style={{color:'#ffffff',marginTop:15,textAlign:'center',fontSize:15}}>5.存款利息其他各項收入。</Text>
            <Text style={styles.textstyle}>第二十三條  本學會之任何支出均須交由出納、系主任之審核之後由資訊組於每月十日於系學會網站公布上個月帳務。</Text>                         
            <Text style={styles.textstyle}>第二十四條  本學會之收入均須存入金融機構(專戶)，存摺統一由出納組負責保管。</Text>
            <Text style={styles.textstyle}>第二十五條  系學會補助各班每學期提供申請新台幣伍佰元之班級事務活動經費，實際補助金額須按照各班級繳費比例計算。</Text>
            <Text style={styles.textstyle}>第二十六條  系會費減免實施要點</Text>
            <Text style={{color:'#ffffff',marginTop:15,textAlign:'center',fontSize:15}}>1.低收入戶學生指經直轄市、縣（市）社政主管機關核定為低收入戶之學生。</Text>
            <Text style={{color:'#fff',marginTop:15,textAlign:'center',fontSize:15}}>2.所定減免規定，不包括延長修業年限。</Text>
            <Text style={{color:'#fff',marginTop:15,textAlign:'center',fontSize:15}}>3.應繳納檢驗證件如下：</Text>
            <Text style={{color:'#fff',marginTop:15,textAlign:'center',fontSize:15}}>i.低收入戶證明文件</Text>
            <Text style={{color:'#fff',marginTop:15,textAlign:'center',fontSize:15}}>ii.低收入戶減免申請表</Text>
            <Text style={{color:'#fff',marginTop:15,textAlign:'center',fontSize:15}}>4.有下列情事之一者，系會費不予減免：</Text>
            <Text style={{color:'#fff',marginTop:15,textAlign:'center',fontSize:15}}>i.申請資格與本要點規定不符。</Text>
            <Text style={{color:'#fff',marginTop:15,textAlign:'center',fontSize:15}}>ii.所繳證件虛偽不實。</Text>
            <Text style={{color:'#fff',marginTop:15,textAlign:'center',fontSize:15}}>iii.冒名頂替。</Text>
            <Text style={{color:'#fff',marginTop:15,textAlign:'center',fontSize:15}}>iv.以其他不正當方法具領。</Text>
            <Text style={{color:'#fff',marginTop:15,textAlign:'center',fontSize:15}}>5.依本要點辦理系會費減免之學生，應於新生入學一個月內提出申請。</Text>
            <Text style={{color:'#fff',marginTop:15,textAlign:'center',fontSize:15}}>6.符合以上規定者，得減免全部系會費。</Text>
            <Text style={styles.textstyle}>第二十七條  凡獲得轉系、轉學、休學及退學證明均可辦理系會費退費，且在開學後之一個月內檢附相關證明文件以及填寫系學會費退費申請書辦理得以退還當學期及剩餘學期會費，逾學期一個月後提出申請則不退還當學期之系會費。</Text>
            <Text style={styles.textstyle}>第二十八條  中途辦理轉學進入本系就讀者，依本學會組織章程第一章第六條規定為本學會之當然會員，有補繳交剩餘學期數之系學會費之義務。需補繳至畢業前剩餘學期之系學會費（含當學期）。</Text>
            <Text style={styles.titlestyle}>第五章 系隊管理辦法</Text>             
            <Text style={styles.textstyle}>第二十九條  隊員具有國立高雄科技大學日間部四技資訊管理系（建工校區）學籍，並為系學會繳費會員均可參與系隊。</Text>
            <Text style={styles.textstyle}>隊員享有之義務和權力</Text>
            <Text style={{color:'#fff',marginTop:15,textAlign:'center',fontSize:15}}>1.參與系隊之練習之義務</Text>
            <Text style={{color:'#fff',marginTop:15,textAlign:'center',fontSize:15}}>2.享有代表系隊出賽權力</Text>
            <Text style={{color:'#fff',marginTop:15,textAlign:'center',fontSize:15}}>3.使用系隊資產權利</Text>
            <Text style={{color:'#fff',marginTop:15,textAlign:'center',fontSize:15}}>4.提供系學會建議等權利</Text>
            <Text style={{color:'#fff',marginTop:15,textAlign:'center',fontSize:15}}>5.隊長之產生由系隊自行辦理</Text>
            <Text style={styles.textstyle}>第三十條  未依規定繳納系學會費者，不予代表系隊資格對外出賽，也不予以補助對外出賽之任何費用或獎金等經費。</Text>
            <Text style={styles.textstyle}>第三十一條  系隊應於每學期初由系隊隊長繳交系隊成員名單資訊(內容應包含姓名、班級、學號、生日、連絡電話)，予系學會會長。</Text>
            <Text style={styles.textstyle}>第三十二條  每月底繳交當月成員出缺席表、練習照片、說明練習狀況等事宜。若系隊經營上發現怠慢或無積極運行系隊等狀況，系學會有權停止給予補助等援助直到恢復狀況為止。</Text>
            <Text style={styles.textstyle}>第三十三條  系隊隊長與球隊經理(各一名)應於學期初於本會進行系隊會議，討論系隊經費事宜，每學期本會會進行經費調動，調整給予系隊之費用，在會議中各隊長進行討論系隊補助的分配，如商討後無任何異議就以此會議討論方案進行補助方法。而會議內容包括經費之外系隊可提出任何意見向本會討論。</Text>
            <Text style={styles.textstyle}>第三十四條  若有任何比賽需經費補助須填寫系隊經費申請表，送至系學會總務。</Text>
            <Text style={styles.textstyle}>第三十五條  如有任何系隊財產添購須填寫資產添購單，經過幹部會議討論後是否予以添購。而系隊財產則列為系學會財產。</Text>
          </ScrollView>
        </SafeAreaView>
      );
}
}

const styles=StyleSheet.create({
  textstyle:{
    color:'#ffffff',
    marginTop:15,
    textAlign:'left',
    fontSize:15
  },
  titlestyle:{
    color:'#4dd0e1',
    fontSize:22,
    marginTop:25,
    textAlign:'left'
  }
})