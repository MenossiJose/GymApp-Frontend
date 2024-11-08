import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const exercises = [
    { id: '1', name: 'Lat Pull Down (Máquina)', sets: '3 x', muscleGroup: 'Costas' }
];

export default function ExerciseList() {

    return(
        <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.exerciseItem}>
            <Ionicons name="barbell-outline" size={32} color="white" />
            <View style={styles.exerciseDetails}>
              <Text style={styles.exerciseText}>{item.sets} {item.name}</Text>
              <Text style={styles.muscleGroup}>{item.muscleGroup}</Text>
            </View>
          </View>
        )}
      />
    );


};

const styles = StyleSheet.create({
    exerciseItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2D2F3A',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
      },
      exerciseDetails: {
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
});
