import { URL } from "../../utils/api.ts";
import { FetchStateInstanceData } from "./fetchStateInstanceThunk.ts";


export async function fetchCheckWhatsapp(data: FetchStateInstanceData) {
	const { idInstance, apiTokenInstance } = data;
	const response = await fetch(`${URL}waInstance${idInstance}/getStateInstance/${apiTokenInstance}`);
	if (!response.ok) {
		throw new Error()
	}
	return await response.json();
}
