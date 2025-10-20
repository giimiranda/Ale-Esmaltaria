import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AlehLogin() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
   if (id === 'admin' && password === '123456') {
      Alert.alert('Login realizado com sucesso!');
    navigation.replace('Home'); // Redireciona para Home e remove Login da pilha
  } else {
    Alert.alert('Por favor, preencha todos os campos.');
  }
};

  const handleSignUp = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.container}>
          <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
        <Text style={styles.signupButtonText}>Criar Conta</Text>
      </TouchableOpacity>

    <Image
  source={require('./assets/logo3.png')} // Certifique-se que o arquivo existe em ./assets/
  style={styles.image}
  resizeMode="contain"
/>
// ...existing code...
      <Text style={styles.loginText}>Login</Text>
      <Text style={styles.description}>Faça seu login.</Text>
      <TextInput
        style={styles.input}
        placeholder="ID"
        value={id}
        onChangeText={setId}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="SENHA"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({

image: {
  width: 180,
  height: 180,
  marginBottom: 10,
},

    container: {
    flex: 1,
    backgroundColor: '#f1e4e9ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  signupButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
    backgroundColor: 'transparent',
    padding: 8,
  },
  signupButtonText: {
    color: '#ba6877',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ba6877',
  },
  description: {
    fontSize: 14,
    color: '#ba6877',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    borderColor: '#e6a191',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#ba6877',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});