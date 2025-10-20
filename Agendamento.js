import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { db } from './firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

export default function Agendamento({ route }) {
  const { pedidoId } = route.params;
  const [data, setData] = useState(new Date());
  const [mostrarPicker, setMostrarPicker] = useState(false);

  const agendar = async () => {
    try {
      const pedidoRef = doc(db, 'pedidos', pedidoId);
      await updateDoc(pedidoRef, { agendamento: data });
      Alert.alert('Agendamento confirmado!', `Data: ${data.toLocaleString()}`);
    } catch (error) {
      Alert.alert('Erro ao agendar', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Escolha data e hora</Text>
      <Button title="Selecionar" onPress={() => setMostrarPicker(true)} />
      {mostrarPicker && (
        <DateTimePicker
          value={data}
          mode="datetime"
          display="default"
          onChange={(e, selectedDate) => {
            setMostrarPicker(false);
            if (selectedDate) setData(selectedDate);
          }}
        />
      )}
      <Text style={styles.data}>{data.toLocaleString()}</Text>
      <Button title="Confirmar Agendamento" onPress={agendar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  data: { marginVertical: 20, fontSize: 18 },
});