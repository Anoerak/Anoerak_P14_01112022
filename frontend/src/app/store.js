import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from '../features/Employees/employees.slice';

export const store = configureStore({
	reducer: {
		employees: employeesReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
