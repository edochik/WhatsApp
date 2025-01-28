import { URL } from "../../../utils/api.ts";

interface Data {
	idInstance: string,
	apiTokenInstance: string,
	receiptId: number,
}

export const fetchDeleteNotification = async (data: Data) => {
	const { idInstance, apiTokenInstance, receiptId } = data;
	await fetch(`${URL}waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`, {
		method: 'DELETE'
	});
}
