import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 5,
    width: '100%',
    height: '100%',
  },

  header: {
    flexDirection: 'row',
    backgroundColor: '#1976D2',
    height: 60,
    elevation: 5,
  },
  avatar: {
    alignSelf: 'center',
  },
  headerContent: {
    marginLeft: 5,
    justifyContent: 'center',
  },
  tabTitle: {
    color: 'white',
    fontSize: 24,
  },
  tabSubtitle: { color: 'white' },

  icon: {
    marginTop: 50,
    alignSelf: 'center',
    marginBottom: 30,
  },

  input: {
    marginBottom: 15,
  },

  text: {
    alignSelf: 'center',
    color: '#7c7c7c',
    marginBottom: 25,
  },
});

export default styles;
