import { URL } from "../../utils/api.ts";
import { fetchPhoneData, PhoneCheckResponse } from "./fetchPhoneThunk.ts";

export const fetchPhone = async (data: fetchPhoneData): Promise<PhoneCheckResponse> => {
	const { idInstance, apiTokenInstance, phoneNumber } = data;
	const response = await fetch(`${URL}waInstance${idInstance}/checkWhatsapp/${apiTokenInstance}`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ phoneNumber })
	});
	if (!response.ok) {
		throw new Error()
	}
	return await response.json()
}