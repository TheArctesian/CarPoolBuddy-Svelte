import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBimG9fTopwZVnSodYn0hIOAT-86E3YBY0',
	authDomain: 'carpoolbudy.firebaseapp.com',
	projectId: 'carpoolbudy',
	storageBucket: 'carpoolbudy.appspot.com',
	messagingSenderId: '672967801268',
	appId: '1:672967801268:web:13e9c40352e0ec2da65ae1',
	measurementId: 'G-D17NTQEKRS'
};

console.log('init');

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
