import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyAA55yv0aaZWr5bhZJVmeNAXwDDxtbj1fg',
	authDomain: 'stridesconnect-5829e.firebaseapp.com',
	projectId: 'stridesconnect-5829e',
	storageBucket: 'stridesconnect-5829e.appspot.com',
	messagingSenderId: '380377494234',
	appId: '1:380377494234:web:8ebebc1581f92c87922be3',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
