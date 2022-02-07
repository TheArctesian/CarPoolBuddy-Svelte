import type { User } from 'firebase/auth';

export type vehicle = {
	id: string;
	owner: User;
	model: string;
	riders: User[];
	capacity: number;
	location: {
		lat: number;
		lng: number;
	};
	leaveTime: number;
};
