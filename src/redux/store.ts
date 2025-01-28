import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './authSlice/authSlice.ts'
import { phoneSlice } from './phoneSlice/phoneSlice.ts'
import { messagesSlice } from './messagesSlice/messagesSlice.ts'
import { listenerMiddleware } from './listenerMiddleware.ts'

const store = configureStore({
	reducer: {
		authorization: authSlice.reducer,
		phone: phoneSlice.reducer,
		messages: messagesSlice.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().prepend(listenerMiddleware.middleware),

})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store