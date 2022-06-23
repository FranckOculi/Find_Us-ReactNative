import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../layout/Header';
import Loader from '../layout/Loader';
import FriendsSearch from '../friend/FriendsSearch';
import UseAuth from '../../hooks/UseAuth';
import UserInfos from '../../hooks/UserInfos';
import UseGroups from '../../hooks/UseGroups';
import { FeatherIcon } from '../../ui/general/FeatherIcon';
import { MaterialIcons } from '../../ui/general/MaterialIcons';
import { MaterialCommunityIcons } from '../../ui/general/MaterialCommunityIcons';
import { Avatar } from '@rneui/themed';
import { Menu, Divider, Provider } from 'react-native-paper';
import { dateParser } from '../../utils/Utils';
import styles from './styles/groupSingle';

const GroupSingle = ({ navigation, route }) => {
  const [isLoad, setIsLoad] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [dataSingle, setDataSingle] = useState([]);
  const [expandedDescription, setExpandedDescription] = useState(true);
  const [expandedMember, setExpandedMember] = useState(true);
  const [descriptionEdit, setDescriptionEdit] = useState();
  const [friendsSearchModal, setFriendsSearchModal] = useState(false);
  const { groupCode } = route.params;
  const [formData, setFormData] = useState({
    description: dataSingle.description ? dataSingle.description : '',
  });
  const [showMenu, setShowMenu] = useState(false);
  const openMenu = () => setShowMenu(true);
  const closeMenu = () => setShowMenu(false);

  //Hooks
  const { token } = UseAuth();
  const { userData } = UserInfos();
  const {
    findGroup,
    removeGroup,
    loadSelectGroup,
    findMember,
    membersData,
    reloadMember,
    addMemberToGroup,
    removeMember,
  } = UseGroups();

  //Routes
  const handleGoBack = () => {
    resetMember();
    navigation.reset({
      routes: [{ name: 'Home' }],
    });
  };

  const handleGoToMap = () => {
    loadSelectGroup(dataSingle.codeGroupe);
    resetMember();
    navigation.reset({
      routes: [{ name: 'Map' }],
    });
  };

  //Collapse
  const handleExpandDescription = () => {
    setExpandedDescription(!expandedDescription);
  };

  const handleExpandMember = () => {
    setExpandedMember(!expandedMember);
  };

  //Member
  const handleAddMemberModal = () => {
    closeMenu();
    setFriendsSearchModal(!friendsSearchModal);
  };

  const handleAddMember = async (id) => {
    setRefresh(!refresh);
    return await addMemberToGroup(id, dataSingle.codeGroupe, token).then(() =>
      handleAddMemberModal(),
    );
  };

  const resetMember = () => {
    removeMember();
  };

  const refreshMember = async () => {
    reloadMember(userData.utilisateurId, groupCode, token);
  };

  //Group
  const loadGroup = async () => {
    await findMember(userData.utilisateurId, groupCode, token);
    await findGroup(groupCode).then((res) => {
      setDataSingle(res);
    });
  };

  const handleDelete = async () => {
    await removeGroup(
      userData.utilisateurId,
      dataSingle.codeGroupe,
      token,
    ).then(() => handleGoBack());
  };

  const handleEditDescription = () => {
    setDescriptionEdit(!descriptionEdit);
  };

  useEffect(() => {
    if (isLoad && dataSingle?.codeGroupe) {
      refreshMember();
    }
    if (!isLoad && !dataSingle?.codeGroupe) {
      loadGroup();
      setIsLoad(!isLoad);
    }
  }, [refresh]);

  if (dataSingle?.codeGroupe) {
    return (
      <>
        {/*Modal*/}
        {friendsSearchModal && (
          <FriendsSearch
            userData={userData}
            handleAddMemberModal={handleAddMemberModal}
            handleAddMember={handleAddMember}
          />
        )}

        <Header />
        <View style={styles.container}>
          {/* Tab*/}
          <View style={styles.header}>
            <TouchableOpacity onPress={handleGoBack} style={styles.avatar}>
              <Avatar
                size={75}
                rounded
                icon={{ name: 'arrow-left' }}
                iconStyle={{ marginLeft: -5 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleGoBack}
              style={styles.headerContent}
            >
              <Text style={styles.title}>{dataSingle.nomGroupe}</Text>
            </TouchableOpacity>
          </View>

          {/* Card*/}
          <ScrollView style={styles.main}>
            <Provider>
              {/* Card header*/}
              <View style={styles.cardHeader}>
                <View style={styles.cardLeft}>
                  <Avatar
                    size={50}
                    rounded
                    source={
                      dataSingle.photoGroupe && {
                        uri: dataSingle.photoGroupe,
                      }
                    }
                    title={
                      !dataSingle.photoGroupe &&
                      dataSingle.nomGroupe.slice(0, 1).toUpperCase()
                    }
                    backgroundColor='#F44336'
                  />

                  <View style={styles.cardHeaderContent}>
                    <Text style={styles.cardHeaderTitle}>
                      {dataSingle.nomGroupe && dataSingle.nomGroupe}
                    </Text>
                    <Text style={styles.cardHeaderSubtitle}>
                      {dateParser(dataSingle.dateGroupe)}
                    </Text>
                  </View>
                </View>

                <View style={styles.cardHeaderIcon}>
                  <Menu
                    style={styles.menu}
                    visible={showMenu}
                    onDismiss={closeMenu}
                    anchor={
                      <TouchableOpacity onPress={openMenu}>
                        <FeatherIcon
                          name='more-vertical'
                          size='extraLarge'
                          color='#7c7c7c'
                        />
                      </TouchableOpacity>
                    }
                  >
                    <Menu.Item
                      title={
                        <View style={styles.menuItem}>
                          <Avatar
                            size={45}
                            rounded
                            source={
                              dataSingle.photoGroupe && {
                                uri: dataSingle.photoGroupe,
                              }
                            }
                            title={
                              !dataSingle.photoGroupe &&
                              dataSingle.nomGroupe.slice(0, 1).toUpperCase()
                            }
                            backgroundColor='#F44336'
                          />
                          <View style={styles.menuContent}>
                            <Text style={styles.menuTitle}>Edit photo</Text>
                          </View>
                        </View>
                      }
                      style={styles.menuItemsHeader}
                    />
                    <Divider style={{ marginTop: 10, height: 1 }} />
                    <Menu.Item
                      onPress={handleAddMemberModal}
                      title={
                        <View style={styles.menuItem}>
                          <MaterialIcons
                            size='extraLarge'
                            name='person-add'
                            color='#7c7c7c'
                          />
                          <View style={styles.menuContent}>
                            <Text style={styles.menuTitle}>
                              Add a new member
                            </Text>
                          </View>
                        </View>
                      }
                      style={styles.menuItemsMain}
                    />
                    <Menu.Item
                      onPress={() => {}}
                      title={
                        <View style={styles.menuItem}>
                          <MaterialIcons
                            size='extraLarge'
                            name='settings'
                            color='#7c7c7c'
                          />
                          <View style={styles.menuContent}>
                            <Text style={styles.menuTitle}>Settings</Text>
                          </View>
                        </View>
                      }
                      style={styles.menuItemsMain1}
                    />
                    <Menu.Item
                      onPress={handleDelete}
                      title={
                        <View style={styles.menuItem}>
                          <MaterialIcons
                            size='extraLarge'
                            name='delete-forever'
                            color='#7c7c7c'
                          />
                          <View style={styles.menuContent}>
                            <Text style={styles.menuTitle}>Delete group</Text>
                          </View>
                        </View>
                      }
                      style={styles.menuItemsMain1}
                    />
                  </Menu>
                </View>
              </View>

              {/* Card Description*/}
              <View style={styles.description}>
                <View style={styles.descriptionHeader}>
                  <Text style={styles.descriptionTitle}>Description:</Text>

                  <TouchableOpacity onPress={handleExpandDescription}>
                    <MaterialIcons
                      name={expandedDescription ? 'expand-more' : 'expand-less'}
                      size='extraLarge'
                      color='#7c7c7c'
                    />
                  </TouchableOpacity>
                </View>
                {expandedDescription && (
                  <View style={styles.descriptionExpand}>
                    {descriptionEdit ? (
                      <>
                        <TouchableOpacity>
                          <TextInput
                            placeholder={
                              !dataSingle.description
                                ? 'read a description ...'
                                : dataSingle.description
                            }
                            value={formData.description}
                            onChangeText={(text) => {
                              setFormData({
                                ...formData,
                                description: text.trim(),
                              });
                            }}
                            style={styles.descriptionInput}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleEditDescription}>
                          <MaterialCommunityIcons
                            name='border-color'
                            size='extraLarge'
                            color='#7c7c7c'
                          />
                        </TouchableOpacity>
                      </>
                    ) : (
                      <>
                        <Text style={styles.descriptionText}>
                          {!dataSingle.description
                            ? 'read a description ...'
                            : dataSingle.description}
                        </Text>
                        <TouchableOpacity onPress={handleEditDescription}>
                          <MaterialCommunityIcons
                            name='border-color'
                            size='extraLarge'
                            color='#7c7c7c'
                          />
                        </TouchableOpacity>
                      </>
                    )}
                  </View>
                )}
              </View>

              {/* Card Members*/}
              <View style={styles.members}>
                <View style={styles.membersHeader}>
                  <Text style={styles.descriptionTitle}>Members:</Text>

                  <TouchableOpacity onPress={handleExpandMember}>
                    <MaterialIcons
                      name={expandedMember ? 'expand-more' : 'expand-less'}
                      size='extraLarge'
                      color='#7c7c7c'
                    />
                  </TouchableOpacity>
                </View>
                {expandedMember && (
                  <View style={styles.membersExpand}>
                    {membersData &&
                      membersData.map((member) => (
                        <View key={member.utilisateurId} style={styles.member}>
                          <View style={styles.memberLeft}>
                            <Avatar
                              size={35}
                              rounded
                              title={member.pseudo.slice(0, 1).toUpperCase()}
                              backgroundColor='#03A9F4'
                            />
                            <View>
                              <Text style={styles.memberText}>
                                {member.pseudo}
                              </Text>
                            </View>
                          </View>

                          <View>
                            <Text style={styles.memberRight}>
                              {member.admin === 'true' && 'admin'}
                            </Text>
                          </View>
                        </View>
                      ))}
                  </View>
                )}
                {/*Button*/}
                <TouchableOpacity style={styles.bottom} onPress={handleGoToMap}>
                  <Image
                    style={styles.bottomImage}
                    source={require('../../assets/img/seeOnMap.png')}
                  />
                  <Text style={styles.bottomText}>See on map</Text>
                </TouchableOpacity>
              </View>
            </Provider>
          </ScrollView>
        </View>
      </>
    );
  }
  if (isLoad & !dataSingle) return null;

  return <Loader />;
};

export default GroupSingle;
