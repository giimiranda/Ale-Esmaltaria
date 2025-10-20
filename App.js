import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { db } from './firebaseConfig';

import AlehLogin from './AlehLogin';
import Cadastro from './Cadastro'; // Crie esse arquivo, mesmo que vazio
import HomeScreen from './Home';
import Nails from './Nails'; 
import Sobrancelha from './Sobrancelha'; 
import Make from './Make';
import Massagens from './Massagens';
import SobreNos from './SobreNos';
import Depilação from './Depilação'; 
import Agenda from './Agenda';
import Alongamento from './Alongamento';
import Manutenção from './Manutenção';
import ManicurePedicure from './ManicurePedicure';
import NailDesigner from './NailDesigner';
import Agendamento from './Agendamento';
import DesignerDeSobrancelhas from './DesignerDeSobrancelhas';
import TiposDeDesign from './TiposDeDesign';
import NossasClientes from './NossasClientes';
import GaleriaDeMakes from './GaleriaDeMakes';
import Cilios from './Cilios';
import TiposDeMaquiagem from './TiposDeMaquiagem';
import TiposDeMassagem from './TiposDeMassagem';
import TiposDeDepilacao from './TiposDeDepilacao';
import GaleriaDeDepilacao from './GaleriaDeDepilacao';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="AlehLogin" component={AlehLogin} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Nails" component={Nails} />
        <Stack.Screen name="Sobrancelha" component={Sobrancelha} />
        <Stack.Screen name="Make" component={Make} />
        <Stack.Screen name="Massagens" component={Massagens} />
        <Stack.Screen name="SobreNos" component={SobreNos} />
        <Stack.Screen name="Depilação" component={Depilação} />
        <Stack.Screen name="Agenda" component={Agenda} />
        <Stack.Screen name="Alongamento" component={Alongamento} />
        <Stack.Screen name="Manutenção" component={Manutenção} />
        <Stack.Screen name="ManicurePedicure" component={ManicurePedicure} />
        <Stack.Screen name="NailDesigner" component={NailDesigner} /> 
        <Stack.Screen name="Agendamento" component={Agendamento} />
        <Stack.Screen name="Designer de Sobrancelhas" component={DesignerDeSobrancelhas} />
        <Stack.Screen name="Tipos de Design" component={TiposDeDesign} />
        <Stack.Screen name="Nossas Clientes" component={NossasClientes} />
        <Stack.Screen name="Galeria de Makes" component={GaleriaDeMakes} />
        <Stack.Screen name="Cilios" component={Cilios} />
        <Stack.Screen name="Tipos de Maquiagem" component={TiposDeMaquiagem} />
        <Stack.Screen name="Tipos de Massagens" component={TiposDeMassagem} />
        <Stack.Screen name="Tipos de Depilação" component={TiposDeDepilacao} />
        <Stack.Screen name="Galeria de Depilação" component={GaleriaDeDepilacao} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}