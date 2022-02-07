import type { User } from 'firebase/auth';

export type vehicle = {
	owner: User;
	model: string;
	riders: User[];
	capacity: number;
	isElectric: boolean;
	latlng: string;
	leaveTime: string;
};
