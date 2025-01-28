import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSendMessage } from "./fetchSendMessage.ts";
import { fetchPhoneData } from "../phoneSlice/fetchPhoneThunk.ts";
import { InitialMessageState } from "./messagesSlice.ts";

export type fetchSendMessageData = fetchPhoneData & Pick<InitialMessageState, 'message'>

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


