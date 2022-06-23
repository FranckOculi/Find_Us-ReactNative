import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Loader from '../layout/Loader';
import GroupsPosition from './GroupPosition';
import styles from './styles/mapComponent';

const MapComponent = ({ mapLoaded }) => {
  const [loadPage, setLoadPage] = useState(false);
  const [initialLocation, setInitialLocation] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [reload, setReload] = useState(false);
  const refreshDelay = 5000;

  const getPosition = async () => {
    try {
      if (!loadPage) {
        let firstLocation = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.BestForNavigation,
        });
        setInitialLocation({
          latitude: firstLocation.coords.latitude,
          longitude: firstLocation.coords.longitude,
          // latitudeDelta: 0.0922,
          // longitudeDelta: 0.0421,
          latitudeDelta: 0.3522,
          longitudeDelta: 0.2521,
        });
        setLocation({
          latitude: firstLocation.coords.latitude,
          longitude: firstLocation.coords.longitude,
        });
        setLoadPage(true);
        mapLoaded(true);
        return refresh();
      } else {
        await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.High,
          },
          (loc) => {
            if (
              loc.coords.latitude != location.latitude &&
              loc.coords.longitude != location.longitude
            ) {
              setLocation({
                latitude: loc.coords.latitude,
                longitude: loc.coords.longitude,
              });
              // savePosition();
            }
          },
        );
        setTimeout(() => {
          return refresh();
        }, refreshDelay);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onRegionChange = (region) => {
    setInitialLocation(region);
  };

  //Refresh positions
  function refresh() {
    setTimeout(() => {
      setReload(!reload);
    }, refreshDelay);
  }

  useEffect(() => {
    if (!loadPage) {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
        getPosition();
      })();
    }
    if (loadPage) {
      getPosition();
    }
  }, [reload]);

  if (
    !initialLocation?.latitude ||
    !location?.latitude ||
    !initialLocation?.longitude ||
    !location?.longitude
  ) {
    return <Loader />;
  }

  if (errorMsg) return alert(errorMsg);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={initialLocation}
        onRegionChangeComplete={(region) => onRegionChange(region)}
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
        >
          <View>
            <Image
              source={require('../../assets/icon/userMarker.png')}
              style={{ width: 45, height: 45 }}
            />
          </View>
          <Callout>
            <Text>You</Text>
          </Callout>
        </Marker>
        <GroupsPosition />
      </MapView>
    </View>
  );
};

export default MapComponent;
