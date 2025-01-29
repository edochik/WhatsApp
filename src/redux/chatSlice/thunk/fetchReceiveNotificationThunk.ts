import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchReceiveNotification } from "../fetch/fetchReceiveNotification.ts";
import { ReceiveNotificationData, ReceiveNotificationResponse } from "../chatSlice.interface.ts";

//{ idInstance, apiTokenInstance, phoneNumber }
export const fetchReceiveNotificationThunk = createAsyncThunk<
	ReceiveNotificationResponse,
	ReceiveNotificationData,
	{ rejectValue: string }>(
		'fetchListenerMessageThunk',
		async (data: ReceiveNotificationData, { rejectWithValue }) => {
			try {
				const response: ReceiveNotificationResponse = await fetchReceiveNotification(data);
				return response
			} catch {
				return rejectWithValue("Что-то пошло не так, попробуйте позже")
			}
		}
	)