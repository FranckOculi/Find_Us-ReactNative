import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { Avatar } from '@rneui/themed';
import { Provider, Switch } from 'react-native-paper';
import UserInfos from '../../hooks/UserInfos';
import UseGroups from '../../hooks/UseGroups';
import UsePosition from '../../hooks/UsePosition';
import { MaterialIcons } from '../../ui/general/MaterialIcons';
import styles from './styles/checkBoxMember';

const CheckBoxMember = ({ group }) => {
  const [expandedMember, setExpandedMember] = useState(true);
  const { userData } = UserInfos();
  const { allMembersData } = UseGroups();
  const { loadStatus, loadAllStatus } = UsePosition();
  const [isCheckAll, setIsCheckAll] = useState(true);
  const [isCheck, setIsCheck] = useState(
    allMembersData.groupes[group.codeGroupe].map((member) => {
      if (member.utilisateurId !== userData.utilisateurId) {
        return member.utilisateurId;
      }
    }),
  );

  const handleExpandMember = () => {
    setExpandedMember(!expandedMember);
  };

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(
      allMembersData.groupes[group.codeGroupe].map((member) => {
        if (member.utilisateurId !== userData.utilisateurId) {
          return member.utilisateurId;
        }
      }),
    );

    loadAllStatus(!isCheckAll);
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e, member) => {
    const id = member.utilisateurId;
    const checked = e;
    setIsCheck([...isCheck, id]);
    const status = e;
    loadStatus(id, status);

    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  const ListMembers = ({ group }) => {
    return (
      <ScrollView>
        {allMembersData.groupes[group.codeGroupe].map((member) => {
          if (member.utilisateurId !== userData.utilisateurId) {
            return (
              <View
                key={member.utilisateurId + member.groupeCode}
                style={styles.member}
              >
                <View style={styles.memberLeft}>
                  <Avatar
                    size={25}
                    rounded
                    title={member.pseudo.slice(0, 1).toUpperCase()}
                    backgroundColor='#03A9F4'
                  />
                  <View>
                    <Text style={styles.memberText}>{member.pseudo}</Text>
                  </View>
                </View>

                <View>
                  <Switch
                    value={isCheck.includes(member.utilisateurId)}
                    onValueChange={(e) => handleClick(e, member)}
                    color='#1976D2'
                  />
                </View>
              </View>
            );
          }
        })}
      </ScrollView>
    );
  };

  return (
    <Provider>
      <View key={group.codeGroupe}>
        <View style={styles.group}>
          <View style={styles.groupLeft}>
            <Switch
              value={isCheckAll}
              onValueChange={handleSelectAll}
              color='#1976D2'
            />
            <Avatar
              size={35}
              rounded
              source={group.photoGroupe && { uri: group.photoGroupe }}
              title={
                !group.photoGroupe && group.nomGroupe.slice(0, 1).toUpperCase()
              }
              backgroundColor='#F44336'
              marginLeft={5}
            />
            <View>
              <Text style={styles.groupTitle}>{group.nomGroupe}</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={handleExpandMember}
            style={styles.groupRight}
          >
            <MaterialIcons
              name={expandedMember ? 'expand-less' : 'expand-more'}
              size='giga'
              color='#7c7c7c'
            />
          </TouchableOpacity>
        </View>

        {expandedMember && <ListMembers group={group}></ListMembers>}
      </View>
    </Provider>
  );
};

export default CheckBoxMember;
