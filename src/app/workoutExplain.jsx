import React, { useState } from 'react';
import { View, Text, workoutExplainStylesheet, TouchableOpacity, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';
import { router } from 'expo-router';
import workoutExplainStyles from '../styles/workoutExplainStyles';

export default function App() {
  const [reps, setReps] = useState(['REPETIÇÕES', '10', '10']);
  const [weights, setWeights] = useState(['PESO', '45KG', '45KG']);
  
  const handleBack = () => {
    router.replace("/workouts");
};

  return (
    <View style={workoutExplainStyles.container}>
      <TouchableOpacity style={workoutExplainStyles.backButton} onPress={handleBack}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <Image
        source={{ uri: 'https://www.example.com/lat-pull-down.png' }} // Substitute with your image URL
        style={workoutExplainStyles.exerciseImage}
      />

      <Text style={workoutExplainStyles.exerciseTitle}>Lat Pull Down (Máquina)</Text>

      {[1, 2, 3].map((series, index) => (
        <View key={index} style={workoutExplainStyles.seriesContainer}>
          <Text style={workoutExplainStyles.seriesTitle}>{`${series}° Série`}</Text>
          <View style={workoutExplainStyles.pickerContainer}>
            <Picker
              selectedValue={reps[index]}
              style={workoutExplainStyles.picker}
              onValueChange={(itemValue) => {
                const newReps = [...reps];
                newReps[index] = itemValue;
                setReps(newReps);
              }}
            >
              <Picker.Item label="REPETIÇÕES" value="REPETIÇÕES" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="12" value="12" />
              <Picker.Item label="15" value="15" />
            </Picker>
            <Picker
              selectedValue={weights[index]}
              style={workoutExplainStyles.picker}
              onValueChange={(itemValue) => {
                const newWeights = [...weights];
                newWeights[index] = itemValue;
                setWeights(newWeights);
              }}
            >
              <Picker.Item label="PESO" value="PESO" />
              <Picker.Item label="40KG" value="40KG" />
              <Picker.Item label="45KG" value="45KG" />
              <Picker.Item label="50KG" value="50KG" />
            </Picker>
          </View>
        </View>
      ))}

      <TouchableOpacity style={workoutExplainStyles.addButton}>
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

