import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getFirestore,
  initializeFirestore,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'SUA_API_KEY',
  authDomain: 'SEU_DOMINIO.firebaseapp.com',
  projectId: 'SEU_PROJECT_ID',
  storageBucket: 'SEU_BUCKET.appspot.com',
  messagingSenderId: 'SEU_SENDER_ID',
  appId: 'SEU_APP_ID',
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// ✅ Protege contra múltiplas inicializações
let db;
try {
  db = getFirestore(app); // tenta usar instância já criada
} catch (e) {
  db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
    useFetchStreams: false,
  });
}

export { db };