import { StyleSheet } from 'react-native';

const workoutsStyles = StyleSheet.create({
    container: {
      fontFamily: 'Roboto',
      flex: 1,
      backgroundColor: '#282C30',
    },
    scrollView: {
      flexGrow: 1,
      padding: 20,
      borderTopWidth: 1.5,
      borderColor: 'white',
    },
    header: {
      fontWeight: 'bold',
      fontSize: 24,
      color: '#fff',
      textAlign: 'center',
      marginVertical: 20,
    },
    section: {
      marginBottom: 20,
    },
    subHeader: {
      fontSize: 10,
      color: '#fff',
      marginBottom: 10,
    },
    workoutBox: {
      backgroundColor: '#2B2F3A',
      padding: 15,
      borderRadius: 10,
      marginBottom: 15,
      borderColor: 'white',
      borderWidth: 1.5,
    },
    workoutTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 10,
    },
    workoutText: {
      fontSize: 14,
      color: '#fff',
      marginBottom: 5,
    },
    button: {
      backgroundColor: '#E4B306',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      fontWeight: 'bold',
      color: '#000',
      fontSize: 16,
    },
  });

  export default workoutsStyles;