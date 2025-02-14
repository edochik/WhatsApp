import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchSendMessageThunk } from "./thunk/fetchSendMessageThunk.ts";
import { fetchReceiveNotificationThunk } from "./thunk/fetchReceiveNotificationThunk.ts";
import { InitialMessageState } from "./chatSlice.interface.ts";

const initialState: InitialMessageState = {
	error: null,
	messages: [],
	message: '',
}

export const chatSlice = createSlice({
	name: 'chatSlice',
	initialState,
	reducers: {
		updateMessage: (state, action: PayloadAction<{ value: string }>) => {
			state.message = action.payload.value
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSendMessageThunk.fulfilled, (state, action) => {
				const { idMessage } = action.payload
				const { message } = state
				state.messages.unshift({ idMessage, textMessage: message, isOwnMessage: true })
				state.message = ""
			})
			.addCase(fetchSendMessageThunk.rejected, (state, action) => {
				state.error = action.payload as string;
			})
			.addCase(fetchReceiveNotificationThunk.fulfilled, (state, action) => {
				const { idMessage, textMessage } = action.payload
				state.messages.unshift({ idMessage, textMessage, isOwnMessage: false });
			})
			.addCase(fetchReceiveNotificationThunk.rejected, (state, action) => {
				state.error = action.payload as string;
			})
	}
})

export const { updateMessage } = chatSlice.actions;
