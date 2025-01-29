import { createAsyncThunk } from "@reduxjs/toolkit";
import { SendMessageData, SendMessageResponse } from "../chatSlice.interface.ts";
import { fetchSendMessage } from "../fetch/fetchSendMessage.ts";



export const fetchSendMessageThunk = createAsyncThunk<
	SendMessageResponse,
	SendMessageData,
	{ rejectValue: string }>(
		'fetchSendMessageThunk',
		async (data, { rejectWithValue }) => {
			try {
				const response: SendMessageResponse = await fetchSendMessage(data);
				return response
			} catch {
				return rejectWithValue("Что-то пошло не  (fetchSendMessageThunk), попробуйте позже")
			}
		}
	)


