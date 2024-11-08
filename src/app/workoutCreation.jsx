import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import ExerciseList from '../components/ExerciseList';
import workoutCreationStyles from '../styles/workoutCreationStyles';

const handleBack = () => {
  router.replace("/workouts");
};

const handleAddButton = () => {
  router.replace("/workoutList");
};

const handleEnd = () => {
  router.replace("/workoutExplain");
};

export default function App() {
  const [workout, setWorkout] = useState('');
  return (
    <View style={workoutCreationStyles.container}>
      <TouchableOpacity onPress={handleBack}>
        <AntDesign name="arrowleft" size={30} color="white" />
      </TouchableOpacity>
      <TextInput
        style={workoutCreationStyles.header}
        placeholder="INSERIR TREINO"
        placeholderTextColor="white"
        value={workout}
        onChangeText={(text) => setWorkout(text)}
      />
      <ExerciseList />
      <TouchableOpacity style={workoutCreationStyles.addButton} onPress={handleAddButton}>
        <Ionicons name="add" size={24} color="white" />
        <Text style={workoutCreationStyles.addButtonText}>Adicionar Exercício</Text>
      </TouchableOpacity>

      <TouchableOpacity style={workoutCreationStyles.finalizeButton} onPress={handleEnd}>
        <Text style={workoutCreationStyles.finalizeButtonText}>FINALIZAR</Text>
      </TouchableOpacity>
    </View>
  );
}

