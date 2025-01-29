import { URL } from "../../utils/api.ts";
import { FetchStateInstanceData, StateInstanceResponse } from "./authSlice.interface.ts";

export async function fetchCheckWhatsapp(data: FetchStateInstanceData): Promise<StateInstanceResponse> {
	const { idInstance, apiTokenInstance } = data;
	const response = await fetch(`${URL}waInstance${idInstance}/getStateInstance/${apiTokenInstance}`);
	console.log(await response.json(), 'response');
	if (!response.ok) {
		throw new Error()
	}
	return await response.json();
}
