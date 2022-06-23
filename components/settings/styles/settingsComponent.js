import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: 27,
    fontWeight: '500',
    marginTop: 50,
    marginBottom: 50,
    color: '#383737',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 15,
    marginBottom: 15,
  },
  headerContent: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 15,
  },
  headerSubtitle: {
    color: '#383737',
  },
  mainContainer: {
    marginBottom: 10,
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 30,
    marginBottom: 10,
  },
});

export default styles;
