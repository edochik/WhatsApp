import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchStateInstance } from "./fetchStateInstance.ts";
import { FetchStateInstanceData, StateInstanceResponse } from "./authSlice.interface.ts";

export const fetchStateInstanceThunk = createAsyncThunk<
	StateInstanceResponse,
	FetchStateInstanceData,
	{ rejectValue: string }>(
		'fetchStateInstanceThunk',
		async (data: FetchStateInstanceData, { rejectWithValue }) => {
			try {
				return await fetchStateInstance(data);
			} catch {
				return rejectWithValue("Что-то пошло не так, может не правильный idInstance или apiTokenInstance")
			}
		})