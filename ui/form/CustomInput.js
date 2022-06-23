import { StyleSheet, TextInput, View } from 'react-native';

const CustomInput = ({
  required,
  placeholder,
  secureTextEntry,
  style,
  ...props
}) => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      paddingHorizontal: 10,
      paddingVertical: 5,
      ...style,
    },
    input: {
      backgroundColor: 'white',
      height: 60,
      borderColor: '#e8e8e8',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 5,
      fontSize: 18,
      color: '#878787',
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        required={required}
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        {...props}
      />
    </View>
  );
};

export default CustomInput;
