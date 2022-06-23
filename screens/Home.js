import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Header from '../components/layout/Header';
import GroupList from '../components/group/GroupList';
import styles from './styles/home';

const Home = ({ navigation }) => {
  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <GroupList navigation={navigation} />
      </ScrollView>
    </>
  );
};

export default Home;
