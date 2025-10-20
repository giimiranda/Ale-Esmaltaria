import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const servicos = [
  { id: '1', nome: 'Postiça Realista + Esmaltação em Gel', preco: 60.00 },
  { id: '2', nome: 'Posiça Realista + Pés', preco: 100.00 },
  { id: '3', nome: 'Remoção de Alongamento em Gel', preco: 40.00 },
  { id: '4', nome: 'Remoção de Esmaltação em Gel', preco: 20.00 },
  {id: '5', nome: 'Remoção de Unhas Acrílicas', preco: 50.00 },
];

export default function NailDesigner() {
  const [carrinho, setCarrinho] = useState([]);
  const [total, setTotal] = useState(0);

  const adicionarAoCarrinho = (servico) => {
    setCarrinho([...carrinho, servico]);
    setTotal(total + servico.preco);
  };

  const removerDoCarrinho = (index) => {
    const itemRemovido = carrinho[index];
    const novoCarrinho = carrinho.filter((_, i) => i !== index);
    setCarrinho(novoCarrinho);
    setTotal(total - itemRemovido.preco);
  };

  const navigation = useNavigation();

const finalizarPedido = async () => {
  if (carrinho.length === 0) {
    Alert.alert('Carrinho vazio', 'Selecione pelo menos um serviço.');
    return;
  }

  try {
    const docRef = await addDoc(collection(db, 'pedidos'), {
      itens: carrinho,
      total,
      criadoEm: new Date(),
    });

    Alert.alert('Pedido salvo!', `ID: ${docRef.id}`);
    setCarrinho([]);
    setTotal(0);

    navigation.navigate('Agendamento', { pedidoId: docRef.id });

  } catch (error) {
    Alert.alert('Erro ao salvar', error.message);
  }

  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => adicionarAoCarrinho(item)}>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.preco}>R$ {item.preco}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Serviços de Designer de Unhas</Text>
      <FlatList
        data={servicos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.carrinho}>
        <Text style={styles.total}>Total: R$ {total}</Text>
        <Text style={styles.itens}>Itens selecionados:</Text>
        {carrinho.map((item, index) => (
          <View key={index} style={styles.itemCarrinho}>
            <Text>• {item.nome}</Text>
            <TouchableOpacity onPress={() => removerDoCarrinho(index)}>
              <Text style={styles.remover}>Remover</Text>
            </TouchableOpacity>
          </View>
        ))}
        <TouchableOpacity style={styles.botaoFinalizar} onPress={finalizarPedido}>
          <Text style={styles.textoBotao}>Finalizar Pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#f1e4e9ff', flex: 1 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 10,  color: '#ba6877'},
  item: { padding: 15, backgroundColor: '#fff', marginVertical: 5, borderRadius: 8 },
  nome: { fontSize: 18, color: '#ba6877' },
  preco: { fontSize: 16, color: '#e6a191' },
  carrinho: { marginTop: 20, padding: 10, backgroundColor: '#ffeef0', borderRadius: 8 },
  total: { fontSize: 20, fontWeight: 'bold', color: '#ba6877' },
  itens: { marginTop: 10, fontSize: 16, color: '#ba6877' },
  itemCarrinho: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 },
  remover: { color: 'red', fontSize: 14 },
  botaoFinalizar: {
    marginTop: 15,
    backgroundColor: '#e6a191',
    padding: 10,
    borderRadius: 8,
  },
  textoBotao: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
});