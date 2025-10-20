import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { db } from './firebaseConfig';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

export default function AgendaCliente() {
  const [horarios, setHorarios] = useState([]);

  useEffect(() => {
    buscarHorarios();
  }, []);

  const buscarHorarios = async () => {
    const querySnapshot = await getDocs(collection(db, 'agenda'));
    const lista = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    setHorarios(lista.filter(h => h.disponivel));
  };

  const agendarHorario = async (id) => {
    try {
      await updateDoc(doc(db, 'agenda', id), { disponivel: false });
      Alert.alert('Agendamento confirmado!');
      buscarHorarios(); // Atualiza a lista
    } catch (error) {
      Alert.alert('Erro ao agendar', error.message);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => agendarHorario(item.id)}>
      <Text style={styles.texto}>{item.data} - {item.horario}</Text>
      <Text style={styles.botao}>Agendar</Text>
    </TouchableOpacity>
  );

  return (

    
    <View style={styles.container}>
      <Text style={styles.titulo}>Horários Disponíveis</Text>
      
      <FlatList
        data={horarios}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff0f5' },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#ba6877' },
  card: {
    backgroundColor: '#ffe4e1',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  texto: { fontSize: 16, marginBottom: 5 },
  botao: {
    backgroundColor: '#f08080',
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
    fontWeight: 'bold',
  },
});