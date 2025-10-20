import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Linha superior de ícones */}
      <View style={styles.row}>
        <ServiceButton label="Nails" icon={require('./assets/nails.png')} onPress={() => navigation.navigate('Nails')} />
        <ServiceButton label="Sobrancelha" icon={require('./assets/sobrancelha.png')} onPress={() => navigation.navigate('Sobrancelha')} />
        <ServiceButton label="Make" icon={require('./assets/make.png')} onPress={() => navigation.navigate('Make')} />
      </View>

      {/* Logo central */}
      <Image
        source={require('./assets/logo4.png')}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Linha inferior de ícones */}
      <View style={styles.row}>
        <ServiceButton label="Massagens" icon={require('./assets/massagens.png')} onPress={() => navigation.navigate('Massagens')} />
        <ServiceButton label="Depilação" icon={require('./assets/depilacao.png')} onPress={() => navigation.navigate('Depilação')} />
        <ServiceButton label="Agenda" icon={require('./assets/agenda.png')} onPress={() => navigation.navigate('Agenda')} />
      </View>

      {/* Ícone extra abaixo */}
      <ServiceButton label="SobreNos" icon={require('./assets/sobre-nos.png')} onPress={() => navigation.navigate('SobreNos')} />
    <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('AlehLogin')}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
      <View style={{ height: 60 }} />

    </ScrollView>

    
  );
}

function ServiceButton({ label, icon, onPress }) {
  return (
    <TouchableOpacity style={styles.service} onPress={onPress}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1e4e9ff', // rosa claro
    alignItems: 'center',
    paddingVertical: 30,
  },
  image: {
    width: 180,
    height: 180,
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
  },
  service: {
    alignItems: 'center',
    width: 90,
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    color: '#ba6877', // rosa queimado
    textAlign: 'center',
  },
  container: {
  backgroundColor: '#f1e4e9ff',
  alignItems: 'center',
  paddingVertical: 30,
  paddingBottom: 80, // espaço extra no final
},
logoutButton: {
  marginTop: 30,
  backgroundColor: '#ba6877',
  paddingVertical: 10,
  paddingHorizontal: 30,
  borderRadius: 20,
},
logoutText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},
});