import { View } from 'react-native';
import Header from '../components/layout/Header';
import SettingComponent from '../components/settings/SettingComponent';
import UserInfos from '../hooks/UserInfos';
import styles from './styles/settings';

const Settings = ({ navigation, route }) => {
  const { userId } = UserInfos();

  if (!userId) return;

  return (
    <>
      <Header />
      <View style={styles.home}>
        <SettingComponent />
      </View>
    </>
  );
};

export default Settings;
