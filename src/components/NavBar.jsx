import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const NavBar = ({ onProfilePress, onDumbbellPress, style }) => {
  return (
    <View style={[styles.navContainer, style]}>
      <TouchableOpacity onPress={onProfilePress}>
        <Image source={require('../app/img/user_nav.png')} />  
      </TouchableOpacity>
      <TouchableOpacity onPress={onDumbbellPress}>
        <Image source={require('../app/img/dumbell_nav.png')} />  
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    navContainer: {
        backgroundColor: '#E4B306',
        position: 'absolute',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        bottom: 0,
        width: '100%',
        height: 44,
        paddingTop: 7,
      },
});

export default NavBar;
