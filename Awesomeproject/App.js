import React, { Component } from 'react';
import { Image, DeviceEventEmitter } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomDrawerContent } from './src';
import { TeacherScreen, WishScreen, GoalScreen, FeatureScreen, BriefScreen, MemberScreen, EventScreen, Feature_1Screen, Feature_2Screen, Feature_3Screen, Feature_4Screen, Feature_5Screen, Mapscreen, ClassScreen } from './src/tab';
import { LoginScreen, ResgisterScreen } from './src/auth';
import { IMAGE } from './src/constants/Image';


import Kontakt, { KontaktModule } from 'react-native-kontaktio';


const Tab = createBottomTabNavigator();
const Tab2 = createBottomTabNavigator();
const Tab3 = createBottomTabNavigator();
const Tab4 = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown: false
})

const StackFeature = createStackNavigator();
function FeatureStack() {
  return (
    <StackFeature.Navigator initialRouteName="Feature">
      <StackFeature.Screen name="Feature" component={FeatureScreen} options={navOptionHandler} />
      <StackFeature.Screen name="Feature_1" component={Feature_1Screen} options={navOptionHandler} />
      <StackFeature.Screen name="Feature_2" component={Feature_2Screen} options={navOptionHandler} />
      <StackFeature.Screen name="Feature_3" component={Feature_3Screen} options={navOptionHandler} />
      <StackFeature.Screen name="Feature_4" component={Feature_4Screen} options={navOptionHandler} />
      <StackFeature.Screen name="Feature_5" component={Feature_5Screen} options={navOptionHandler} />
    </StackFeature.Navigator>
  )
}

function TabNavigator() {
  return (
    <Tab2.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Hope') {
            iconName = focused
              ? IMAGE.ICON_HOME
              : IMAGE.ICON_HOME_BLACK
          } else if (route.name === 'Map') {
            iconName = focused
              ? IMAGE.ICON_CLASS_WHITE
              : IMAGE.ICON_CLASS
          }
          else if (route.name === 'Member') {
            iconName = focused
              ? IMAGE.ICON_TEACHER_WHITE
              : IMAGE.ICON_TEACHER
          }

          // You can return any component that you like here!
          return <Image source={iconName} style={{ width: 20, height: 20, resizeMode: 'contain' }} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}
    >
      <Tab2.Screen name="Hope" component={WishScreen} />
      <Tab2.Screen name="Map" component={Mapscreen} />
      <Tab2.Screen name="Member" component={LoginScreen} />
    </Tab2.Navigator>
  )
}

function Tab2Navigator() {
  return (
    <Tab2.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Hope') {
            iconName = focused
              ? IMAGE.ICON_WISHLIST_WHITE
              : IMAGE.ICON_WISHLIST
          } else if (route.name === 'Class') {
            iconName = focused
              ? IMAGE.ICON_CLASS_WHITE
              : IMAGE.ICON_CLASS
          }
          else if (route.name === 'Teacher') {
            iconName = focused
              ? IMAGE.ICON_TEACHER_WHITE
              : IMAGE.ICON_TEACHER
          }

          // You can return any component that you like here!
          return <Image source={iconName} style={{ width: 20, height: 20, resizeMode: 'contain' }} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}
    >
      <Tab2.Screen name="Hope" component={WishScreen} />
      <Tab2.Screen name="Class" component={ClassScreen} />
      <Tab2.Screen name="Teacher" component={TeacherScreen} />
    </Tab2.Navigator>
  )
}

function Tab3Navigator() {
  return (
    <Tab3.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Goal') {
            iconName = focused
              ? IMAGE.ICON_GOAL_WHITE
              : IMAGE.ICON_GOAL
          } else if (route.name === 'Feature') {
            iconName = focused
              ? IMAGE.ICON_FEATURE_WHITE
              : IMAGE.ICON_FEATURE
          }
          // You can return any component that you like here!
          return <Image source={iconName} style={{ width: 20, height: 20, resizeMode: 'contain' }} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}
    >
      <Tab3.Screen name="Goal" component={GoalScreen} />
      <Tab3.Screen name="Feature" component={FeatureStack} />
    </Tab3.Navigator>
  )
}

function Tab4Navigator() {
  return (
    <Tab4.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Brief') {
            iconName = focused
              ? IMAGE.ICON_BRIEF_WHITE
              : IMAGE.ICON_BRIEF
          } else if (route.name === 'Event') {
            iconName = focused
              ? IMAGE.ICON_EVENT_WHITE
              : IMAGE.ICON_EVENT
          }
          else if (route.name === 'Member') {
            iconName = focused
              ? IMAGE.ICON_MEMBER_WHITE
              : IMAGE.ICON_MEMBER
          }
          // You can return any component that you like here!
          return <Image source={iconName} style={{ width: 20, height: 20, resizeMode: 'contain' }} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}
    >
      <Tab4.Screen name="Brief" component={BriefScreen} />
      <Tab4.Screen name="Event" component={EventScreen} />
      <Tab4.Screen name="Member" component={MemberScreen} />
    </Tab4.Navigator>
  )
}

const Drawer = createDrawerNavigator();

