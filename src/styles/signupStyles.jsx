import { StyleSheet } from 'react-native';

const signUpStyles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#282C30',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontFamily: 'Roboto',
      color: 'white',
      fontSize: 16,
    },
    imageContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '5%',
      marginBottom: '10%',
      marginLeft: 0,
      marginRight: 0,
      width: 289,
      height: 223,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
      marginLeft: 0,
      marginRight: 0,
    },
    containerFields: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '20%',
      marginRight: '20%',
      marginBottom: '5%',
    },
    inputFields: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      textAlign: 'center',
      width: 250,
      height: 35,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 0,
      marginRight: 0,
      borderRadius: 15,
      padding: 10,
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center',
    },
    buttons: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 80,
      height: 30,
      backgroundColor: '#E4B306',
      borderRadius: 5,
      padding: 5,
      margin: 15,
    },
  });

  export default signUpStyles;