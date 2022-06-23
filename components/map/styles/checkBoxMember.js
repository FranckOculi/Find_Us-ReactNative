import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  //Group----------------------------
  group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  groupLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  groupTitle: {
    marginLeft: 15,
    fontSize: 17,
  },
  groupRight: {
    alignSelf: 'center',
  },
  //Member----------------------------
  member: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 58,
    marginBottom: -5,
  },
  memberLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  memberText: {
    marginLeft: 15,
  },
});

export default styles;
