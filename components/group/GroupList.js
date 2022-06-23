import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from '@rneui/themed';
import GroupCard from './GroupCard';
import Loader from '../layout/Loader';
import UseGroups from '../../hooks/UseGroups';
import styles from './styles/groupList';

const GroupList = ({ navigation }) => {
  const [isLoad, setIsLoad] = useState(false);
  const { groupsData, loadSelectGroup } = UseGroups();

  const handleGoToGroupForm = () => {
    navigation.navigate('create');
  };

  useEffect(() => {
    if (!isLoad && groupsData) {
      setTimeout(() => {
        setIsLoad(true);
      }, 100);
    }
    if (groupsData[0]) loadSelectGroup(groupsData[0].codeGroupe);
  }, [groupsData[0]]);

  if (!isLoad) return <Loader />;

  if (isLoad && !groupsData[0]?.codeGroupe) {
    return (
      <View style={styles.alternative}>
        <Text style={styles.alternativeTitle}>There is no group yet</Text>
        <TouchableOpacity
          style={styles.alternativeButton}
          onPress={handleGoToGroupForm}
        >
          <Text style={styles.alternativeButtonText}> Create a new group</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View>
        {groupsData.map((group) => (
          <GroupCard
            key={group.codeGroupe}
            group={group}
            navigation={navigation}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.addIcon} onPress={handleGoToGroupForm}>
        <Avatar
          size={40}
          rounded
          title={'+'}
          backgroundColor='#1976D2'
          titleStyle={{ fontSize: 35, marginTop: -5 }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGoToGroupForm}>
        <Text style={styles.addText}>Add a new group</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GroupList;
