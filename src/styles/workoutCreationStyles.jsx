import { StyleSheet } from 'react-native';

const workoutCreationStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2B2F3A',
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    header: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    addButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#353746',
      padding: 15,
      borderRadius: 10,
      marginBottom: 20,
      justifyContent: 'center',
    },
    addButtonText: {
      color: 'white',
      marginLeft: 10,
    },
    finalizeButton: {
      backgroundColor: '#1869B2',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    finalizeButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

  export default workoutCreationStyles;