import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Map from '../screens/Map';
import Auth from '../screens/Auth';
import GroupForm from '../components/group/GroupForm.js';
import GroupSingle from '../components/group/GroupSingle';
import UseAuth from '../hooks/UseAuth';
import UserInfos from '../hooks/UserInfos';
import Loader from '../components/layout/Loader';
import Token from '../utils/Token';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '../ui/general/MaterialCommunityIcons';
import styles from './styles/routesManager';

const RoutesManager = ({ navigation, route }) => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const [isLoad, setIsLoad] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [randomToken, setRandomToken] = useState('');

  const {
    token,
    tryToConnect,
    loadToken,
    isAuth,
    changeAuthStatus,
    loadUserData,
  } = UseAuth();
  const { userData, userId, loadUserId } = UserInfos();

  const fetchTocken = () => {
    Token.getToken()
      .then((res) => {
        if (res) {
          setRandomToken(res);
          loadToken(res);
        }
        setIsLoad(true);
      })
      .catch((err) => {
        console.log(err);
      });
    return;
  };

  const autoConnect = async () => {
    return await tryToConnect(randomToken)
      .then((res) => {
        loadUserId(res.data.data.userId);
        changeAuthStatus(true);
      })
      .catch((err) => {
        console.log(err);
        setRedirect(true);
      });
  };

  const getUserData = async () => {
    return await loadUserData();
  };

  useEffect(() => {
    if (!isLoad) {
      fetchTocken();
    }
  }, [isLoad]);

  useEffect(() => {
    if (token || (randomToken && !userData.mail)) {
      autoConnect();
    } else {
      // setRedirect(true);
      setTimeout(() => {
        setRedirect(true);
      }, 1000);
    }
  }, [randomToken]);

  useEffect(() => {
    if (userId && !userData.mail) {
      getUserData();
    }
  }, [userId]);

  if (redirect || userData.mail) {
    return (
      <>
        <NavigationContainer>
          {userData?.mail ? (
            <Tab.Navigator
              screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                  ...styles.container,
                },
              }}
            >
              <Tab.Screen
                name='Home'
                component={Home}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <View style={focused ? styles.focusedItem : styles.item}>
                      <MaterialCommunityIcons
                        size='giga'
                        color={focused ? '#1976d2' : '#666666'}
                        name='home'
                      />
                    </View>
                  ),
                }}
              />

              <Tab.Screen
                name='create'
                component={GroupForm}
                options={{
                  tabBarItemStyle: {
                    display: 'none',
                  },
                }}
              />
              <Tab.Screen
                name='groupSingle'
                component={GroupSingle}
                options={{
                  tabBarItemStyle: {
                    display: 'none',
                  },
                }}
              />

              <Tab.Screen
                name='Map'
                component={Map}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <View style={focused ? styles.focusedItem : styles.item}>
                      <MaterialCommunityIcons
                        size='giga'
                        color={focused ? '#1976d2' : '#666666'}
                        name='map-marker'
                      />
                    </View>
                  ),
                }}
              />
              <Tab.Screen
                name='Settings'
                component={Settings}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <View style={focused ? styles.focusedItem : styles.item}>
                      <MaterialCommunityIcons
                        size='giga'
                        color={focused ? '#1976d2' : '#666666'}
                        name='menu'
                      />
                    </View>
                  ),
                }}
              />
            </Tab.Navigator>
          ) : (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name='Auth' component={Auth} />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </>
    );
  }
  return <Loader />;
};

export default RoutesManager;
