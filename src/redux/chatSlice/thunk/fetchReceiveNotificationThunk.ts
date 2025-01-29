import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchReceiveNotification } from "../fetch/fetchReceiveNotification.ts";
import { AuthData, ReceiveNotificationResponse } from "../chatSlice.interface.ts";

export const fetchReceiveNotificationThunk = createAsyncThunk<
	ReceiveNotificationResponse,
	AuthData,
	{ rejectValue: string }>(
		'fetchListenerMessageThunk',
		async (data: AuthData, { rejectWithValue }) => {
			try {
				const response: ReceiveNotificationResponse = await fetchReceiveNotification(data);
				return response
			} catch {
				return rejectWithValue("Что-то пошло не так (fetchReceiveNotificationThunk), попробуйте позже")
			}
		}
	)