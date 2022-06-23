import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    maxHeight: 300,
    bottom: 56,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: 'white',
    paddingHorizontal: '6%',
    zIndex: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    marginLeft: 30,
    fontSize: 17,
    color: '#878787',
    alignSelf: 'center',
  },
});

export default styles;
