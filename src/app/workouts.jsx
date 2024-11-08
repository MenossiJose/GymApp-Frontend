import React, { useEffect } from 'react';
import {  Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Link, router } from 'expo-router';
import workoutsStyles from '../styles/workoutsStyles';
import NavBar from '../components/NavBar';
import useNavHandlers from '../hooks/useNavHandlers';

export default function Workouts() {

  const { handleProfile, handleDumbbell } = useNavHandlers();

  const handlePress = () => {
    router.replace("/workoutCreation");
  };

  return (
    <View style={workoutsStyles.container}>
      <Text style={workoutsStyles.header}>Treinos</Text>
      <ScrollView contentContainerStyle={workoutsStyles.scrollView}>
        <View style={workoutsStyles.section}>
          <Text style={workoutsStyles.subHeader}>MEUS TREINOS</Text>
          <View>
          </View>
          <TouchableOpacity style={workoutsStyles.button} onPress={handlePress}>
            <Text style={workoutsStyles.buttonText}>INICIAR UM TREINO VAZIO</Text>
          </TouchableOpacity>
        </View>

        
      </ScrollView>

      {/*NAV*/}
      <NavBar
            onProfilePress={handleProfile}
            onDumbbellPress={handleDumbbell}
          />

    </View>
  );
}


