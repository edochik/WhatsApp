import { API_URL } from "../../../utils/api.ts";
import { sleep } from "./sleep.ts";
import { fetchDeleteNotification } from "./fetchDeleteNotification.ts";
import { AuthData, ReceiveNotificationResponse, WebhookMessage } from "../chatSlice.interface.ts";

const ms: number = 3000;

export const fetchReceiveNotification = async (data: AuthData): Promise<ReceiveNotificationResponse> => {
	const { idInstance, apiTokenInstance } = data;
	while (true) {
		try {
			const response = await fetch(`${API_URL}waInstance${idInstance}/receiveNotification/${apiTokenInstance}`);
			if (response === null || !response.ok) {
				throw new Error()
			}
			const result: WebhookMessage = await response.json();
			const { receiptId } = result;
			await fetchDeleteNotification({ idInstance, apiTokenInstance, receiptId })
			return {
				textMessage: result.body.messageData.extendedTextMessageData.text,
				idMessage: result.body.idMessage
			}
		} catch {
			await sleep(ms)
		}
	}
}
