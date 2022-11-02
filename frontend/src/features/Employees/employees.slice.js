import { createSlice } from '@reduxjs/toolkit';
import { Employee } from '../../models/EmployeeModel';

export const employeesSlice = createSlice({
	name: 'employees',
	initialState: {
		employees: [],
	},
	reducers: {
		addEmployee: (state, { payload }) => {
			state.employees.push(new Employee(payload).addEmployee);
		},
	},
});

export const { addEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;
