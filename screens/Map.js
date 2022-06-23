import React, { useState } from 'react';
import { View } from 'react-native';
import Header from '../components/layout/Header';
import MapComponent from '../components/map/MapComponent';
import BottomSheet from '../components/map/BottomSheet';
import styles from './styles/map';

const Map = () => {
  const [isLoad, setIsLoad] = useState(false);
  const mapLoaded = (boolean) => {
    if (boolean) return setIsLoad(!isLoad);
  };

  return (
    <>
      <Header />
      <View style={styles.map}>
        <MapComponent mapLoaded={mapLoaded} />
        {isLoad && <BottomSheet />}
      </View>
    </>
  );
};

export default Map;
