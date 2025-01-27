import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Message {
	idMessage: string;
	message: string;
}
interface InitialState {
	messages: Message[]
	message: string
}

const initialState: InitialState = {
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

	}
})

export const { updateMessage } = messagesSlice.actions;
