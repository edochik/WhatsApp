import { AuthData } from "../authSlice/authSlice.interface.ts";

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

export type SendMessageData = Omit<AuthData, 'isStateInstance'> & { message: string };
export type SendMessageResponse = { idMessage: string }

export type ReceiveNotificationResponse = Omit<Message, 'isOwnMessage'>
export type ReceiveNotificationData = Pick<AuthData, 'idInstance' | 'apiTokenInstance'>

export type DeleteNotificationData = Omit<AuthData, 'isStateInstance' | 'phoneNumber'> & { receiptId: number };

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