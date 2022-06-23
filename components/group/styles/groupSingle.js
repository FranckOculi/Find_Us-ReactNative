import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 5,
    width: '100%',
    height: '98%',
  },
  //Header------------
  header: {
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
  //Main---------------
  main: {
    marginTop: 30,
    backgroundColor: 'white',
    height: '78.2%',
    elevation: 8,
    marginBottom: 50,
    paddingHorizontal: 20,
    paddingVertical: 20,
    overflow: 'scroll',
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 2,
  },
  cardLeft: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
  },
  cardHeaderContent: {
    marginLeft: 15,
  },
  cardHeaderTitle: {
    fontSize: 17,
  },
  cardHeaderSubtitle: {
    color: '#7c7c7c',
  },
  cardHeaderIcon: {
    alignSelf: 'center',
    marginLeft: 105,
  },

  //Menu------------------
  menu: {
    position: 'absolute',
    top: '10%',
    right: '5%',
    left: '17%',
  },
  menuItemsHeader: {
    marginTop: 2,
  },
  menuItem: {
    flexDirection: 'row',
    marginleft: 10,
  },
  menuContent: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  menuTitle: {
    fontSize: 17,
  },
  menuItemsMain: {
    marginTop: 10,
    marginLeft: 5,
  },
  menuItemsMain1: {
    marginTop: 10,
    marginLeft: 8,
  },

  //Description-------------
  description: {
    marginTop: 50,
  },
  descriptionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descriptionTitle: {
    fontSize: 20,
    color: '#7c7c7c',
  },
  descriptionExpand: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptionInput: {
    backgroundColor: 'white',
    height: 40,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 18,
    color: '#878787',
  },
  descriptionText: {
    textAlign: 'justify',
    paddingRight: 15,
    fontSize: 18,
    color: '#878787',
  },
  //Member---------------------
  members: {
    marginTop: 30,
  },
  membersHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  membersExpand: {
    marginTop: 5,
  },

  member: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  memberLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  memberText: {
    marginLeft: 15,
    fontSize: 17,
    color: '#878787',
  },
  memberRight: {
    color: '#878787',
  },
  //Bottom
  bottom: {
    marginTop: 20,
    width: 85,
    height: 80,
    alignSelf: 'center',
  },
  bottomImage: {
    alignSelf: 'center',
    width: 35,
    height: 35,
  },
  bottomText: {
    alignSelf: 'center',
    color: '#878787',
  },
  expandLess: {
    transform: [{ rotate: '180deg' }],
  },
});

export default styles;
