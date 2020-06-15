import React, { Component } from 'react';
import { Image, DeviceEventEmitter, PermissionsAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomDrawerContent } from './src';
import { TeacherScreen, WishScreen, GoalScreen, FeatureScreen, BriefScreen, MemberScreen, EventScreen, Feature_1Screen, Feature_2Screen, Feature_3Screen, Feature_4Screen, Feature_5Screen, Mapscreen, ClassScreen, NewsScreen } from './src/tab';
import { LoginScreen, ResgisterScreen } from './src/auth';
import { IMAGE } from './src/constants/Image';

import Kontakt, { KontaktModule } from 'react-native-kontaktio';
import KalmanFilter from 'kalmanjs';

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

function TabNavigator1() {
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

          // You can return any component that you like here!
          return <Image source={iconName} style={{ width: 20, height: 20, resizeMode: 'contain' }} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}
    >
      <Tab2.Screen name="Hope" component={NewsScreen} />
      <Tab2.Screen name="Map" component={Mapscreen} />
    </Tab2.Navigator>
  )
}
function TabNavigator2() {
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

          // You can return any component that you like here!
          return <Image source={iconName} style={{ width: 20, height: 20, resizeMode: 'contain' }} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}
    >
      <Tab2.Screen name="Hope" component={TeacherScreen} />
      <Tab2.Screen name="Map" component={Mapscreen} />
    </Tab2.Navigator>
  )
}
function TabNavigator3() {
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

          // You can return any component that you like here!
          return <Image source={iconName} style={{ width: 20, height: 20, resizeMode: 'contain' }} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}
    >
      <Tab2.Screen name="Hope" component={FeatureStack} />
      <Tab2.Screen name="Map" component={Mapscreen} />
    </Tab2.Navigator>
  )
}
function TabNavigator4() {
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

          // You can return any component that you like here!
          return <Image source={iconName} style={{ width: 20, height: 20, resizeMode: 'contain' }} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}
    >
      <Tab2.Screen name="Hope" component={EventScreen} />
      <Tab2.Screen name="Map" component={Mapscreen} />
    </Tab2.Navigator>
  )
}

