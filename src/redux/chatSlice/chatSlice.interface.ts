import { InitialAuthState } from "../authSlice/authSlice.interface.ts";

export interface Message {
	idMessage: string;
	textMessage: string;
	isOwnMessage: boolean
}

export interface InitialMessageState {
	messages: Message[]
	message: string
	error: null | string;
}
// idInstance: string; apiTokenInstance: string; phoneNumber: string;
export type AuthData = Pick<InitialAuthState, 'idInstance' | 'apiTokenInstance'>;
export type SendMessageData = AuthData & { phoneNumber: string; message: string };
export type SendMessageResponse = { idMessage: string }
export type ReceiveNotificationResponse = Pick<Message, 'idMessage' | 'textMessage'>
export type DeleteNotificationData = AuthData & { receiptId: number };


export interface WebhookMessage {
	receiptId: number;
	body: {
		typeWebhook: string;
		instanceData: {
			idInstance: number;
			wid: string;
			typeInstance: string;
		};
		timestamp: number;
		idMessage: string;
		senderData: {
			chatId: string;
			chatName: string;
			sender: string;
			senderName: string;
			senderContactName: string;
		};
		messageData: {
			typeMessage: string;
			extendedTextMessageData: {
				text: string;
				description: string;
				title: string;
				previewType: string;
				jpegThumbnail: string;
				forwardingScore: number;
				isForwarded: boolean;
			};
		};
	};
}