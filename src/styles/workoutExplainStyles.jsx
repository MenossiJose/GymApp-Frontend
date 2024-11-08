import { StyleSheet } from 'react-native';

const workoutExplainStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1C1E2E',
      paddingHorizontal: 20,
      paddingTop: 50,
    },
    backButton: {
      position: 'absolute',
      top: 40,
      left: 20,
    },
    exerciseImage: {
      width: '100%',
      height: 200,
      resizeMode: 'contain',
    },
    exerciseTitle: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 20,
    },
    seriesContainer: {
      marginBottom: 20,
    },
    seriesTitle: {
      color: 'white',
      fontSize: 18,
      marginBottom: 10,
    },
    pickerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#2D2F3A',
      borderRadius: 10,
      padding: 10,
    },
    picker: {
      flex: 1,
      color: 'white',
      marginRight: 10,
      backgroundColor: '#3A3D54',
    },
    addButton: {
      backgroundColor: '#353746',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      width: 50,
      height: 50,
    },
  });

export default workoutExplainStyles;