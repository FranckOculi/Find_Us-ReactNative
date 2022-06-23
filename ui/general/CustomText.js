import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';

const CustomText = ({ customFont, children, ...props }) => {
  const [isLoad, setIsLoaded] = useState(false);
  const [font, setFont] = useState('');
  const [loaded] = useFonts({
    NunitoBold: require('../../assets/fonts/Nunito-Bold.ttf'),
    NunitoSemiBold: require('../../assets/fonts/Nunito-SemiBold.ttf'),
    Nunito: require('../../assets/fonts/Nunito-Medium.ttf'),
  });

  useEffect(() => {
    if (!isLoad) {
      selectedFont();
      return setIsLoaded(!isLoad);
    }
  }, []);

  const styles = StyleSheet.create({
    text: {
      fontFamily: font,
      ...props.style,
    },
  });

  const selectedFont = () => {
    switch (customFont) {
      case 'NunitoBold':
        return setFont('NunitoBold');

      case 'NunitoSemiBold':
        return setFont('NunitoSemiBold');

      default:
        return setFont('Nunito');
    }
  };

  return (
    <>
      {loaded && (
        <View>
          <Text style={styles.text}>{children}</Text>
        </View>
      )}
    </>
  );
};

export default CustomText;
