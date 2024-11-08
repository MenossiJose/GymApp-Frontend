import React, { useState, useEffect } from 'react';
import { View, Text, workoutListStylesheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import  fetchExercisesByBodypart  from '../../api/exerciseDB';
import { Dropdown } from 'react-native-element-dropdown';
import workoutListStyles from '../styles/workoutListStyles';

const bodyPartMap = {
  '1': 'back',
  '2': 'legs',
  '3': 'chest',
  '4': 'shoulders',
  '5': 'biceps',
};

const data = [
  { label: 'Costas', value: '1' },
  { label: 'Pernas', value: '2' },
  { label: 'Peito', value: '3' },
  { label: 'Ombros', value: '4' },
  { label: 'Bíceps', value: '5' },
];

export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [exercises, setExercises] = useState([]);
  const router = useRouter();
  const item = useLocalSearchParams();
  const [value, setValue] = useState(null);

  const getExercises = async(bodyPart) => {
    let data = await fetchExercisesByBodypart(bodyPart);
    setExercises(data);
    console.log('got data', data);
  }

  const handleBack = () => {
    router.replace("/workoutCreation");
  };

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#3A3D54' : '#2D2F3A';
    const borderColor = item.id === selectedId ? 'white' : '#2D2F3A';
    const icon = item.id === selectedId ? <Ionicons name="checkmark" size={24} color="white" /> : null;

    return (
      <TouchableOpacity
        onPress={() => setSelectedId(item.id)}
        style={[workoutListStyles.exerciseItem, { backgroundColor, borderColor }]}
      >
        <Image source={{uri: item.gifUrl}} style={workoutListStyles.exerciseIcon} />
        <View style={workoutListStyles.exerciseDetails}>
          <Text style={workoutListStyles.exerciseText}>{item.name}</Text>
          <Text style={workoutListStyles.muscleGroup}>{item.target}</Text>
        </View>
        {icon}
      </TouchableOpacity>
    );
  };

  return (
    <View style={workoutListStyles.container}>
      <TouchableOpacity onPress={handleBack}>
        <AntDesign name="arrowleft" size={30} color="white" />
      </TouchableOpacity>
      <Text style={workoutListStyles.header}>Exercícios</Text>

      <Dropdown
        style={workoutListStyles.dropdown}
        placeholderStyle={workoutListStyles.placeholderStyle}
        selectedTextStyle={workoutListStyles.selectedTextStyle}
        inputSearchStyle={workoutListStyles.inputSearchStyle}
        iconStyle={workoutListStyles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
          getExercises(bodyPartMap[item.value]); // Fetch exercises based on the selected body part
        }}
        renderLeftIcon={() => (
          <AntDesign style={workoutListStyles.icon} color="black" name="Safety" size={20} />
        )}
      />
      
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        extraData={selectedId}
      />
    </View>
  );
}

