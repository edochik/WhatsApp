export interface InitialAuthState {
	error: null | string;
	loading: 'idle' | 'pending' | 'succeeded' | 'failed';
	idInstance: string;
	apiTokenInstance: string;
	isStateInstance: boolean,
	phoneNumber: string,
}

export type FetchStateInstanceData = Pick<InitialAuthState, 'idInstance' | 'apiTokenInstance'>;
export type StateInstanceResponse = { stateInstance: string; }


