import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCheckWhatsapp } from "./fetchCheckWhatsapp.ts";
import { InitialAuthState } from "./authSlice.ts";
export type FetchCheckWhatsappData = Pick<InitialAuthState, 'idInstance' | 'apiTokenInstance'>;

export const fetchCheckWhatsappThunk = createAsyncThunk(
	'fetchCheckWhatsapp',
	async (data: FetchCheckWhatsappData, { rejectWithValue }) => {
		try {
			const response = await fetchCheckWhatsapp(data);
			return response;
		} catch {
			return rejectWithValue("Что-то пошло не так, попробуйте позже")
		}
	})