import { StyleSheet } from 'react-native';

const settingsStyles = StyleSheet.create({
    container: {
        fontFamily: 'Roboto',
        flex: 1,
        backgroundColor: '#282C30',
        justifyContent: 'center',
        alignItems: 'center',
      },
      settingsIcon: {
        position: 'absolute',
        top: 15,
        right: 25,
      },
      userData: {
        width: '100%',
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        marginHorizontal: '10%',
        
      },
      inputContainer: {
        borderWidth: 1,
        marginVertical: '5%',
        marginHorizontal: '4%',
      },
      buttonContainer: {
        backgroundColor: '#E4B306',
        alignItems: 'center',
        width: '30%',
        marginVertical: '10%',
        //justifyContent: 'center',
      },
      textButton: {
        fontSize: 20,
        fontWeight: 'bold',
      },
});

export default settingsStyles;