import { URL } from "../../../utils/api.ts";
import { sleep } from "./sleep.ts";
import { fetchDeleteNotification } from "./fetchDeleteNotification.ts";
import { WebhookMessage } from "./WebhookMessage.interface.ts";

const ms: number = 3000;
//! интерфейс повтор  Record<string, string>

export const fetchReceiveNotification = async (data: Record<string, string>) => {
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
			await sleep(ms)
		}
	}
}
