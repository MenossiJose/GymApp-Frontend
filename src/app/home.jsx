import { useEffect, useState } from 'react';
import { Image, Text, View, Alert, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import homeStyles from '../styles/homeStyles';
import NavBar from '../components/NavBar';
import useNavHandlers from '../hooks/useNavHandlers';

export default function Home() {

  const [email, setEmail] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const { handleProfile, handleDumbbell } = useNavHandlers();
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(true); // Para simular o carregamento do IMC

  //Função assíncrona para coleta de dados
  const getData = async () => {
    //Recebe o token do Usuário
    const token = await AsyncStorage.getItem('token');
    console.log(token);

    //Verifica e atualiza a tela com o token
    axios
      .post('http://192.168.3.4:3000/userdata', { token: token })
      .then((res) => {
        if (res.data.status === 'ok') {
          const userData = res.data.data;
          setUsername(userData.name.toUpperCase());
          setEmail(userData.email);
          setWeight(userData.weight);
          setHeight(userData.height);
          setAge(userData.age);
        } else {
          Alert.alert('Error fetching user data');
        }
        console.log(res.data);
      })
      .catch((error) => {
        Alert.alert('An error occurred', error.message);
      });
  };

  // Simulando carregamento de IMC após 2 segundos
  setTimeout(() => setLoading(false), 2000);

  //Após receber as informações atualiza
  useEffect(() => {
    getData();
  }, []);


  function handleSettingsPress(){
    router.replace('/settings')
  }


  return (
    <View style={homeStyles.container}>

      {/*USUÁRIO*/}
      <View style={homeStyles.header}>
        <Text style={homeStyles.userName}>{username ? username : 'Carregando...'}</Text>
        <TouchableOpacity style={homeStyles.settingsIcon} onPress={handleSettingsPress}>
          <Ionicons name="settings-sharp" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={homeStyles.userContainer}>
        {/*PESO*/}
        <TouchableOpacity style={homeStyles.cardContainer}>
          <View style={homeStyles.cardStats}>
            <Text style={homeStyles.textStats} >PESO</Text>
          </View>
        </TouchableOpacity>
        {/*ALTURA*/}
        <TouchableOpacity style={homeStyles.cardContainer}>
          <View style={homeStyles.cardStats}>
            <Text style={homeStyles.textStats}>ALTURA</Text>
          </View>
        </TouchableOpacity>
        {/*IDADE*/}
        <TouchableOpacity style={homeStyles.cardContainer}>
          <View style={homeStyles.cardStats}>
            <Text style={homeStyles.textStats}>IDADE</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Seção de IMC */}
      <View style={homeStyles.imcSection}>
        <Text style={homeStyles.imcText}>IMC</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#4A90E2" />
        ) : (
          <Text style={homeStyles.imcResult}>24.5</Text>
        )}
        <Text style={homeStyles.loadingText}>{loading ? 'CARREGANDO' : 'RESULTADO'}</Text>
      </View>

      {/*NAV*/}
      <NavBar
        onProfilePress={handleProfile}
        onDumbbellPress={handleDumbbell}
      />
    </View>
  );
}

