import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchStateInstanceThunk } from "./fetchStateInstanceThunk.ts";
import { AuthData, InitialAuthState } from "./authSlice.interface.ts";

const initialState: InitialAuthState = {
	error: null,
	loading: 'idle',
	idInstance: '',
	apiTokenInstance: '',
	isStateInstance: false,
	phoneNumber: '',
}

export const authSlice = createSlice({
	name: 'authSlice',
	initialState,
	reducers: {
		updateAuth: (state, action: PayloadAction<{ key: keyof AuthData, value: string }>) => {
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
