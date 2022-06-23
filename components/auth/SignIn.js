import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import CustomInput from '../../ui/form/CustomInput';
import CustomButton from '../../ui/form/CustomButton';
import { Avatar } from '@rneui/themed';
import UseAuth from '../../hooks/UseAuth';
import styles from './styles/signIn';

const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [signInError, setSignInError] = useState(false);
  const { login } = UseAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      const data = {
        mail: formData.email.toLowerCase(),
        motDePasse: formData.password,
      };
      return await login(data).catch((error) => {
        console.log(error);
        setSignInError(true);
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Avatar
          size={50}
          rounded
          icon={{ name: 'lock' }}
          backgroundColor='purple'
        />
      </View>
      <Text style={styles.text}>SignIn</Text>
      <CustomInput
        style={styles.input}
        required
        placeholder='Email *'
        value={formData.email}
        onChangeText={(text) => {
          setFormData({
            ...formData,
            email: text.trim(),
          });
          setSignInError(false);
        }}
      />
      <CustomInput
        style={styles.input}
        required
        placeholder='Password *'
        value={formData.password}
        onChangeText={(text) => {
          setFormData({
            ...formData,
            password: text.trim(),
          });
          setSignInError(false);
        }}
        secureTextEntry={true}
      />
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot password ?</Text>
      </TouchableOpacity>
      {signInError && (
        <Text style={styles.error}>
          That email and password combination is incorrect
        </Text>
      )}
      {signInError || !formData.email || !formData.password ? (
        <CustomButton disabled={true}>SIGN IN</CustomButton>
      ) : (
        <CustomButton onPress={handleLogin}>SIGN IN</CustomButton>
      )}
    </View>
  );
};

export default SignIn;
