import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./store.ts";
import { fetchStateInstanceThunk } from "./authSlice/fetchStateInstanceThunk.ts";
import { fetchReceiveNotificationThunk } from "./chatSlice/thunk/fetchReceiveNotificationThunk.ts";

export const listenerMiddleware = createListenerMiddleware();
export const startAppListening = listenerMiddleware.startListening.withTypes<
	RootState,
	AppDispatch
>();

startAppListening({
	matcher: isAnyOf(fetchStateInstanceThunk.fulfilled, fetchReceiveNotificationThunk.fulfilled),
	effect: async (_, listenerApi) => {
		const { idInstance, apiTokenInstance, phoneNumber } = listenerApi.getState().authorization;
		listenerApi.dispatch(fetchReceiveNotificationThunk({ idInstance, apiTokenInstance, phoneNumber }))
	}
})