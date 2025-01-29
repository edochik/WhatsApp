import { API_URL } from "../../utils/api.ts";
import { FetchStateInstanceData, StateInstanceResponse } from "./authSlice.interface.ts";

export async function fetchStateInstance(data: FetchStateInstanceData): Promise<StateInstanceResponse> {
	const { idInstance, apiTokenInstance } = data;
	const response = await fetch(`${API_URL}waInstance${idInstance}/getStateInstance/${apiTokenInstance}`);
	if (!response.ok) {
		throw new Error()
	}
	return await response.json();
}
