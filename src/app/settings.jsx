import React, { useState} from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, Alert, TextInput } from 'react-native';
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavBar from '../components/NavBar';
import useNavHandlers from '../hooks/useNavHandlers';
import settingsStyles from '../styles/settingsStyles';

export default function Settings() {
    const [text, onChangeText] = React.useState('Useless Text');
    const { handleProfile, handleDumbbell } = useNavHandlers();


    //Preciso trocar
    function handlePress() {
        console.log(email, age, weight, height, position, "O que vai ser adicionado");

        const userData = {
            email,
            age,
            weight,
            height,
            position,
        };

        axios.post('http://192.168.3.4:3000/update-profile', userData).
            then((res) => {
                console.log(res.data, "aqui e o perfil no update");
                if (res.data.status == 'ok') {
                    Alert.alert('Profile updated Successfully!!');
                } else {
                    Alert.alert(JSON.stringify(res.data));
                }

            })

    };

    //Função para deslogar
    const handleLogout = async () => {
        Alert.alert(
            "Logout",
            "You have been logged out!",
            [
                {
                    text: "OK",
                    onPress: async () => {
                        await AsyncStorage.clear();
                        router.replace("/")
                    }
                }
            ]
        );
    };

    return (
        <View style={settingsStyles.container}>

            {/*LOGOUT*/}
            <TouchableOpacity style={settingsStyles.settingsIcon} onPress={handleLogout}>
                <Ionicons name="power" size={32} color="white" />
            </TouchableOpacity>

            {/*USERINFO*/}
            <View style={settingsStyles.userData}>

                {/*NOME*/}
                <View style={settingsStyles.inputContainer}>
                    <Text>Nome</Text>
                    <TextInput
                    onChangeText={onChangeText}
                    value={text}></TextInput>
                </View>

                {/*IDADE*/}
                <View style={settingsStyles.inputContainer}>
                    <Text>Idade</Text>
                    <TextInput></TextInput>
                </View>

                <View style={settingsStyles.inputContainer}>
                {/*PESO*/}
                    <Text>Peso</Text>
                    <TextInput></TextInput>
                </View>
                
                <View style={settingsStyles.inputContainer}>
                {/*ALTURA*/}
                    <Text>Altura</Text>
                    <TextInput></TextInput>
                </View>

            </View>

            {/*SAVE BUTTON*/}
            <View style={settingsStyles.buttonContainer}>
                <TouchableOpacity>
                    <Text style={settingsStyles.textButton}>Salvar</Text>
                </TouchableOpacity>
            </View>

            {/*NAV*/}
            <NavBar
                onProfilePress={handleProfile}
                onDumbbellPress={handleDumbbell}
            />
        </View>

    );
}