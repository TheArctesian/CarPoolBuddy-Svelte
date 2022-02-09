import { db } from './firebaseSetup';
import { collection, doc, addDoc, setDoc, updateDoc } from "firebase/firestore"; 
import type { User } from 'firebase/auth';
import type { vehicle } from '../types/vehicle';
export async function addUserDB(user: User) {
	try {
		const docRef = await addDoc(collection(db, 'users'), {
			displayName: user.displayName,
			email: user.email,
			photoURL: user.photoURL,
			uid: user.uid
		});
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
}

export async function addVehicleDB(vehicle: vehicle) {
	try {
		const docRef = await addDoc(collection(db, 'vehicles'), {
			owner: vehicle.owner,
			model: vehicle.model,
			riders: vehicle.riders,
			capacity: vehicle.capacity,
			leaveTime: vehicle.leaveTime,
			lat: vehicle.lat,
			lng: vehicle.lng,
		});
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
}

export async function addVehicleFormDB(owner: string,
	model: string,
	riders: string[],
	capacity: number,
	isElectric: boolean,
	lat: string,
	lng: string,
	leaveTime: string) {
	try {
		const docRef = await addDoc(collection(db, 'vehicles'), {
			owner: owner,
			model: model,
			riders: riders,
			capacity: capacity,
			isElectric: isElectric,
			lat: lat,
			lng: lng,
			leaveTime: leaveTime,
		});
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
}

export async function updateRiders(id: string, capacity, rider: string[]) {
	try {
		const docRef = doc(db, 'vehicles', id);
		await updateDoc(docRef, {
			"riders" : rider,
			"capacity" : capacity
		});
	} catch (e) {
		console.error('Error adding document: ', e);
	}
}