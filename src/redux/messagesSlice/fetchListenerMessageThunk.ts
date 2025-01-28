import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchListenerMessage } from "./fetchListenerMessage.ts";
import { InitialAuthState } from "../authSlice/authSlice.ts";

export type fetchListenerData = Pick<InitialAuthState, 'idInstance' | 'apiTokenInstance'>;


export const fetchListenerMessageThunk = createAsyncThunk<
	string,
	fetchListenerData,
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