import { URL } from "../../utils/api.ts"

const ms: number = 3000;
const receiveTimeout: number = 60
interface ReceiveNotification {
	receiptId: number;
	body: {
		typeWebhook: string,
		instanceData: {
			idInstance: number,
			wid: string,
			typeInstance: "string",
		},
		timestamp: number,
		idMessage: string,
		senderData: {
			chatId: string,
			chatName: string,
			sender: string,
			senderName: string,
			senderContactName: string,
		},
		messageData: {
			typeMessage: string,
			textMessageData: {
				textMessage: string,
			},
		},
	};
}


export const fetchListenerMessage = async (data: Record<string, string>) => {
	const { idInstance, apiTokenInstance, phoneNumber } = data;
	while (true) {
		try {
			// console.log('перед response');
			const response = await fetch(`${URL}waInstance${idInstance}/receiveNotification/${apiTokenInstance}?receiveTimeout=${receiveTimeout}`);
			if (response === null || !response.ok) {
				// console.log('создаем ошибку', response);
				throw new Error()
			}
			// console.log('перед результатом');
			const result: ReceiveNotification = await response.json();
			// console.log(result);
			if (result.body.senderData.chatId.startsWith(phoneNumber)) {
				const { receiptId } = result;
				await fetchDeleteNotification({ idInstance, apiTokenInstance, receiptId })
			}
			fetchListenerMessage({ idInstance, apiTokenInstance, phoneNumber });
			console.log('до сюда не доходим');
			console.log(result.body.idMessage, 'result.body.idMessage');
			console.log(result, 'result.body.messageData');
			return {
				textMessage: result.body.messageData.textMessageData.textMessage,
				idMessage: result.body.idMessage
			}
		} catch {
			// console.log('я слушая все');
			await sleep(ms)
		}
	}
}

const sleep = (ms: number): Promise<void> => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(), ms)
	})
}

const fetchDeleteNotification = async (data: Record<string, string | number>) => {
	const { idInstance, apiTokenInstance, receiptId } = data;
	const response = await fetch(`${URL}waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`, {
		method: 'DELETE'
	});
	console.log(await response.json(), 'fetchDeleteNotification');
}