import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 40,
  },
  avatar: {
    alignSelf: 'center',
    marginBottom: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 27,
    fontWeight: '500',
    marginBottom: 35,
  },
  forgot: {
    textAlign: 'right',
    marginRight: 11,
    marginTop: -10,
    color: '#1976d2',
    textDecorationLine: 'underline',
    fontFamily: 'Roboto',
    marginBottom: 15,
  },
  input: {
    marginBottom: 15,
  },
  error: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 15,
  },
});

export default styles;
