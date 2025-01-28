import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSendMessage } from "../fetch/fetchSendMessage.ts";

export type fetchSendMessageData = {
	idInstance: string,
	apiTokenInstance: string,
	phoneNumber: string,
	message: string
}

interface sendMessageResponse {
	idMessage: string
}

export const fetchSendMessageThunk = createAsyncThunk<
	sendMessageResponse,
	fetchSendMessageData,
	{ rejectValue: string }>(
		'fetchSendMessageThunk',
		async (data, { rejectWithValue }) => {
			try {
				const response = await fetchSendMessage(data);
				return response
			} catch {
				return rejectWithValue("Что-то пошло не так, попробуйте позже")
			}
		}
	)


