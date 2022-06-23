import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import UseGroups from '../../hooks/UseGroups';
import { MaterialIcons } from '../../ui/general/MaterialIcons';
import CheckBoxMember from './CheckBoxMember';
import styles from './styles/bottomSheet';

const BottomSheet = () => {
  const [expandedCard, setExpandedCard] = useState(true);
  const { groupsData, selectedGroup } = UseGroups();

  const handleExpandCard = () => {
    setExpandedCard(!expandedCard);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text></Text>
        <Text style={styles.title}>Members</Text>
        <TouchableOpacity onPress={handleExpandCard}>
          <MaterialIcons
            name={expandedCard ? 'expand-less' : 'expand-more'}
            size='giga'
            color='#7c7c7c'
          />
        </TouchableOpacity>
      </View>
      {expandedCard &&
        groupsData &&
        groupsData.map((group) => {
          if (group.codeGroupe === selectedGroup) {
            return <CheckBoxMember key={group.codeGroupe} group={group} />;
          }
        })}
    </View>
  );
};

export default BottomSheet;
