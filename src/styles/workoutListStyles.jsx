import { StyleSheet } from 'react-native';

const workoutListStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1C1E2E',
      paddingHorizontal: 20,
      paddingTop: 50,
    },
    header: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    exerciseItem: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#2D2F3A',
      padding: 15,
      borderRadius: 10,
      marginBottom: 10,
      borderWidth: 1,
    },
    exerciseIcon: {
      width: 32,
      height: 32,
    },
    exerciseDetails: {
      flex: 1,
      marginLeft: 10,
    },
    exerciseText: {
      color: 'white',
      fontSize: 16,
    },
    muscleGroup: {
      color: '#6C6D7A',
      fontSize: 14,
    },
    dropdown: {
      margin: 16,
      height: 50,
      borderBottomColor: 'gray',
    },
    icon: {
      marginRight: 5,
      color: 'white',
    },
    placeholderStyle: {
      fontSize: 16,
      color: 'white',
    },
    selectedTextStyle: {
      fontSize: 16,
      color: 'white',
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });

export default workoutListStyles;