import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { isStrongPassword } from 'validator';
import CustomInput from '../../ui/form/CustomInput';
import CustomButton from '../../ui/form/CustomButton';
import { Avatar } from '@rneui/themed';
import UseAuth from '../../hooks/UseAuth';
import styles from './styles/signUp';

const SignUp = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
  });
  const [passwordError, setPasswordError] = useState(false);
  const [signUpError, setSignUpError] = useState(false);
  const { createAccount } = UseAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!isStrongPassword(formData.password)) {
      setPasswordError(true);
    } else if (formData.userName && formData.email && formData.password) {
      const data = {
        pseudo: formData.userName,
        mail: formData.email.toLowerCase(),
        motDePasse: formData.password,
      };
      console.log(formData);
      return await createAccount(data).catch((err) => {
        setSignUpError(true);
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
      <Text style={styles.text} customFont='NunitoSemiBold'>
        SignUp
      </Text>
      <CustomInput
        style={styles.input}
        required
        placeholder='userName *'
        value={formData.userName}
        onChangeText={(text) => {
          setFormData({
            ...formData,
            userName: text.trim(),
          });
          setSignUpError(false);
        }}
      />
      <CustomInput
        style={styles.input}
        required
        autoComplete='email'
        placeholder='Email *'
        value={formData.email}
        onChangeText={(text) => {
          setFormData({
            ...formData,
            email: text.trim(),
          });
          setSignUpError(false);
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
          setSignUpError(false);
          setPasswordError(false);
        }}
        secureTextEntry={true}
      />
      {passwordError && (
        <Text style={styles.passwordError}>
          Password must contain minimum 8 characters with at least : - 1
          uppercase (A-Z) - 1 lowercase (a-z) - 1 number (0-9) - 1 symbol
          (@#%!_$...)
        </Text>
      )}
      {signUpError && (
        <Text style={styles.signUpError}>Email is already used</Text>
      )}
      {signUpError || !formData.email || !formData.password ? (
        <CustomButton disabled={true}>SIGN UP</CustomButton>
      ) : (
        <CustomButton onPress={handleSignUp}>SIGN UP</CustomButton>
      )}
    </View>
  );
};

export default SignUp;