function DrawerNavigator({ navigation }) {
  return (
    <Drawer.Navigator initialRouteName="MenuTab" drawerContent={() => <CustomDrawerContent navigation={navigation} />}>
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
      <Drawer.Screen name="Ic department introduce" component={Tab2Navigator} />
      <Drawer.Screen name="Course" component={Tab3Navigator} />
      <Drawer.Screen name="Union" component={Tab4Navigator} />
    </Drawer.Navigator>
  )
}

const StackApp = createStackNavigator()

//////////beacon//////////
const {
  connect,
  configure,
  disconnect,
  isConnected,
  startScanning,
  stopScanning,
  restartScanning,
  isScanning,
  setBeaconRegion,
  setBeaconRegions,
  getBeaconRegions,
  setEddystoneNamespace,
  IBEACON,
  EDDYSTONE,
  scanMode,
  scanPeriod,
  activityCheckConfiguration,
  forceScanConfiguration,
  monitoringEnabled,
  monitoringSyncInterval,
} = Kontakt;

//區域判斷式
const region1 = {
  identifier: 'USBeacon',
  uuid: '1d5f5874-9406-4d00-9e6f-d519d307d986',
  major: 1,
  minor: 1,
};
const region2 = {
  identifier: 'USBeacon',
  uuid: '1d5f5874-9406-4d00-9e6f-d519d307d986',
  major: 1,
  minor: 2
};

export default class App extends Component {
  state = {
    scanning: false,
    beacons: [],
    eddystones: [],
    statusText: null,
  };

  componentDidMount() {

    connect()
      .then(() => setBeaconRegions([region1, region2]))
      .then(() => setEddystoneNamespace())
      .then(() => startScanning())
      .catch(error => console.log('error', error));

    // beacon監聽
    DeviceEventEmitter.addListener('beaconDidAppear', ({ beacon: newBeacon, region }) => {
      console.log('beaconDidAppear', newBeacon, region);
      this.setState({
        beacons: this.state.beacons.concat(newBeacon),
      });
    }
    );


    DeviceEventEmitter.addListener(
      //beacon參數變動
      'beaconsDidUpdate',
      ({ beacons: updatedBeacons, region }) => {
        console.log('beaconsDidUpdate', updatedBeacons, region);
        ////rssi轉換成距離(公尺)////
        power = Math.pow(10, (Math.abs(updatedBeacons[0].rssi) - 60) / (10 * 2));
        console.log('距離為: ' + power + '公尺');
        ////////////////////////
        if (region.minor === region1.minor && updatedBeacons[0].uuid === region1.uuid) {
          console.log("媽的")
        } else if (region.minor === region2.minor && updatedBeacons[0].uuid === region2.uuid && power < 3) {
        }



        const { beacons } = this.state;
        updatedBeacons.forEach(updatedBeacon => {
          const index = beacons.findIndex(beacon =>
            this._isIdenticalBeacon(updatedBeacon, beacon)
          );
          this.setState({
            beacons: beacons.reduce((result, val, ind) => {
              // replace current beacon values for updatedBeacon, keep current value for others
              ind === index ? result.push(updatedBeacon) : result.push(val);
              return result;
            }, []),
          })
        });
      }
    );

    // 區域條件監聽 listeners
    DeviceEventEmitter.addListener(
      'regionDidEnter',
      ({ region }) => {
        //如果進入的區域的minor=beacon_1的minor
        if (region.minor === region1.minor) {

        } else if (region.minor === region2.minor) { //如果進入的區域的minor=beacon_2的minor

        }
        console.log('regionDidEnter', region);
      }
    );

    DeviceEventEmitter.addListener(
      'regionDidExit',
      ({ region }) => {
        //如果離開的區域的minor=beacon_1的minor
        if (region.minor === region1.minor) {
          // Alert.alert(
          //   '掰掰啦1',
          //   '你離開beacon1_111的區域了',
          //   [{ text: '好欸1', onPress: () => console.log('bye_1 Pressed') }],
          //   { cancelable: false },
          // );
        } else if (region.minor === region2.minor) {   //如果離開的區域的minor=beacon_1的minor

        }
      }
    );
  };

  componentWillUnmount() {
    // Disconnect beaconManager and set to it to null
    disconnect();
    DeviceEventEmitter.removeAllListeners();
  };

  /**
   * Helper function used to identify equal beacons
   */
  _isIdenticalBeacon = (b1, b2) => (
    (b1.identifier === b2.identifier) &&
    (b1.uuid === b2.uuid) &&
    (b1.major === b2.major) &&
    (b1.minor === b2.minor)
  );


  render() {
    console.disableYellowBox = true;
    return(
    <>
      <NavigationContainer>
        <StackApp.Navigator initialRouteName="HomeApp">
          <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler}></StackApp.Screen>
          <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler}></StackApp.Screen>
          <StackApp.Screen name="Resgister" component={ResgisterScreen} options={navOptionHandler}></StackApp.Screen>
        </StackApp.Navigator>
      </NavigationContainer>
    </>
    )
  }
}
//////////////beacon程式碼/////////////
// export default function App() {
//   console.disableYellowBox = true;
//   return (
//     <NavigationContainer>
//     <StackApp.Navigator initialRouteName="HomeApp">
//       <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler}></StackApp.Screen>
//       <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler}></StackApp.Screen>
//       <StackApp.Screen name="Resgister" component={ResgisterScreen} options={navOptionHandler}></StackApp.Screen>
//     </StackApp.Navigator>
//     </NavigationContainer>
//   )
// }