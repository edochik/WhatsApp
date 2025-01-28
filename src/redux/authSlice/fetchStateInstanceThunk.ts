import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCheckWhatsapp } from "./fetchStateInstance.ts";
import { InitialAuthState } from "./authSlice.ts";

export type FetchStateInstanceData = Pick<InitialAuthState, 'idInstance' | 'apiTokenInstance'>;
interface Response {
	stateInstance: string
}

export const fetchStateInstanceThunk = createAsyncThunk<
	Response,
	FetchStateInstanceData,
	{ rejectValue: string }>(
		'fetchStateInstanceThunk',
		async (data: FetchStateInstanceData, { rejectWithValue }) => {
			try {
				const response: Response = await fetchCheckWhatsapp(data);
				return response;
			} catch {
				return rejectWithValue("Что-то пошло не так, может не правильный idInstance или apiTokenInstance")
			}
		})