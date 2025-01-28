import { URL } from "../../utils/api.ts"
import { fetchDeleteNotification } from "./fetchDeleteNotification.ts";
import { WebhookMessage } from "./interface.ts";
import { sleep } from "./sleep.ts";

const ms: number = 3000;

export const fetchListenerMessage = async (data: Record<string, string>) => {
	const { idInstance, apiTokenInstance, phoneNumber } = data;
	while (true) {
		try {
			const response = await fetch(`${URL}waInstance${idInstance}/receiveNotification/${apiTokenInstance}`);
			if (response === null || !response.ok) {
				throw new Error()
			}
			const result: WebhookMessage = await response.json();
			if (result.body.senderData.chatId.startsWith(phoneNumber)) {
				const { receiptId } = result;
				await fetchDeleteNotification({ idInstance, apiTokenInstance, receiptId })
			}
			return {
				textMessage: result.body.messageData.extendedTextMessageData.text,
				idMessage: result.body.idMessage
			}
		} catch {
			console.log(ms);
			await sleep(ms)
		}
	}
}
