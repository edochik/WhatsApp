import { URL } from "../../utils/api.ts";
import { FetchCheckWhatsappData } from "./fetchCheckWhatsappThunk.ts";

export async function fetchCheckWhatsapp(data: FetchCheckWhatsappData) {
	const { idInstance, apiTokenInstance } = data;
	const response = await fetch(`${URL}waInstance${idInstance}/getStateInstance/${apiTokenInstance}`);
	if (!response.ok) {
		throw new Error()
	}
	return await response.json();
}
