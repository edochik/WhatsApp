import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./store.ts";
import { fetchListenerMessageThunk } from "./chatSlice/fetchListenerMessageThunk.ts";
import { fetchStateInstanceThunk } from "./authSlice/fetchStateInstanceThunk.ts";

export const listenerMiddleware = createListenerMiddleware();
export const startAppListening = listenerMiddleware.startListening.withTypes<
	RootState,
	AppDispatch
>();

startAppListening({
	matcher: isAnyOf(fetchStateInstanceThunk.fulfilled, fetchListenerMessageThunk.fulfilled),
	effect: async (_, listenerApi) => {
		const { idInstance, apiTokenInstance, phoneNumber } = listenerApi.getState().authorization;
		listenerApi.dispatch(fetchListenerMessageThunk({ idInstance, apiTokenInstance, phoneNumber }))
	}
})