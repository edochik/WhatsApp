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
	error: null | string; //!
	loading: 'idle' | 'pending' | 'succeeded' | 'failed'; //! какая логика должна быть если это чат
}

const initialState: InitialMessageState = {
	error: null,
	loading: 'idle',
	messages: [],
	message: '',
}

export const messagesSlice = createSlice({
	name: 'messagesSlice',
	initialState,
	reducers: {
		updateMessage: (state, action: PayloadAction<{ value: string }>) => {
			state.message = action.payload.value
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSendMessageThunk.pending, (state, action) => {
			})
			.addCase(fetchSendMessageThunk.fulfilled, (state, action) => {
				const { idMessage } = action.payload
				const { message } = state
				state.messages.push({ idMessage, textMessage: message, isOwnMessage: true })
				state.message = ""
			})
			.addCase(fetchSendMessageThunk.rejected, (state, action) => {
			})
			.addCase(fetchListenerMessageThunk.pending, (state, action) => {
			})
			.addCase(fetchListenerMessageThunk.fulfilled, (state, action) => {
				const { idMessage, textMessage } = action.payload
				state.messages.push({ idMessage, textMessage, isOwnMessage: false });
			})
			.addCase(fetchListenerMessageThunk.rejected, (state, action) => {
			})
	}
})

export const { updateMessage } = messagesSlice.actions;
