import { db } from './firebaseSetup';
import { collection, addDoc } from 'firebase/firestore';
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
			location: vehicle.location,
			leaveTime: vehicle.leaveTime
		});
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
}
