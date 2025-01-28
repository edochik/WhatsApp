import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchListenerMessage } from "./fetchListenerMessage.ts";
import { Message } from "./messagesSlice.ts";

export const fetchListenerMessageThunk = createAsyncThunk<
	Message,
	Record<string, string>,
	{ rejectValue: string }>(
		'fetchListenerMessageThunk',
		async (data, { rejectWithValue }) => {
			try {
				const response = await fetchListenerMessage(data);
				console.log(response, 'ответ не доходит');
				return response
			} catch {
				return rejectWithValue("Ошибка получения данных")
			}
		}
	)