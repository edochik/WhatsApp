import { API_URL } from "../../../utils/api.ts";
import { SendMessageData, SendMessageResponse } from "../chatSlice.interface.ts";


export const fetchSendMessage = async (data: SendMessageData): Promise<SendMessageResponse> => {
	const { idInstance, apiTokenInstance, phoneNumber, message } = data;
	const response = await fetch(`${API_URL}waInstance${idInstance}/SendMessage/${apiTokenInstance}`, {
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
