import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './authSlice/authSlice.ts'
import { chatSlice } from './chatSlice/chatSlice.ts'
import { listenerMiddleware } from './listenerMiddleware.ts'

const store = configureStore({
	reducer: {
		authorization: authSlice.reducer,
		chat: chatSlice.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().prepend(listenerMiddleware.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store