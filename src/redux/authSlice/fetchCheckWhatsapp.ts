import { URL } from "../../utils/api.ts";
import { fetchCheckWhatsappData } from "./fetchCheckWhatsappThunk.ts";
// проверка авторизации нужна ли мне???
export async function fetchCheckWhatsapp(data: fetchCheckWhatsappData) {
	const { idInstance, apiTokenInstance } = data;
	const response = await fetch(`${URL}waInstance${idInstance}/getStateInstance/${apiTokenInstance}`);
	if (!response.ok) {
		throw new Error()
	}
	return await response.json();
}
