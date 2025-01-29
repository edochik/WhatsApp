import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCheckWhatsapp } from "./fetchStateInstance.ts";
import { FetchStateInstanceData, StateInstanceResponse } from "./authSlice.interface.ts";

export const fetchStateInstanceThunk = createAsyncThunk<
	StateInstanceResponse,
	FetchStateInstanceData,
	{ rejectValue: string }>(
		'fetchStateInstanceThunk',
		async (data: FetchStateInstanceData, { rejectWithValue }) => {
			try {
				return await fetchCheckWhatsapp(data);
			} catch {
				return rejectWithValue("Что-то пошло не так, может не правильный idInstance или apiTokenInstance")
			}
		})