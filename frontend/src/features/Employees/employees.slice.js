import { createSlice } from '@reduxjs/toolkit';
import { Employee } from '../../models/EmployeeModel';

/**
 * @name employeesSlice
 * @description Redux slice for employees
 * @type {object}
 * @property {object} initialState - Initial state of the slice
 * @property {object} reducers - Reducers for the slice
 * @property {function} reducers.addEmployee - Add employee to the state
 * @property {function} reducers.emptyEmployeesArray - Reinitialize the employees array
 * @property {function} reducers.setSearchValue - Set the search value based on the input
 *
 */

export const employeesSlice = createSlice({
	name: 'employees',
	initialState: {
		baseUrl: 'http://localhost:8080/',
		employeesArray: [],
		searchValue: '',
		statesArray: [],
		departmentsArray: [],
	},
	reducers: {
		// Action to add a new employee to the array
		addEmployee: (state, { payload }) => {
			const employee = new Employee(payload);
			state.employeesArray.push(employee.addEmployee());
		},
		// Action to reset the mocked data
		emptyEmployeesArray: (state) => {
			state.employeesArray = [];
		},
		// Action to update the search value
		setSearchValue: (state, { payload }) => {
			state.searchValue = payload;
		},
		// Action to update the states array
		setStatesArray: (state, { payload }) => {
			state.statesArray = payload;
		},
		// Action to update the departments array
		setDepartmentsArray: (state, { payload }) => {
			state.departmentsArray = payload;
		},
	},
});

export const { addEmployee, emptyEmployeesArray, setSearchValue, setStatesArray, setDepartmentsArray } =
	employeesSlice.actions;

export default employeesSlice.reducer;
