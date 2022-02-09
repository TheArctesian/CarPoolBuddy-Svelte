import type { User } from 'firebase/auth';

export type vehicle = {
	owner: string;
	model: string;
	riders: string[];
	capacity: number;
	isElectric: boolean;
	lat: string;
	lng: string;
	leaveTime: string;
};
