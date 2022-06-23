import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Avatar, SearchBar } from '@rneui/themed';
import { MaterialIcons } from '../../ui/general/MaterialIcons';
import UseFriends from '../../hooks/UseFriends';
import UseAuth from '../../hooks/UseAuth';
import { isEmpty } from '../../utils/Utils';
import { BlurView } from 'expo-blur';
import styles from './styles/friendsSearch';

const FriendsSearch = ({ userData, handleAddMember, handleAddMemberModal }) => {
  const [isLoad, setIsLoad] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [friend, setFriend] = useState();
  const [isValid, setIsValid] = useState(false);

  const { friendsId, friendsData, loadFriendsData } = UseFriends();
  const { token } = UseAuth();

  const fetchFriendsData = async () => {
    return await loadFriendsData(userData.utilisateurId, friendsId, token);
  };

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = friendsData.filter(function (item) {
        const itemData = item.pseudo ? item.pseudo.toUpperCase() : '';
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(friendsData);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      <Text
        style={styles.itemStyle}
        onPress={() => {
          addItem(item);
          setFilteredDataSource('');
          setSearch(item.pseudo);
          setIsValid(true);
        }}
      >
        {item.pseudo.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
          borderColor: '#C8C8C8',
        }}
      />
    );
  };

  const addItem = (item) => {
    setFriend(item.utilisateurId);
  };

  const handleGoBack = () => {
    handleAddMemberModal();
  };

  useEffect(() => {
    if (!isLoad & isEmpty(friendsData)) {
      fetchFriendsData();
      setIsLoad(true);
    }
  }, []);

  return (
    <BlurView tint='light' intensity={100} style={styles.blurView}>
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
            <Text style={styles.title}>Add friends</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.main}>
          <MaterialIcons name='group-add' size='giga' color='#1976D2' />
          <Text style={styles.text}>Add friends</Text>
          <View style={styles.search}>
            <SearchBar
              placeholder='Type Here...'
              onChangeText={(text) => searchFilterFunction(text)}
              value={search}
              autoFocus
              containerStyle={{
                backgroundColor: 'white',
                borderBottomColor: 'white',
                borderTopColor: 'white',
              }}
              inputContainerStyle={{
                backgroundColor: '#E5E4EA',
                width: '90%',
              }}
              lightTheme
            />
            <FlatList
              data={filteredDataSource}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={ItemSeparatorView}
              renderItem={ItemView}
              style={styles.list}
            />
          </View>
          <Pressable
            onPress={() => handleAddMember(friend)}
            disabled={!isValid && true}
            style={!isValid ? styles.buttonDisabled : styles.button}
          >
            <Text
              style={!isValid ? styles.buttonTextDisabled : styles.buttonText}
            >
              Add
            </Text>
          </Pressable>
        </View>
      </View>
    </BlurView>
  );
};

export default FriendsSearch;
