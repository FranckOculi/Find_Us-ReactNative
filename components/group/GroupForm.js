import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Header from '../layout/Header';
import CustomInput from '../../ui/form/CustomInput';
import CustomButton from '../../ui/form/CustomButton';
import { Avatar } from '@rneui/themed';
import UseAuth from '../../hooks/UseAuth';
import UserInfos from '../../hooks/UserInfos';
import UseGroups from '../../hooks/UseGroups';
import styles from './styles/groupForm';

const GroupForm = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });
  const { userData } = UserInfos();
  const { createGroup, loadGroupsData } = UseGroups();
  const { token } = UseAuth();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleCreate = async (e) => {
    const data = {
      nomGroupe: formData.name,
      description: formData.description,
      createur: userData.utilisateurId,
    };

    e.preventDefault();
    if (formData.name) {
      return await createGroup(userData.utilisateurId, data, token)
        .then(async (res) => {
          if (!res.err) {
            const finalData = [{ groupeCode: res.data.data.codeGroupe }];
            await loadGroupsData(userData.utilisateurId, finalData, token).then(
              () => handleGoBack(),
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.avatar}>
            <Avatar
              size={75}
              rounded
              icon={{ name: 'arrow-left' }}
              iconStyle={{ marginLeft: -5 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleGoBack} style={styles.headerContent}>
            <Text style={styles.tabTitle}>New group</Text>
            <Text style={styles.tabSubtitle}>Add subject</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.icon}>
          <Avatar
            size={50}
            rounded
            icon={{ name: 'camera-plus' }}
            backgroundColor='#BDBDBD'
          />
        </View>

        <CustomInput
          style={styles.input}
          required
          placeholder='Name *'
          value={formData.name}
          onChangeText={(text) => {
            setFormData({
              ...formData,
              name: text.trim(),
            });
          }}
        />
        <CustomInput
          style={styles.input}
          placeholder='Description'
          value={formData.description}
          onChangeText={(text) => {
            setFormData({
              ...formData,
              description: text.trim(),
            });
          }}
        />

        <Text style={styles.text}>
          Provide a group subject and optional group icon
        </Text>

        {!formData.name ? (
          <CustomButton disabled={true}>CREATE</CustomButton>
        ) : (
          <CustomButton onPress={handleCreate}>CREATE</CustomButton>
        )}
      </View>
    </>
  );
};

export default GroupForm;
