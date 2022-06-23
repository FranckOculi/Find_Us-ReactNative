import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Avatar, Card } from '@rneui/themed';
import { dateParser } from '../../utils/Utils';
import styles from './styles/groupCard';

const GroupCard = ({ group, navigation }) => {
  const handleGoToGroupSingle = () => {
    navigation.navigate('groupSingle', {
      groupCode: group.codeGroupe,
    });
  };

  return (
    <TouchableOpacity onPress={handleGoToGroupSingle}>
      <Card containerStyle={styles.card} group={group}>
        <View style={styles.content}>
          <Avatar
            size={50}
            rounded
            source={group.photoGroupe && { uri: group.photoGroupe }}
            title={
              !group.photoGroupe && group.nomGroupe.slice(0, 1).toUpperCase()
            }
            backgroundColor='#F44336'
          ></Avatar>
          <View style={styles.right}>
            <Text style={styles.title}>
              {group.nomGroupe && group.nomGroupe}
            </Text>
            <Text style={styles.subtitle}>
              {group.description
                ? group.description.length > 34
                  ? group.description.slice(0, 34) + '...'
                  : group.description
                : dateParser(group.dateGroupe)}
            </Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default GroupCard;
