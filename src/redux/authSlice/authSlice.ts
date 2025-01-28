import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCheckWhatsappThunk } from "./fetchCheckWhatsappThunk.ts";

export interface InitialAuthState {
	error: null | string;
	loading: 'idle' | 'pending' | 'succeeded' | 'failed';
	idInstance: string;
	apiTokenInstance: string;
	isAuthorized: boolean,
	phoneNumber: string,
}

const initialState: InitialAuthState = {
	error: null,
	loading: 'idle',
	idInstance: '1103182240',
	apiTokenInstance: '86613b0df72249609407c4b78b865aa39de60ebcaf644e6cb3',
	isAuthorized: false,
	phoneNumber: '79110995379',
}

export const authSlice = createSlice({
	name: 'authSlice',
	initialState,
	reducers: {
		updateAuth: (state, action: PayloadAction<{ key: keyof InitialAuthState, value: string }>) => {
			const { key, value } = action.payload;
			(state[key] as string) = value;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCheckWhatsappThunk.pending, (state) => {
			state.loading = "pending";
		})
		builder.addCase(fetchCheckWhatsappThunk.fulfilled, (state) => {
			state.loading = "succeeded";
			state.isAuthorized = true;
		})
		builder.addCase(fetchCheckWhatsappThunk.rejected, (state, action) => {
			state.loading = "failed"
			state.error = action.payload as string;
		})
	}
})


export const { updateAuth } = authSlice.actions;
