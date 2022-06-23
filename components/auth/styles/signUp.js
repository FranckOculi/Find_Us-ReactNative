import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 35,
  },
  avatar: {
    alignSelf: 'center',
    marginBottom: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 27,
    fontWeight: '500',
    marginBottom: 25,
  },
  forgot: {
    textAlign: 'right',
    marginRight: 11,
    marginTop: -10,
    color: '#1976d2',
    textDecorationLine: 'underline',
    fontFamily: 'Roboto',
    marginBottom: 10,
  },
  input: {
    marginBottom: 5,
  },
  passwordError: {
    marginHorizontal: 10,
    textAlign: 'justify',
    color: 'red',
    marginBottom: 10,
  },
  signUpError: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 10,
  },
});

export default styles;
