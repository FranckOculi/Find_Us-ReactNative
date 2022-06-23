import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  blurView: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 18,
    zIndex: 1,
  },
  container: {
    width: '80%',
    height: '75%',
    zIndex: 1,
    alignSelf: 'center',
  },

  //Header----------------
  header: {
    marginTop: '28%',
    flexDirection: 'row',
    backgroundColor: '#1976D2',
    height: 60,
    elevation: 16,
  },
  avatar: {
    alignSelf: 'center',
  },
  headerContent: {
    marginLeft: 5,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
  },

  //Main----------------
  main: {
    marginTop: 10,
    backgroundColor: 'white',
    height: '78.2%',
    elevation: 8,
    paddingVertical: 20,
    alignItems: 'center',
  },
  text: {
    color: '#7c7c7c',
    fontSize: 16,
  },
  //SearchBar--------------
  search: {
    marginTop: 25,
    width: '100%',
    borderColor: '#fff',
    alignItems: 'center',
  },
  list: {
    width: '85%',
  },
  itemStyle: {
    color: '#7c7c7c',
  },
  //Bottom----------------
  button: {
    marginTop: 25,
    backgroundColor: '#1976d2',
    padding: 15,
    marginHorizontal: 10,
    borderColor: '#1976d2',
    borderRadius: 6,
  },
  buttonDisabled: {
    marginTop: 25,
    backgroundColor: '#E0E0E0',
    padding: 15,
    marginHorizontal: 10,
    borderColor: '#1976d2',
    borderRadius: 6,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Roboto',
    color: 'white',
    fontWeight: 'bold',
  },
  buttonTextDisabled: {
    textAlign: 'center',
    fontSize: 18,
    color: '#BDBDBD',
    fontWeight: 'bold',
  },
});

export default styles;
