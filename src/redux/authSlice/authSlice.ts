import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchStateInstanceThunk as fetchStateInstanceThunk } from "./fetchStateInstanceThunk.ts";

export interface InitialAuthState {
	error: null | string;
	loading: 'idle' | 'pending' | 'succeeded' | 'failed';
	idInstance: string;
	apiTokenInstance: string;
	isStateInstance: boolean,
	phoneNumber: string,
}

const initialState: InitialAuthState = {
	error: null,
	loading: 'idle',
	idInstance: '1103182240',
	apiTokenInstance: '86613b0df72249609407c4b78b865aa39de60ebcaf644e6cb3',
	isStateInstance: false,
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
		builder.addCase(fetchStateInstanceThunk.pending, (state) => {
			state.loading = "pending";
		})
		builder.addCase(fetchStateInstanceThunk.fulfilled, (state) => {
			state.loading = "succeeded";
			state.isStateInstance = true;
		})
		builder.addCase(fetchStateInstanceThunk.rejected, (state, action) => {
			state.loading = "failed"
			state.error = action.payload as string;
		})
	}
})


export const { updateAuth } = authSlice.actions;
