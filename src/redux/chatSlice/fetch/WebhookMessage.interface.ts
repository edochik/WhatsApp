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