import type { User } from 'firebase/auth';

export type vehicle = {
	owner: User;
	model: string;
	riders: User[];
	capacity: number;
	isElectric: boolean;
	lat: string;
	lng: string;
	leaveTime: string;
};
