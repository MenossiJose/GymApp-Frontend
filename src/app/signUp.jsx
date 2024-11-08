import React, { useState } from 'react';
import { Image, signUpStylesheet, Button, Pressable, Text, TextInput, View, Alert } from 'react-native';
import { router, Link } from 'expo-router';
import axios from 'axios';
import signUpStyles from '../styles/signupStyles'

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  //Validação de erros em tempo real
  const validate = () => {
    const newErrors = {};

    if (!name) {
      newErrors.name = 'Insira um nome';
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Entre com um email válido';
    }

    if (!password || password.length < 6) {
      newErrors.password = 'Senha precisa ter 6 carácteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const userData = {
      name,
      email,
      password,
    };

    axios.
      post('http://192.168.3.4:3000/signup', userData)
      .then((res) => {
        console.log(res.data);
        if (res.data.status == 'ok') {
          router.replace("/");
        } else {
          Alert.alert('Email já existe');
        }
      })
  };

  return (
    <View style={signUpStyles.container}>

      {/*Imagem*/}
      <View style={signUpStyles.imageContainer}>
        <Image style={signUpStyles.image} source={require('./img/branco.png')} />
      </View>

      <Text style={signUpStyles.text}>Registro</Text>

      {/*Registro*/}
      <View style={signUpStyles.containerFields}>

        {/*Nome*/}
        {errors.name && <Text style={{ color: 'red' }}>{errors.name}</Text>}
        <TextInput style={signUpStyles.inputFields}
          placeholder="Nome de Usuário"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        {/*Email*/}
        {errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
        <TextInput style={signUpStyles.inputFields}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        {/*Senha*/}
        {errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
        <TextInput style={signUpStyles.inputFields}
          placeholder="Senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </View>

      {/*Botões*/}
      <View style={signUpStyles.buttonContainer}>
        <Pressable style={signUpStyles.buttons} title="Sign Up" onPress={handleSubmit}>
          <Text >Registrar</Text>
        </Pressable>
      </View>
      <Link style={signUpStyles.text} href={"/"}>Voltar</Link>
    </View>
  );
}


