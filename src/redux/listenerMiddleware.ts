import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./store.ts";
import { fetchPhoneThunk } from "./phoneSlice/fetchPhoneThunk.ts";
import { fetchListenerMessageThunk } from "./messagesSlice/fetchListenerMessageThunk.ts";

export const listenerMiddleware = createListenerMiddleware();
export const startAppListening = listenerMiddleware.startListening.withTypes<
	RootState,
	AppDispatch
>();


startAppListening({
	matcher: isAnyOf(fetchPhoneThunk.fulfilled),
	effect: async (action, listenerApi) => {
		const { idInstance, apiTokenInstance } = listenerApi.getState().authorization;
		listenerApi.dispatch(fetchListenerMessageThunk({ idInstance, apiTokenInstance }))
	}
})