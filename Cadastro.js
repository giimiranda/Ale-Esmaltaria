import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CadastroScreen() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  const handleSignUp = () => {
    if (nome && cpf && endereco && telefone && senha) {
      Alert.alert('Cadastro realizado com sucesso!');
    } else {
      Alert.alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
    

      {/* Logo ilustrativa */}
      <Image
        source={require('./assets/logo3.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Crie sua conta</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.subtitle}>
          Já tem uma conta? <Text style={styles.link}>Clique aqui.</Text>
        </Text>
      </TouchableOpacity>

      {/* Campos de entrada */}
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      {/* Botão de cadastro */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 30,
    left: 10,
    zIndex: 2,
    padding: 8,
    backgroundColor: 'transparent',
  },
  backButtonText: {
    color: '#d63384',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: '#f1e4e9ff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 10,
    marginTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ba6877',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 25,
    textAlign: 'center',
  },
  link: {
    color: '#ba6877',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    borderColor: '#e6a191',
    borderWidth: 1,
    fontSize: 16,
  },
  button: {
    borderColor: '#ba6877',
    borderWidth: 2,
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ba6877',
    fontSize: 18,
    fontWeight: 'bold',
  },
});