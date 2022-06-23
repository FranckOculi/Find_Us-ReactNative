import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles/header';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/img/logo.png')}
      />
    </View>
  );
};

export default Header;
