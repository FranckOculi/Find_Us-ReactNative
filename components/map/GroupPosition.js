import React, { useState, useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { Callout, Marker } from 'react-native-maps';
import UseAuth from '../../hooks/UseAuth';
import UserInfos from '../../hooks/UserInfos';
import UseGroups from '../../hooks/UseGroups';
import UsePosition from '../../hooks/UsePosition';

const GroupsPosition = () => {
  const [isLoad, setIsLoad] = useState(false);
  const { token } = UseAuth();
  const { userData } = UserInfos();
  const { getMember, selectedGroup } = UseGroups();
  const { getMembersLastPositions, currentGroupsPositions } = UsePosition();

  const getMembersPosition = () => {
    return getMembersLastPositions(
      userData.utilisateurId,
      selectedGroup,
      token,
    );
  };

  useEffect(() => {
    if (!isLoad) {
      getMembersPosition();
      setIsLoad(!isLoad);
    }
  }, []);

  return (
    <>
      {currentGroupsPositions[0] &&
        currentGroupsPositions.map(
          (member) =>
            member.status &&
            member.latitude && (
              <Marker
                key={member.utilisateurPosition}
                coordinate={{
                  latitude: member.latitude,
                  longitude: member.longitude,
                }}
              >
                <View>
                  <Image
                    source={require('../../assets/icon/membersMarker.png')}
                    style={{ width: 45, height: 45 }}
                  />
                </View>
                <Callout>
                  <Text>{getMember(member, selectedGroup)}</Text>
                </Callout>
              </Marker>
            ),
        )}
    </>
  );
};

export default GroupsPosition;
