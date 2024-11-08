import { StyleSheet } from 'react-native';

const homeStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D9D9D9',
    },
    header: {
      backgroundColor: '#282C30',
      height: '20%',
      paddingTop: 40,
      alignItems: 'center',
      position: 'relative',
    },
    userName: {
      //fontFamily: 'Righteous-Regular',
      fontSize: 32,
      fontWeight: 'bold',
      color: '#E4B306',
    },
    settingsIcon: {
      position: 'absolute',
      top: 15,
      right: 25,
    },
    userContainer: {
      justifyContent: 'space-evenly',
      backgroundColor: '#282C30',
      alignItems: 'center',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      paddingBottom: 130,
    },
    cardContainer: {
      width: 309,
      marginLeft: 25,
      marginRight: 25,
      borderBottomWidth: 0.78,
      borderColor: 'white',
      paddingVertical: 10,
    },
    cardStats: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    textStats: {
      letterSpacing: 1,
      fontWeight: 'regular',
      fontSize: 32,
      color: 'white',
    },
    imcSection: {
      backgroundColor: '#D9D9D9',
      flex: 1,
      alignItems: 'center',
    },
    imcText: {
      paddingTop: 20,
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    imcResult: {
      fontSize: 38,
      color: '#4A90E2',
      paddingVertical: 45,
    },
    loadingText: {
      letterSpacing: 1,
      marginTop: 10,
      fontSize: 26,
      color: 'black',
    },
});

export default homeStyles;