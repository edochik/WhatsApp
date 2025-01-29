export interface AuthData {
	idInstance: string,
	apiTokenInstance: string,
	phoneNumber: string,
	isStateInstance: boolean,
}

export interface InitialAuthState extends AuthData {
	error: null | string;
	loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

export type FetchStateInstanceData = Pick<AuthData, 'idInstance' | 'apiTokenInstance'>;
export type StateInstanceResponse = { stateInstance: string; }