function Tab2Navigator() {
  return (
    <Tab2.Navigator
      initialRouteName="Teacher"
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
      initialRouteName="Brief"
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

function Tab5Navigator() {
  return (
    <Tab4.Navigator
      initialRouteName="News"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'News') {
            iconName = focused
              ? IMAGE.ICON_BRIEF_WHITE
              : IMAGE.ICON_BRIEF
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
      <Tab4.Screen name="News" component={NewsScreen} />
    </Tab4.Navigator>
  )
}
const Drawer = createDrawerNavigator();
function DrawerNavigator1({ navigation }) {
  return (
    <Drawer.Navigator initialRouteName="MenuTab" drawerContent={() => <CustomDrawerContent navigation={navigation} />}>
      <Drawer.Screen name="MenuTab" component={TabNavigator4} />
      <Drawer.Screen name="Ic department introduce" component={Tab2Navigator} />
      <Drawer.Screen name="Course" component={Tab3Navigator} />
      <Drawer.Screen name="Union" component={Tab4Navigator} />
      <Drawer.Screen name="News" component={Tab5Navigator} />
    </Drawer.Navigator>
  )
}
function DrawerNavigator2({ navigation }) {
  return (
    <Drawer.Navigator initialRouteName="MenuTab" drawerContent={() => <CustomDrawerContent navigation={navigation} />}>
      <Drawer.Screen name="MenuTab" component={TabNavigator2} />
      <Drawer.Screen name="Ic department introduce" component={Tab2Navigator} />
      <Drawer.Screen name="Course" component={Tab3Navigator} />
      <Drawer.Screen name="Union" component={Tab4Navigator} />
      <Drawer.Screen name="News" component={Tab5Navigator} />
    </Drawer.Navigator>
  )
}
function DrawerNavigator3({ navigation }) {
  return (
    <Drawer.Navigator initialRouteName="MenuTab" drawerContent={() => <CustomDrawerContent navigation={navigation} />}>
      <Drawer.Screen name="MenuTab" component={TabNavigator3} />
      <Drawer.Screen name="Ic department introduce" component={Tab2Navigator} />
      <Drawer.Screen name="Course" component={Tab3Navigator} />
      <Drawer.Screen name="Union" component={Tab4Navigator} />
      <Drawer.Screen name="News" component={Tab5Navigator} />
    </Drawer.Navigator>
  )
}
function DrawerNavigator4({ navigation }) {
  return (
    <Drawer.Navigator initialRouteName="MenuTab" drawerContent={() => <CustomDrawerContent navigation={navigation} />}>
      <Drawer.Screen name="MenuTab" component={TabNavigator1} />
      <Drawer.Screen name="Ic department introduce" component={Tab2Navigator} />
      <Drawer.Screen name="Course" component={Tab3Navigator} />
      <Drawer.Screen name="Union" component={Tab4Navigator} />
      <Drawer.Screen name="News" component={Tab5Navigator} />
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
const kf = new KalmanFilter();
var power;
var tmp = 0;
//區域判斷式
const region1 = {
  identifier: 'USBeacon',
  uuid: '1d5f5874-9406-4d00-9e6f-d519d307d986',
  major: 2,
  minor: 1,
};
const region2 = {
  identifier: 'USBeacon',
  uuid: '1d5f5874-9406-4d00-9e6f-d519d307d986',
  major: 3,
  minor: 1
};
const region3 = {
  identifier: 'USBeacon',
  uuid: '1d5f5874-9406-4d00-9e6f-d519d307d986',
  major: 3,
  minor: 2
};


const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      {
        title: 'Location Permission',
        message:
          'This example app needs to access your location in order to use bluetooth beacons.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      // permission denied
      return false;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
};

export default class App extends Component {
  state = {
    scanning: false,
    beacons: [],
    eddystones: [],
    statusText: null,
  };

  componentDidMount() {
    requestLocationPermission()
      .then(() => connect())
      .then(() => setBeaconRegions([region1, region2, region3]))
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
        power = kf.filter(Math.pow(10, (Math.abs(updatedBeacons[0].rssi) - 60) / (10 * 2)));
        console.log('距離為: ' + power + '公尺');
        ////////////////////////
        if (region.major === region1.major && region.minor === region1.minor && updatedBeacons[0].uuid === region1.uuid) {
          tmp
        } else if (region.major === region2.major && region.minor === region2.minor && updatedBeacons[0].uuid === region2.uuid) {

        }else if (region.major === region3.major && region.minor === region3.minor && updatedBeacons[0].uuid === region3.uuid) {

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
        if (region.major === region1.major && region.minor === region1.minor) { //如果進入候車區
          tmp=1
          console.log("feature")
        } else if (region.major === region2.major && region.minor === region2.minor) { //如果進入
          tmp=2
          console.log("brief")
        } else if (region.major === region3.major && region.minor === region3.minor) { //如果進入
          tmp=3
          console.log("teacher")
        }
        console.log('regionDidEnter', region);
      }
    );

    DeviceEventEmitter.addListener(
      'regionDidExit',
      ({ region }) => {
        //如果離開的區域的minor=beacon_1的minor
        if (region.minor === region1.minor) {

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
    switch (tmp) {
      case 1:
        return (
          <>
            <NavigationContainer>
              <StackApp.Navigator initialRouteName="HomeApp">
                <StackApp.Screen name="HomeApp" component={DrawerNavigator1} options={navOptionHandler}></StackApp.Screen>
                <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler}></StackApp.Screen>
                <StackApp.Screen name="Resgister" component={ResgisterScreen} options={navOptionHandler}></StackApp.Screen>
              </StackApp.Navigator>
            </NavigationContainer>
          </>
        )
        break;
      case 2:
        return (
          <>
            <NavigationContainer>
              <StackApp.Navigator initialRouteName="HomeApp">
                <StackApp.Screen name="HomeApp" component={DrawerNavigator2} options={navOptionHandler}></StackApp.Screen>
                <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler}></StackApp.Screen>
                <StackApp.Screen name="Resgister" component={ResgisterScreen} options={navOptionHandler}></StackApp.Screen>
              </StackApp.Navigator>
            </NavigationContainer>

          </>
        )
        break;
      case 3:
        return (
          <>
            <NavigationContainer>
              <StackApp.Navigator initialRouteName="HomeApp">
                <StackApp.Screen name="HomeApp" component={DrawerNavigator3} options={navOptionHandler}></StackApp.Screen>
                <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler}></StackApp.Screen>
                <StackApp.Screen name="Resgister" component={ResgisterScreen} options={navOptionHandler}></StackApp.Screen>
              </StackApp.Navigator>
            </NavigationContainer>
          </>
        )
        break;
      default:
        return (
          <>
            <NavigationContainer>
              <StackApp.Navigator initialRouteName="HomeApp">
                <StackApp.Screen name="HomeApp" component={DrawerNavigator4} options={navOptionHandler}></StackApp.Screen>
                <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler}></StackApp.Screen>
                <StackApp.Screen name="Resgister" component={ResgisterScreen} options={navOptionHandler}></StackApp.Screen>
              </StackApp.Navigator>
            </NavigationContainer>
          </>
        )
    }
  }
  // render() {
  //   console.disableYellowBox = true;
  //   switch (tmp) {
  //     case 1:
  //       return (
  //         <>
  //           <NavigationContainer>
  //             <FeatureStack></FeatureStack>
  //           </NavigationContainer>
  //         </>
  //       )
  //       break;
  //     case 2:
  //       return (
  //         <>
  //           <NavigationContainer>
  //             <Tab4Navigator></Tab4Navigator>
  //           </NavigationContainer>

  //         </>
  //       )
  //       break;
  //     case 3:
  //       return (
  //         <>
  //           <NavigationContainer>
  //             <Tab2Navigator></Tab2Navigator>
  //           </NavigationContainer>
  //         </>
  //       )
  //       break;
  //     default:
  //       return (
  //         <>
  //           <NavigationContainer>
  //             <StackApp.Navigator initialRouteName="HomeApp">
  //               <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler}></StackApp.Screen>
  //               <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler}></StackApp.Screen>
  //               <StackApp.Screen name="Resgister" component={ResgisterScreen} options={navOptionHandler}></StackApp.Screen>
  //             </StackApp.Navigator>
  //           </NavigationContainer>
  //         </>
  //       )
  //   }
  // }
  // render() {
  //   console.disableYellowBox = true;
  //   return (
  //     <>
  //       <NavigationContainer>
  //         <StackApp.Navigator initialRouteName="HomeApp">
  //           <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler}></StackApp.Screen>
  //           <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler}></StackApp.Screen>
  //           <StackApp.Screen name="Resgister" component={ResgisterScreen} options={navOptionHandler}></StackApp.Screen>
  //         </StackApp.Navigator>
  //       </NavigationContainer>
  //     </>
  //   )
  // }
}
