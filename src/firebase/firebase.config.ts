import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyALX4aPm0rN334qE9EnjSBEi_oi3CApj3Y',
  authDomain: 'ic-bank-89991.firebaseapp.com',
  projectId: 'ic-bank-89991',
  storageBucket: 'ic-bank-89991.appspot.com',
  messagingSenderId: '724935404730',
  appId: '1:724935404730:web:f171ad6665759063e02683',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
