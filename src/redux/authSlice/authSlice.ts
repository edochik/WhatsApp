import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCheckWhatsappThunk } from "./fetchCheckWhatsappThunk.ts";

export interface InitialAuthState {
	error: null | string;
	loading: 'idle' | 'pending' | 'succeeded' | 'failed';
	idInstance: string;
	apiTokenInstance: string;
	isAuthorized: boolean,
}

const initialState: InitialAuthState = {
	error: null,
	loading: 'idle',
	idInstance: '1103180871',
	apiTokenInstance: '0250681f73224ed1b1c02e53e17d9aa35e72b6ad22f44c6996',
	isAuthorized: false
}


export const authSlice = createSlice({
	name: 'authSlice',
	initialState,
	reducers: {
		updateAuth: (state, action: PayloadAction<{ key: keyof InitialAuthState, value: string }>) => {
			const { key, value } = action.payload;
			(state[key] as string) = value;
		}
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
			console.log(action.payload, 'payload');
			state.loading = "failed"
			state.error = action.payload as string || null;
		})
	}
})


export const { updateAuth } = authSlice.actions;
