import { URL } from "../../utils/api.ts";
import { fetchSendMessageData } from "./fetchSendMessageThunk.ts";

export const fetchSendMessage = async (data: fetchSendMessageData) => {
	const { idInstance, apiTokenInstance, phoneNumber, message } = data;
	const response = await fetch(`${URL}waInstance${idInstance}/SendMessage/${apiTokenInstance}`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			chatId: `${phoneNumber}@c.us`,
			message,
		}),
	});
	if (!response.ok) {
		throw new Error()
	}
	return await response.json()
}
