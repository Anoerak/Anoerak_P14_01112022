import { createSlice } from '@reduxjs/toolkit';
import { Employee } from '../../models/EmployeeModel';

export const employeesSlice = createSlice({
	name: 'employees',
	initialState: {
		employeesArray: [],
	},
	reducers: {
		addEmployee: (state, { payload }) => {
			const employee = new Employee(payload);
			state.employeesArray.push(employee.addEmployee());
		},
	},
});

export const { addEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;
