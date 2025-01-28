import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCheckWhatsapp } from "./fetchCheckWhatsapp.ts";
import { InitialAuthState } from "./authSlice.ts";

export type fetchCheckWhatsappData = Pick<InitialAuthState, 'idInstance' | 'apiTokenInstance'>;

export const fetchCheckWhatsappThunk = createAsyncThunk(
	'fetchCheckWhatsappThunk',
	async (data: fetchCheckWhatsappData, { rejectWithValue }) => {
		try {
			const response = await fetchCheckWhatsapp(data);
			return response;
		} catch {
			return rejectWithValue("Что-то пошло не так, может не правильный idInstance или apiTokenInstance")
		}
	})