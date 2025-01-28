import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchPhoneThunk } from "./fetchPhoneThunk.ts";

export interface InitialPhoneState {
	error: null | string;
	loading: 'idle' | 'pending' | 'succeeded' | 'failed';
	phoneNumber: string,
	hasPhoneNumber: boolean
}

const initialState: InitialPhoneState = {
	error: null,
	loading: 'idle',
	phoneNumber: '79110995379',
	hasPhoneNumber: false
}

export const phoneSlice = createSlice({
	name: 'phoneSlice',
	initialState,
	reducers: {
		updatePhoneNumber: (state, action: PayloadAction<{ value: string }>) => {
			state.phoneNumber = action.payload.value
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPhoneThunk.pending, (state) => {
				state.loading = 'pending'
			})
			.addCase(fetchPhoneThunk.fulfilled, (state) => {
				state.loading = "succeeded";
				state.hasPhoneNumber = true;
			})
			.addCase(fetchPhoneThunk.rejected, (state, action) => {
				state.error = action.payload ?? "Неизвестная ошибка";
			});
	}
})
export const { updatePhoneNumber } = phoneSlice.actions;

