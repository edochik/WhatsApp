import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchListenerMessage } from "./fetchListenerMessage.ts";
import { Message } from "./chatSlice.ts";

type Response = Pick<Message, 'idMessage' | 'textMessage'>

export const fetchListenerMessageThunk = createAsyncThunk<
	Response,
	Record<string, string>,
	{ rejectValue: string }>(
		'fetchListenerMessageThunk',
		async (data, { rejectWithValue }) => {
			try {
				const response = await fetchListenerMessage(data);
				return response
			} catch {
				return rejectWithValue("Ошибка получения данных")
			}
		}
	)