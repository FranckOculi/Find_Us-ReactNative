import { View } from 'react-native';
import { Button } from '@rneui/themed';
import styles from './styles/loader';

const Loader = () => {
  return (
    <View style={styles.container}>
      <Button
        loading
        containerStyle={{
          borderWidth: 0,
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        buttonStyle={{
          backgroundColor: 'white',
          borderColor: 'none',
          borderWidth: 0,
        }}
        loadingProps={{ color: '#D3D3D3', size: 50 }}
      />
    </View>
  );
};

export default Loader;
