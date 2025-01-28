import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchSendMessageThunk } from "./fetchSendMessageThunk.ts";
import { fetchListenerMessageThunk } from "./fetchListenerMessageThunk.ts";

export interface Message {
	idMessage: string;
	textMessage: string;
	isOwnMessage: boolean
}

export interface InitialMessageState {
	messages: Message[]
	message: string
	error: null | string;
}

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
			.addCase(fetchListenerMessageThunk.fulfilled, (state, action) => {
				const { idMessage, textMessage } = action.payload
				state.messages.unshift({ idMessage, textMessage, isOwnMessage: false });
			})
	}
})

export const { updateMessage } = chatSlice.actions;
