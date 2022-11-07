import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './Filter/FilterSlice';
import {setupListeners} from "@reduxjs/toolkit/query";
// import combineReducers from './Contact/ContactReducer';
import {contactsApi} from'./Contact/ContactSlice';

export const store = configureStore({
  reducer: { 
	// contacts: combineReducers,
	[contactsApi.reducerPath]: contactsApi.reducer,
	filter: filterReducer
},
middleware: getDefaultMiddleware =>[
	...getDefaultMiddleware(),
	contactsApi.middleware,
]
});

setupListeners(store.dispatch);