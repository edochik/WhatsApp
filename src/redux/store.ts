

import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './authSlice/authSlice.ts'
import { phoneSlice } from './phoneSlice/phoneSlice.ts'

const store = configureStore({
	reducer: {
		authorization: authSlice.reducer,
		phone: phoneSlice.reducer
	}
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store