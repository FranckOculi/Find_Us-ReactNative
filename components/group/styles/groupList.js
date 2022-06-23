import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  addIcon: {
    alignSelf: 'center',
    marginTop: 40,
  },
  addText: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#1976D2',
    fontWeight: '700',
    height: 50,
  },
  alternative: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alternativeTitle: {
    marginTop: -80,
    fontSize: 20,
    fontWeight: '700',
    color: '#707070',
  },
  alternativeButton: {
    marginTop: 60,
    backgroundColor: '#1976d2',
    borderColor: '#1976d2',
    marginVertical: 5,
    borderColor: '#1976d2',
    borderRadius: 6,
    padding: 15,
  },
  alternativeButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default styles;
