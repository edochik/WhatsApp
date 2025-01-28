import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCheckWhatsapp } from "./fetchStateInstance.ts";
import { InitialAuthState } from "./authSlice.ts";

export type FetchStateInstanceData = Pick<InitialAuthState, 'idInstance' | 'apiTokenInstance'>;

export const fetchStateInstanceThunk = createAsyncThunk(
	'fetchStateInstanceThunk',
	async (data: FetchStateInstanceData, { rejectWithValue }) => {
		try {
			const response = await fetchCheckWhatsapp(data);
			return response;
		} catch {
			return rejectWithValue("Что-то пошло не так, может не правильный idInstance или apiTokenInstance")
		}
	})