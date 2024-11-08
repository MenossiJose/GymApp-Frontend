import React, { useState,  useEffect  } from 'react';
import {Image, Pressable, Text,  TextInput, View, Alert} from 'react-native';
import {router } from 'expo-router';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import indexStyles from '../styles/indexStyles';


export default function Login() {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function getData() { 
    const data = await AsyncStorage.getItem('isLoggedIn');
    setIsLoggedIn(data);
  }

  useEffect(() => {
    getData();
  });

  function handleSubmit() {
    console.log(email, password);
    const userData = {
      email,
      password,
    };
    axios.post('http://192.168.3.4:3000/login-user', userData).
    then((res) => {console.log(res.data);
      if (res.data.status == 'ok') {
        AsyncStorage.setItem('token', res.data.data);
        AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
        router.replace("/home");
      } else {
        Alert.alert('Email/Senha Inválido');
        console.log("error");
      }
  
    })
  }

  if(isLoggedIn){
    return(
      router.replace("/home")
    )
  }

  else{
    return(
      <View style={indexStyles.container}>
      <View style={indexStyles.imageContainer}>
        <Image style={indexStyles.image} source={require('./img/branco.png')} />
      </View>
      <View style={indexStyles.containerFields}>
        <TextInput style={indexStyles.inputFields}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput style={indexStyles.inputFields}
          placeholder="Senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        /> 
      </View>
      <View style={indexStyles.buttonContainer}>
        <Pressable style={indexStyles.buttons} title="Login" onPress={() => handleSubmit()}>
          <Text>Login</Text>
        </Pressable>
        <Text style={indexStyles.text}>Não tem uma conta?</Text>
        <Pressable style={indexStyles.buttons} title="Sign Up" onPress={() => router.replace("/signUp")}>
          <Text >Registrar</Text>
        </Pressable>
      </View>
    </View>
    )
  }
}


