import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Loader from '../layout/Loader';
import UserInfos from '../../hooks/UserInfos';
import UseAuth from '../../hooks/UseAuth';
import Token from '../../utils/Token';
import { Avatar } from '@rneui/themed';
import { Divider } from '@rneui/themed';
import styles from './styles/settingsComponent';

const SettingComponent = () => {
  const [isLogout, setIsLogout] = useState(false);
  const { userData } = UserInfos();
  const { logout } = UseAuth();

  const handleLogout = async () => {
    setIsLogout(true);
    Token.removeToken();
    logout();
    setTimeout(() => {
      return;
    }, 400);
  };

  if (isLogout) return <Loader />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SETTINGS</Text>

      <View style={styles.header}>
        <Avatar
          size={50}
          rounded
          title={userData.pseudo.slice(0, 1).toUpperCase()}
          backgroundColor='#03A9F4'
        />
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>{userData && userData.pseudo}</Text>
          <Text style={styles.headerSubtitle}>
            {userData?.numeroTelephone && 0 + userData.numeroTelephone}
          </Text>
        </View>
      </View>

      <Divider />

      <View style={styles.mainContainer}>
        <View style={styles.main}>
          <Avatar
            size={50}
            icon={{
              name: 'key',
              color: '#383737',
            }}
            borderColor='none'
          />
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>Account</Text>
            <Text style={styles.headerSubtitle}>
              Profil, Blocked users, Delete account
            </Text>
          </View>
        </View>

        <View style={styles.main}>
          <Avatar
            size={50}
            icon={{
              name: 'security',
              color: '#383737',
            }}
            borderColor='none'
          />
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>Privacy Policy</Text>
            <Text style={styles.headerSubtitle}>
              Privacy policy, Data protection
            </Text>
          </View>
        </View>

        <View style={styles.main}>
          <Avatar
            size={50}
            icon={{
              name: 'text-box-multiple',
              color: '#383737',
            }}
            borderColor='none'
          />
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>Terms of Service</Text>
            <Text style={styles.headerSubtitle}>
              Terms, Help center, Contact us
            </Text>
          </View>
        </View>
      </View>

      <Divider />
      <View style={styles.main}>
        <Avatar
          size={50}
          icon={{
            name: 'logout',
            color: '#383737',
          }}
          borderColor='none'
        />
        <TouchableOpacity style={styles.headerContent} onPress={handleLogout}>
          <Text style={styles.headerTitle}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingComponent;
