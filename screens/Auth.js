import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';
import Header from '../components/layout/Header';
import styles from './styles/auth';

const Auth = ({ navigation }) => {
  const [authModal, setAuthModal] = useState(true);

  const stateChange = () => {
    setAuthModal(!authModal);
  };

  const handleForgotEmail = () => {
    console.log('en attente redirection (password) ');
  };

  return (
    <View style={styles.container}>
      <Header />
      {authModal ? (
        <SignIn handleForgotEmail={handleForgotEmail} navigation={navigation} />
      ) : (
        <SignUp />
      )}
      <TouchableOpacity>
        <Text style={styles.modal} onPress={stateChange}>
          {authModal
            ? 'Dont have an account? Sign Up'
            : 'Already have an account? Sign in'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Auth;
