import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 0,
    elevation: 2,
    borderBottomColor: '#D7D7D7',
    borderBottomWidth: 1,
  },
  content: {
    flexDirection: 'row',
  },
  right: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    color: '#383737',
  },
});

export default styles;
