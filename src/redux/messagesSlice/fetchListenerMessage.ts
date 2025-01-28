import { URL } from "../../utils/api.ts"
import { fetchListenerData } from "./fetchListenerMessageThunk.ts";

const ms: number = 5000;

export const fetchListenerMessage = async (data: fetchListenerData) => {
	const { idInstance, apiTokenInstance } = data;
	const response = await fetch(`${URL}waInstance${idInstance}/receiveNotification/${apiTokenInstance}`);
	console.log(await response.json());
	if (!response.ok) {
		throw new Error()
	}
	return await response.json()
}

const sleep = (ms: number): Promise<void> => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(), ms)
	})
}