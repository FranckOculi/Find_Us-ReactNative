import { Pressable, StyleSheet, Text } from 'react-native';

const CustomButton = ({ onPress, children, disabled }) => {
  return (
    <Pressable
      onPress={onPress}
      style={disabled ? styles.containerDisabled : styles.container}
      disabled={disabled}
    >
      <Text style={disabled ? styles.textDisabled : styles.text}>
        {children}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1976d2',
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    borderColor: '#1976d2',
    borderRadius: 6,
  },
  containerDisabled: {
    backgroundColor: '#E0E0E0',
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    borderColor: '#1976d2',
    borderRadius: 6,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Roboto',
    color: 'white',
    fontWeight: 'bold',
  },
  textDisabled: {
    textAlign: 'center',
    fontSize: 18,
    color: '#BDBDBD',
    fontWeight: 'bold',
  },
});

export default CustomButton;
