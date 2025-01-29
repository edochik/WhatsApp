import { API_URL } from "../../../utils/api.ts";
import { DeleteNotificationData } from "../chatSlice.interface.ts";

export const fetchDeleteNotification = async (data: DeleteNotificationData): Promise<void> => {
	const { idInstance, apiTokenInstance, receiptId } = data;
	await fetch(`${API_URL}waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`, {
		method: 'DELETE'
	});
}
