import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface InitialPhoneState {
	error: null | string,
	phoneNumber: string,
	hasPhoneNumber: boolean
}

const initialState = {
	error: null,
	phoneNumber: '',
	hasPhoneNumber: false
}


export const phoneSlice = createSlice({
	name: 'phoneSlice',
	initialState,
	reducers: {
		updatePhoneNumber: (state, action: PayloadAction<{ key: keyof InitialPhoneState, value: string }>) => {
			const { key, value } = action.payload;
			(state[key] as string) = value
		}
	},
	extraReducers: (builder) => {

	}
})