import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPhone } from "./fetchPhone.ts";
import { InitialPhoneState } from "./phoneSlice.ts";
import { fetchCheckWhatsappData } from "../authSlice/fetchCheckWhatsappThunk.ts";

export type fetchPhoneData =
	fetchCheckWhatsappData &
	Pick<InitialPhoneState, 'phoneNumber'>

export interface PhoneCheckResponse {
	existsWhatsapp: boolean
}

export const fetchPhoneThunk = createAsyncThunk<
	PhoneCheckResponse,
	fetchPhoneData,
	{ rejectValue: string }
>(
	'fetchPhoneThunk',
	async (data, { rejectWithValue }) => {
		try {
			const response = await fetchPhone(data);
			return response;
		} catch {
			return rejectWithValue("Что-то пошло не так, попробуйте позже")
		}
	})