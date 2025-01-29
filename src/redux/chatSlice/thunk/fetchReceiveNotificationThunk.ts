import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchReceiveNotification } from "../fetch/fetchReceiveNotification.ts";
import { Message } from "../chatSlice.ts";


type Response = Pick<Message, 'idMessage' | 'textMessage'>

export const fetchReceiveNotificationThunk = createAsyncThunk<
	Response,
	Record<string, string>,
	{ rejectValue: string }>(
		'fetchListenerMessageThunk',
		async (data, { rejectWithValue }) => {
			try {
				const response = await fetchReceiveNotification(data);
				return response
			} catch {
				return rejectWithValue("Что-то пошло не так, попробуйте позже")
			}
		}
	)